import { Prize } from "../prize/prize";
import { Performer } from "./performer";

export class PerformerPrize {
  id: number;
  premiationDate: string;
  performer: Performer;
  prize: Prize;
  
  public constructor(id: number, premiationDate: string, performer: Performer, prize: Prize) {
    this.id = id
    this.premiationDate = premiationDate;
    this.performer = performer;
    this.prize = prize;
  }
}
