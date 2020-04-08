import { Location } from '@screens/location_list';
import getRealm from '@services/database';
import LocationSchema from '@services/database/schemas/location_schema';

export async function saveLocations(companies: Location[]) {
  const realm = await getRealm();
  try {
    realm.write(() => {
      companies.forEach(location => {
        const { id, city, state } = location;
        realm.create(LocationSchema.schema.name, { id, city, state }, true);
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
      .sorted('city', false);
  } catch (err) {
    throw new Error(err);
  }
}
