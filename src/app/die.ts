export class Die {
    size: number;
    desc: string;
    ldesc: string;
    outcomes: Array<Outcome>;
    hidden: boolean;
    ordinal: number;

    constructor(size: number, desc: string, outs: Outcome[]) {
        this.size = size;
        this.desc = desc;
        this.ldesc = desc;
        this.outcomes = outs;
        this.hidden = false;
      }
}

export class Outcome {
    public id: number;
    outstring: string;
}