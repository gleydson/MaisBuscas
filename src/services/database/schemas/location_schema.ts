export default class LocationSchema {
  static schema = {
    name: 'Location',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      city: 'string',
      state: 'string',
    },
  };
}
