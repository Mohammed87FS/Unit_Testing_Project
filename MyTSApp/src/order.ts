import { Customer } from './customer';
import { OrderItem } from './order-item';
import { Product } from './product';
import { OrderStatus } from './order-status';

export class Order {
  private id: string;
  private customer: Customer;
  private items: OrderItem[] = [];
  private orderDate: Date;
  private status: OrderStatus;
  private shippingAddress: string;

  constructor(id: string, customer: Customer) {
    this.id = id;
    this.customer = customer;
    this.orderDate = new Date();
    this.status = OrderStatus.CREATED;
    this.shippingAddress = customer.getAddress(); // Default to customer's address
  }

  public getId(): string {
    return this.id;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public getItems(): OrderItem[] {
    return [...this.items]; // Return a copy to prevent direct modification
  }

  public getOrderDate(): Date {
    return this.orderDate;
  }

  public getStatus(): OrderStatus {
    return this.status;
  }

  public getShippingAddress(): string {
    return this.shippingAddress;
  }

  public updateStatus(status: OrderStatus): void {
    this.status = status;
  }

  public updateShippingAddress(address: string): void {
    this.shippingAddress = address;
  }

  public addItem(product: Product, quantity: number): boolean {
    // Check if there's enough stock
    if (product.getStockQuantity() < quantity) {
      return false;
    }

    // Check if the product already exists in the order
    const existingItem = this.items.find(item => item.getProduct().getId() === product.getId());
    
    if (existingItem) {
      // Update the existing item quantity
      const newQuantity = existingItem.getQuantity() + quantity;
      const success = existingItem.updateQuantity(newQuantity);
      return success;
    } else {
      // Create a new order item
      const orderItem = new OrderItem(product, quantity);
      this.items.push(orderItem);
      product.decreaseStock(quantity);
      return true;
    }
  }

  public removeItem(productId: string): boolean {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.getProduct().getId() !== productId);
    return initialLength !== this.items.length;
  }

  public getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public cancel(): boolean {
    if (this.status === OrderStatus.CREATED || this.status === OrderStatus.PROCESSING) {
      this.status = OrderStatus.CANCELLED;
      return true;
    }
    return false;
  }

  public toString(): string {
    const itemsStr = this.items.map(item => `  - ${item.toString()}`).join('\n');
    return `
Order: ${this.id}
Customer: ${this.customer.getName()}
Date: ${this.orderDate.toLocaleString()}
Status: ${this.status}
Items:
${itemsStr}
Total: $${this.getTotalPrice().toFixed(2)}
Shipping Address: ${this.shippingAddress}
`;
  }
}