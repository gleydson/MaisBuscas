import { Company } from '@screens/company_list';
import getRealm from '@services/database';
import CompanySchema from '@services/database/schemas/company_schema';

export async function saveCompany(company: Company) {
  const realm = await getRealm();
  const {
    id,
    name,
    address,
    whatsapp,
    website,
    description,
    locationId,
  } = company;

  try {
    realm.write(() => {
      realm.create(
        CompanySchema.schema.name,
        { id, name, address, whatsapp, website, description, locationId },
        true
      );
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function saveCompanies(companies: Company[]) {
  const realm = await getRealm();
  try {
    realm.write(() => {
      companies.forEach(company => {
        const {
          id,
          name,
          address,
          whatsapp,
          website,
          description,
          locationId,
        } = company;

        realm.create(
          CompanySchema.schema.name,
          { id, name, address, whatsapp, website, description, locationId },
          true
        );
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function getCompaniesByLocationId(
  locationId: number,
  filter: string
) {
  const realm = await getRealm();
  try {
    return realm
      .objects<Company>(CompanySchema.schema.name)
      .filtered(
        // eslint-disable-next-line max-len
        `locationId = '${locationId}' AND name CONTAINS[c] '${filter}' OR address CONTAINS[c] '${filter}'`
      )
      .sorted('name', false);
  } catch (err) {
    throw new Error(err);
  }
}

export async function getAllCompanies(filter: string) {
  const realm = await getRealm();
  try {
    return realm
      .objects<Company>(CompanySchema.schema.name)
      .filtered(
        `name CONTAINS[c] '${filter}' OR address CONTAINS[c] '${filter}'`
      )
      .sorted('name', false);
  } catch (err) {
    throw new Error(err);
  }
}
