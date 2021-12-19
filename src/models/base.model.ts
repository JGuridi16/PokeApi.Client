export default interface IBase {
    id: number | undefined;
}

export default class Base implements IBase {
    constructor() {
        this.id = undefined;
    }
}