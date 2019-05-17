export class User {
    name:string;
    firstName:string;
    email:string;
    password:string;

    constructor(n,fn,em,pw) { 
        this.name = n;
        this.firstName = fn;
        this.email = em;
        this.password = pw;
    }
}
