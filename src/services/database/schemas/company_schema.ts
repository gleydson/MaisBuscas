export default class CompanySchema {
  static schema = {
    name: 'Company',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      description: 'string?',
      address: 'string?',
      logoUrl: 'string?',
      categoryId: 'string?',
      phone: 'string?',
      instagram: 'string?',
      facebook: 'string?',
      twitter: 'string?',
      youtube: 'string?',
      website: 'string?',
      isSpecial: 'bool',
      locationId: 'int',
    },
  };
}
