import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

export class Dog extends Model {
  static table = "dogs";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 25,
    },
    isGoodBoy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  };

  static defaults = {
    isGoodBoy: true,
  };
}
