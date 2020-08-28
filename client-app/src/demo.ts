import { Interface } from "readline";

let data = 42;

data = 10;

interface ICar {
    color: string;
    model: string;
}

const Car1: ICar = {
    color:'black',
    model: 'Bugati'
}

const Car2: ICar = {
    color:'blue',
    model: 'Lamborgini'
}

const multiply = (x: number, y: number) => {
    return x*y;
}

export const cars  = [Car1, Car2];