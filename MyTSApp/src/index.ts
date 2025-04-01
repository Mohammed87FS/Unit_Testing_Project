import { Customer } from './customer';
import { Product } from './product';
import { Order } from './order';
import { OrderStatus } from './order-status';

const customer = new Customer(
    "C001",
    "John Doe",
    "john.doe@example.com",
    "123 Main St, Anytown, USA",
    "555-123-4567"
  );
  
  
// Create some products
const laptop = new Product(
    "P001",
    "MacBook Pro",
    1999.99,
    "16-inch MacBook Pro with M2 chip",
    10
  );
  
  const phone = new Product(
    "P002",
    "iPhone 15 Pro",
    1099.99,
    "iPhone 15 Pro with 256GB storage",
    20
  );
  
  const headphones = new Product(
    "P003",
    "AirPods Pro",
    249.99,
    "Wireless noise-cancelling earbuds",
    30
  );
  
  // Create an order
  const order = new Order("O001", customer);
  
  // Add items to the order
  order.addItem(laptop, 1);
  order.addItem(phone, 2);
  order.addItem(headphones, 1);
  
  // Update order status
  order.updateStatus(OrderStatus.PROCESSING);
  
  // Display order details
  console.log(order.toString());
  
  // Calculate total price
  console.log(`Order Total: $${order.getTotalPrice().toFixed(2)}`);
  
  // Check current stock levels
  console.log(`Laptop stock remaining: ${laptop.getStockQuantity()}`);
  console.log(`Phone stock remaining: ${phone.getStockQuantity()}`);
  console.log(`Headphones stock remaining: ${headphones.getStockQuantity()}`);