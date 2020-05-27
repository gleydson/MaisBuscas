import axios from 'axios';

import { Company } from '@ducks/companies/types';
import { Location } from '@ducks/locations/types';

const api = axios.create({
  baseURL: 'http://apppainel.maisbusca.com/api',
});

export interface CompanyIndication {
  id?: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}

interface LocationRequest {
  id: string;
  anuncios: {
    id: number;
    empresa: string;
    descricao: string;
    endereco: string;
    webpage: string;
    logo_url: string;
    categoria_id: string;
    telefone: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
    twitter: string;
    especial: string;
    youtube: string;
    pesquisa: string;
    locationId: number;
    imagem1: string;
    imagem2: string;
    imagem3: string;
  }[];
}

const categories = [
  { id: '439', name: 'Informática' },
  { id: '438', name: 'Transporte' },
  { id: '437', name: 'Caldos' },
  { id: '436', name: 'Parafusos e ferramentas' },
  { id: '435', name: 'Poço artesiano' },
  { id: '434', name: 'Moto táxi' },
  { id: '433', name: 'Táxi e Uber' },
  { id: '432', name: 'Mecânica e Auto mecânica' },
  { id: '431', name: 'Farmácia' },
  { id: '430', name: 'Pet shop e Veterinária' },
  { id: '429', name: 'Agropecuária' },
  { id: '427', name: 'Mercado e Mercearia' },
  { id: '428', name: 'Supermercado e Hipermercado' },
  { id: '426', name: 'Marketing e Publicidade' },
];

export async function getCompanies(locationId: number): Promise<Company[]> {
  try {
    const response = await api.post(`/getCidade.php?id=${locationId}`);
    const companies: Company[] = [];
    response.data.forEach((location: LocationRequest) => {
      const locId = Number(location.id);
      location.anuncios.forEach(company => {
        const gallery = [];
        if (company.imagem1) {
          gallery.push(
            `http://apppainel.maisbusca.com/images/empresas/${company.imagem1}`
          );
        }
        if (company.imagem2) {
          gallery.push(
            `http://apppainel.maisbusca.com/images/empresas/${company.imagem2}`
          );
        }
        if (company.imagem3) {
          gallery.push(
            `http://apppainel.maisbusca.com/images/empresas/${company.imagem3}`
          );
        }

        const category = categories.find(el => el.id === company.categoria_id);

        companies.push({
          id: Number(company.id),
          name: company.empresa,
          description: company.descricao,
          address:
            company.endereco.toLowerCase() === 'endereço não informado'
              ? ''
              : company.endereco,
          logoUrl: company.logo_url
            ? `http://apppainel.maisbusca.com/images/empresas/${company.logo_url}`
            : '',
          category: category?.name || '',
          phone: company.telefone,
          whatsapp: company.whatsapp ? `55${company.whatsapp}` : '',
          instagram: company.instagram,
          facebook: company.facebook,
          twitter: company.twitter,
          youtube: company.youtube,
          website: company.webpage,
          isSpecial: company.especial === '1',
          search: company.pesquisa,
          locationId: locId,
          gallery,
        });
      });
    });

    return companies;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await api.get('/main_cidade.php');
    const locations: Location[] = response.data.map(
      (location: { id: number; cidade: string }) => {
        return {
          id: Number(location.id),
          name: location.cidade,
        };
      }
    );
    return locations;
  } catch (err) {
    throw new Error(err);
  }
}

export async function sendPhoneNumber(phone: string): Promise<void> {
  const params = new URLSearchParams();
  params.append('phone', phone);
  try {
    await api.post('/telefones.php', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  } catch (err) {
    throw new Error(err);
  }
}

// interface Coupon {
//   id: string;
//   description: string;
//   text: string;
//   image: string;
//   companyId: string;
// }

// export async function getCitiesThatHaveCoupons(): Promise<any> {
//   const coupons: Coupon[] = [];
//   const companyIds: string[] = [];
//   const { data } = await axios.get(
//     'http://cupom.maisbusca.com/api-cidades/4cd7b01c4a5ba496b0a64ebd1f931769'
//   );
//   return data.data.map(async (el: any) => {
//     const { data: resp } = await axios.get(
//       `http://cupom.maisbusca.com/api-cidade-empresas/4cd7b01c4a5ba496b0a64ebd1f931769/${el.cidade}`
//     );
//     resp.data.data.map((ele: any) => companyIds.push(ele.id));

//     return companyIds.map(async id => {
//       console.log(id);
//       const { data: resp2 } = await axios.get(
//         `http://cupom.maisbusca.com/api-empresa-anuncios/4cd7b01c4a5ba496b0a64ebd1f931769/${id}`
//       );
//       resp2.data.data.map((c: any) => {
//         return coupons.push({
//           id: c.id,
//           companyId: c.id_empresa,
//           image: c.src,
//           description: c.descricao,
//           text: c.especificacao,
//         });
//       });
//       return coupons;
//     });
//   });
// }

export default api;
