export class Suitcase {

    id: number;
    user: string;
    color: string;
    weight: number;
    cost: number;
    flight: string;

    constructor(id: number, user: string,
        color: string,
        weight: number,
        cost: number,
        flight?: string) {

        this.id = id;
        this.user = user;
        this.color = color;
        this.weight = weight;
        this.cost = cost;
        this.flight = flight || "";
    }




}
