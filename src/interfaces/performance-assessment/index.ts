import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceAssessmentInterface {
  id?: string;
  date: any;
  usage_rate: number;
  demand_rate: number;
  vehicle_id: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface PerformanceAssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
}
