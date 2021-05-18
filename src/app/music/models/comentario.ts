export class Comentario {
  id: number;
  description: string;
  rating: number;

  public constructor(id: number, description: string, rating: number) {
    this.id = id
    this.description = description;
    this.rating = rating;
  }
}
