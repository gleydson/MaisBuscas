import Realm from 'realm';

import CompanySchema from './schemas/company_schema';
import LocationSchema from './schemas/location_schema';

export default function getRealm() {
  return Realm.open({
    schema: [LocationSchema.schema, CompanySchema.schema],
  });
}
