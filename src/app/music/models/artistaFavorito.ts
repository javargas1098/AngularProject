
export class ArtistaFavorito {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: string;

  public constructor(id: number, name: string, image: string, description: string, birthDate: string) {
    this.id = id
    this.name = name;
    this.image = image;
    this.description = description;
    this.birthDate = birthDate;
  }
}
