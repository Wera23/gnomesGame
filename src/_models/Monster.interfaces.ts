export interface IMonster {
    name: string,
    age: number
    color: MonsterColors;
    type: MonsterTypes;
    hasFur: boolean;
}

export enum MonsterColors {
    red = 'Red',
    blue = 'Blue',
    green = 'Green'
}

export enum MonsterTypes {
    big = 'Big',
    small = 'Small',
    funny = 'Funny'
}
