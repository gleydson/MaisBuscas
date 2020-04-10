import { Location } from '@screens/location_list';
import getRealm from '@services/database';
import LocationSchema from '@services/database/schemas/location_schema';

export async function saveLocations(companies: Location[]) {
  const realm = await getRealm();
  try {
    realm.write(() => {
      companies.forEach(location => {
        realm.create(LocationSchema.schema.name, location, true);
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function getAllLocations() {
  const realm = await getRealm();
  try {
    return realm
      .objects<Location>(LocationSchema.schema.name)
      .sorted('name', false);
  } catch (err) {
    throw new Error(err);
  }
}

export async function getLocationById(locationId: string | number) {
  const realm = await getRealm();
  try {
    return realm
      .objects<Location>(LocationSchema.schema.name)
      .filtered('id = $0', Number(locationId));
  } catch (err) {
    throw new Error(err);
  }
}
