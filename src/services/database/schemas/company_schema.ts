export default class CompanySchema {
  static schema = {
    name: 'Company',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      address: 'string',
      whatsapp: 'string',
      website: 'string',
      description: 'string',
      locationId: 'int',
    },
  };
}
