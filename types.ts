export interface PaymentItem {
  date: string;
  amount: number;
  label?: string;
}

export interface PropertyDetails {
  title: string;
  location: string;
  bua: number;
  land: number;
  garden: number;
  bedrooms: number;
  bathrooms: number;
  finishing: string;
  deliveryDate: string;
  price: {
    total: number;
    downPayment: number;
    remaining: number;
    maintenance: number;
    currency: string;
  };
  installmentPlan: string;
  installmentSchedule: PaymentItem[];
  maintenanceSchedule: PaymentItem[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  ownerName?: string;
  projectPhase: string;
}

export interface ImageAsset {
  id: string;
  url: string;
  isUserUploaded?: boolean;
}
