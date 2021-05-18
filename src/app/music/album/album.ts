import { Comentario } from "../models/comentario";
import { Track } from "../models/track";
import { Performer } from "../models/performer";
export class Album {
  id: number;
  name: string;
  cover: string;
  genre: string;
  description: string;
  recordLabel: string;
  releaseDate: Date;
  tracks: Track[];
  performers: Performer[];
  comments: Comentario[];

  constructor(
    id: number,
    name: string,
    cover: string,
    genre: string,
    description: string,
    recordLabel: string,
    releaseDate: Date,
    tracks: Track[] = [],
    performers: Performer[] = [],
    comments: Comentario[] = [],
  ) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.genre = genre;
    this.description = description;
    this.recordLabel = recordLabel;
    this.releaseDate = releaseDate;
    this.tracks = tracks;
    this.performers = performers;
    this.comments = comments;
  }

}
