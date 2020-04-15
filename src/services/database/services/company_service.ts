/* eslint-disable max-len */
import { Company } from '@screens/company_list';
import getRealm from '@services/database';
import CompanySchema from '@services/database/schemas/company_schema';

export async function saveCompany(company: Company) {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.create(CompanySchema.schema.name, company, true);
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
        realm.create(CompanySchema.schema.name, company, true);
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function getCompaniesByLocationId(
  locationId: string,
  filter: string
) {
  const realm = await getRealm();
  try {
    const elementsByLocationId = realm
      .objects<Company>(CompanySchema.schema.name)
      .filtered(`locationId = $0`, Number(locationId));
    return elementsByLocationId.filtered(
      `name CONTAINS[c] '${filter}' OR address CONTAINS[c] '${filter}' SORT(isSpecial DESC, name ASC)`
    );
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
        `name CONTAINS[c] '${filter}' OR address CONTAINS[c] '${filter}' SORT(isSpecial DESC, name ASC)`
      );
  } catch (err) {
    throw new Error(err);
  }
}
