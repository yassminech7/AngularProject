import { Event } from "./Event";

export class Club {
    id!: number;
    content!: String;
    title!: String;
    photoUrl!: String;
    createdOn!: Date;
    events?: Event[];
}
