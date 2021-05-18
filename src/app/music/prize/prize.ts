import { PerformerPrize } from "../models/PerformerPrize";
export class Prize {
  id: number;
  name: string;
  organization: string;
  description: string;
  performerPrizes: PerformerPrize[];
  
  constructor(
    id: number,
    name: string,
    organization: string,
    description: string,
    performerPrizes: PerformerPrize[] = [],
  ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.organization = organization;
      this.performerPrizes = performerPrizes;
  }

}
