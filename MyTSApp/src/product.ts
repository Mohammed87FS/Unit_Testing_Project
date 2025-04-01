export class Product {
    private id: string;
    private name: string;
    private price: number;
    private description: string;
    private stockQuantity: number;
  
    constructor(id: string, name: string, price: number, description: string, stockQuantity: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.stockQuantity = stockQuantity;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getStockQuantity(): number {
      return this.stockQuantity;
    }
  
    public updatePrice(price: number): void {
      this.price = price;
    }
  
    public updateStock(quantity: number): void {
      this.stockQuantity = quantity;
    }
  
    public decreaseStock(quantity: number): boolean {
      if (this.stockQuantity >= quantity) {
        this.stockQuantity -= quantity;
        return true;
      }
      return false;
    }
  
    public toString(): string {
      return `Product: ${this.name} (ID: ${this.id}, Price: $${this.price.toFixed(2)})`;
    }
  }
  