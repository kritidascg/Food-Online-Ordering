import { Token } from "@angular/compiler";

export class User
{
    constructor(
        public username: string,
        public password: any,
        public address: any,
        private _token: string,
        private _tokenExpirationDate: Date
    ){}
}