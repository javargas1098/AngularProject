import { ArtistaFavorito } from "../models/artistaFavorito";
import { ColeccionistaAlbum } from "../models/coleccionistaAlbum";
import { Comentario } from "../models/comentario";
export class Coleccionista {
  id: number;
  name: string;
  telephone: string;
  email: string;
  comments: Comentario[];
  favoritePerformers: ArtistaFavorito[];
  collectorAlbums: ColeccionistaAlbum[];

  public constructor(id: number, name: string, telephone: string, email: string, comments = [],
    favoritePerformers = [],
    collectorAlbums = []) {
    this.id = id
    this.name = name;
    this.telephone = telephone;
    this.email = email;
    this.comments = comments;
    this.favoritePerformers = favoritePerformers;
    this.collectorAlbums = collectorAlbums;
  }


}
