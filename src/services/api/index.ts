import { Platform } from 'react-native';

import axios from 'axios';

import { Company } from '@screens/company_list';
import { Location } from '@screens/location_list';

const api = axios.create({
  baseURL: 'http://apppainel.maisbusca.com/webservice',
});

export async function getCompanies(): Promise<Company[]> {
  try {
    const response = await api.get('/main.php');
    const companies: Company[] = [];
    response.data.forEach(
      (location: {
        id: string;
        anuncios: {
          id: number;
          empresa: string;
          descricao: string;
          endereco: string;
          logo_url: string;
          categoria_id: string;
          telefone: string;
          instagram: string;
          facebook: string;
          twitter: string;
          youtube: string;
          locationId: number;
        }[];
      }) => {
        const locationId = Number(location.id);
        location.anuncios.forEach(company => {
          companies.push({
            id: Number(company.id),
            name: company.empresa,
            description: company.descricao,
            address: company.endereco,
            logoUrl: `http://maisbusca.com/delivery/images/delivery/${company.logo_url}`,
            categoryId: company.categoria_id,
            phone: company.telefone,
            instagram: company.instagram,
            facebook: company.facebook,
            twitter: company.twitter,
            youtube: company.youtube,
            locationId,
          });
        });
      }
    );

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

export default api;
