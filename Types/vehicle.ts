export interface Vehicle {
  id: number;
  customer_id: number;
  vehicle_maker: string;
  vehicle_model: string;
  vehicle_year: number;
  vehicle_vin: string;
  purchase_price: number;
  details: string;
  condition_details: string;
  created_at: string;
  updated_at: string | null;
}