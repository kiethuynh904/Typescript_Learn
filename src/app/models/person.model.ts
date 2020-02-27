export class Person {
    firstName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }
}