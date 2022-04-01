export class Type {
    constructor(properties) {
      Object.keys(properties).forEach((key) => {
        this[key] = properties[key];
      });
    }
    static schema = new Map([
      [
        Type,
        {
          kind: "struct",
          fields: [
            ["type", "u8"], 
          ],
        },
      ],
    ]);
  }