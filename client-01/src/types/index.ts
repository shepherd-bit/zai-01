export interface Stay {
  name: string;
  type: string;
  price: string;
  location: string;
  rating: string;
  tag?: string;
  amenities?: string[];
  gradientPosition?: { x: number; y: number };
}

export interface LaundryService {
  title: string;
  price: string;
  unit: string;
  desc: string;
  icon: string;
}

export interface QuickBookingRequest {
  service: string;
  date: string;
  wa: string;
}

export interface VehicleOption {
  name: string;
  seats: string;
}

export interface TrainSchedule {
  time: string;
  train: string;
  status: string;
}

export interface NavItem {
  label: string;
  id: string;
}
