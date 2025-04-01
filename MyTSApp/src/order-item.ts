import { Product } from './product';

export class OrderItem {
  private product: Product;
  private quantity: number;
  private unitPrice: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.unitPrice = product.getPrice();
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getUnitPrice(): number {
    return this.unitPrice;
  }

  public getTotalPrice(): number {
    return this.unitPrice * this.quantity;
  }

  public updateQuantity(quantity: number): boolean {
    // Check if the new quantity is available in stock
    const additionalQuantity = quantity - this.quantity;
    
    if (additionalQuantity > 0) {
      if (this.product.getStockQuantity() >= additionalQuantity) {
        this.product.decreaseStock(additionalQuantity);
        this.quantity = quantity;
        return true;
      }
      return false;
    } else {
      // If reducing quantity, we don't need to check stock
      this.quantity = quantity;
      return true;
    }
  }

  public toString(): string {
    return `${this.product.getName()} x ${this.quantity} @ $${this.unitPrice.toFixed(2)} = $${this.getTotalPrice().toFixed(2)}`;
  }
}
