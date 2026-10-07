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
