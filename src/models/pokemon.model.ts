import Base from '@/models/base.model';

export default class Pokemon extends Base {
    public abilities = [];
    public base_Experience = 0;
    public forms = [];
    public game_Indices = [];
    public height = 0;
    public held_Items = [];
    public is_Default = false;
    public location_Area_Encounters = "";
    public moves = [];
    public name = "";
    public order = 0;
    public past_Types = [];
    public species: any;
    public sprites: any;
    public stats = [];
    public types = [];
    public weight = 0;

    constructor() {
        super();
    }
}