
import { Album } from "../album/album";

export class Musician {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: Date;
  albums: Array<Album>;
  performerPrizes:Array<any>;

  public constructor(id: number, name: string, image: string, birthDate: Date, albums=[], performerPrizes=[]) {
    this.id = id
    this.name = name;
    this.image = image;
    this.birthDate = birthDate;
    this.albums=albums;
    this.performerPrizes=performerPrizes
  }
}
