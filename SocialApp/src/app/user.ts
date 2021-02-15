import { AdressDetails } from "./adress-details";
import { CompanyDetails } from "./company-details";
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: AdressDetails;
    phone: string;
    website: string;
    company: CompanyDetails;
}
