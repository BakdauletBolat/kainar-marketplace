import axios from "./index";

export interface Product {
    id:           number;
    price:        number;
    warehouse:    null;
    color:        null;
    category:     any[];
    code:         any[];
    modification: Modification;
    detail:       null;
    status:       string;
    pictures:     Picture[];
    created_at:   Date;
    updated_at:   Date;
    name:         string;
    market_price: number;
    properties:   null;
    defect:       null;
    comment:      null;
    mileage:      null;
    mileageType:  null;
}

export interface Modification {
    id:                number;
    axleConfiguration: null;
    engines:           any[];
    driveType:         string;
    gearType:          null;
    fuelType:          string;
    bodyType:          string;
    modelCar:          ModelCar;
    name:              string;
    capacity:          number;
    power:             number;
    numberOfCycle:     number;
    numberOfValves:    number;
    vinCode:           number;
}

export interface ModelCar {
    id:           number;
    name:         string;
    startDate:    Date;
    endDate:      Date;
    manufacturer: number;
}

export interface Picture {
    id:      number;
    image:   string;
    product: number;
}

export async function getProducts(query: string) {
    return await axios.get(`/api/product/${query}`,)
}

export async function getProduct(id: string) {
    return await axios.get(`/api/product/${id}`)
}