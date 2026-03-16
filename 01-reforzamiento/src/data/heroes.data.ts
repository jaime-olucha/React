export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// Tipos de enumeracion;

export enum Owner {
    DC = 'DC', // 0 // DC
    Marvel = 'Marvel', // 1 // Marvel
}
// type Owner2 = 'DC' | 'Marvel'
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        //owner: Owner.DC, ENUM // Lo mismo que poner 0 o 1;
        owner: Owner.DC
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel
    },
    {
        id: 6,
        name: 'Greenlanter',
        owner: Owner.DC
    },
];

// export default heroes; Puedes renombrar