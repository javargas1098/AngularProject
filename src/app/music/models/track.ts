export class Track {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate:Date;
  public constructor(id: number, name: string, description: string,image:string,birthDate:Date) {
    this.id = id
    this.name = name;
    this.description = description;
    this.image = image;
    this.birthDate = birthDate;
  }
}
