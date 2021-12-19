import Base from '@/models/base.model';

export default class Pokemon extends Base {
    public abilities: any[] = [];
    public baseExperience: number = 0;
    public forms: any[] = [];
    public gameIndices: any[] = [];
    public height: number = 0;
    public held_Items: any[] = [];
    public isDefault: boolean = false;
    public locationAreaEncounters: string = "";
    public moves: any[] = [];
    public name: string = "";
    public order: number = 0;
    public pastTypes: any[] = [];
    public species: any;
    public sprites: any;
    public Stats: any[] = [];
    public Types: any[] = [];
    public weight: number = 0;

    constructor() {
        super();
    }
}