import React from 'react'
//import { ICar } from './demo'

interface IProps {
    car : any
}

export const CarItem: React.FC<IProps> = ({car}) => {
    return (
        <div>
            <h1>{car.model}</h1>
        </div>
    )
}

export default CarItem