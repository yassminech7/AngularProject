import { Club } from "./Club";

export class Event {
    id!: number;
    name!: string;
    startTime!: Date;
    endTime!: Date;
    type!: string;
    photoUrl!: string;
    createdOn!: Date;
    clubId!: Club;
  }
  