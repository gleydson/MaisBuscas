export default class LocationSchema {
  static schema = {
    name: 'Location',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      description: 'string',
      address: 'string',
    },
  };
}
