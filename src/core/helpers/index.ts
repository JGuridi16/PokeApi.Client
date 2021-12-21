export default class Helpers {
    static Filters = {
        Empty: '--Not specified',
        EmptyText() {
            return this.Empty;
        },
        PokemonTypes: {
            normal: "is-khaki",
            fire: "is-redFire",
            water: "is-royalBlue",
            grass: "is-leafGreen",
            electric: "is-electricYellow",
            ice: "is-blueHeaven",
            fighting: "is-darkRed",
            poison: "is-violet",
            ground: "is-lightBrown",
            flying: "is-lightViolet",
            psychic: "is-rose",
            bug: "is-yellowGreen",
            rock: "is-darkGold",
            ghost: "is-purple",
            dark: "is-grayish",
            dragon: "is-darkerViolet",
            steel: "is-skyGray",
            fairy: "is-salmon",
        },
    }
    public static CapitalizeString(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    public static GetColorType(str: string): string {
        let type = "";
        Object.keys(this.Filters.PokemonTypes)
            .forEach((key) => type = (this.Filters.PokemonTypes as any)[str]);

        return type;
    }
}