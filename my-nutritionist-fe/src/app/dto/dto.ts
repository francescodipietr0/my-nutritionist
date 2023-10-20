import { ProductStatus } from "src/types/types";

// DTO for "products" table
export interface ProductDto {
    id: number;
    name: string;
    stock: number;
    consumption: number;
    status?: ProductStatus;
  }
  
  // DTO for "users" table
  export interface UserDto {
    id: number;
    username: string;
    password: string;
    is_admin: boolean;
  }
  
  // DTO for "consumption" table
  export interface ConsumptionDto {
    id: number;
    product_id: number;
    date: Date;
  }
  