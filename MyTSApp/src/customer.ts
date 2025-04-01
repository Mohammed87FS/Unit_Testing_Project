export class Customer {
    private id: string;
    private name: string;
    private email: string;
    private address: string;
    private phone: string;
  
    constructor(id: string, name: string, email: string, address: string, phone: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.address = address;
      this.phone = phone;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getAddress(): string {
      return this.address;
    }
  
    public getPhone(): string {
      return this.phone;
    }
  
    public updateContact(email: string, phone: string): void {
      this.email = email;
      this.phone = phone;
    }
  
    public updateAddress(address: string): void {
      this.address = address;
    }
  
    public toString(): string {
      return `Customer: ${this.name} (ID: ${this.id})`;
    }
  }
  