import { iBook } from "./ibook.model";

export interface iUser{
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    token : string;
    books : iBook[];
}