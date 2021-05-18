export class ColeccionistaAlbum {
  id: number;
  price: number;
  status: string;

  public constructor(id: number, price: number, status: string) {
    this.id = id
    this.price = price;
    this.status = status;
  }
}
