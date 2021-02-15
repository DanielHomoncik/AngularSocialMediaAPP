import { GeoDetails } from "./geo-details";

export interface AdressDetails {
    street: string
    suite: string
    city: string
    zipcode: number
    geo: GeoDetails
}
