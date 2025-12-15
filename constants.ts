import { PropertyDetails, PaymentItem } from './types';

// Extracted from the image
// Extracted from the image
const INSTALLMENT_SCHEDULE: PaymentItem[] = [
  { date: '23-Jan-2026', amount: 822750 },
  { date: '23-Apr-2026', amount: 404000 },
  { date: '23-Jul-2026', amount: 404000 },
  { date: '23-Oct-2026', amount: 404000 },
  { date: '23-Jan-2027', amount: 822750 },
  { date: '23-Apr-2027', amount: 404000 },
  { date: '23-Jul-2027', amount: 404000 },
  { date: '23-Oct-2027', amount: 404000 },
  { date: '23-Jan-2028', amount: 822750 },
  { date: '23-Apr-2028', amount: 404000 },
  { date: '23-Jul-2028', amount: 404000 },
  { date: '23-Oct-2028', amount: 404000 },
  { date: '23-Jan-2029', amount: 822750 },
  { date: '23-Apr-2029', amount: 404000 },
  { date: '23-Jul-2029', amount: 404000 },
  { date: '23-Oct-2029', amount: 404000 },
  { date: '23-Jan-2030', amount: 822750 },
  { date: '23-Apr-2030', amount: 404000 },
  { date: '23-Jul-2030', amount: 404000 },
  { date: '23-Oct-2030', amount: 404000 },
  { date: '23-Jan-2031', amount: 822750 },
  { date: '23-Apr-2031', amount: 404000 },
];

const MAINTENANCE_SCHEDULE: PaymentItem[] = [
  { date: '23-Jul-2025', amount: 418934, label: 'Maintenance Deposit 1' },
  { date: '23-Jul-2026', amount: 837866, label: 'Maintenance Deposit 2' },
];

// Calculated totals
const TOTAL_REMAINING = INSTALLMENT_SCHEDULE.reduce((sum, item) => sum + item.amount, 0); // 11,400,500
const TOTAL_MAINTENANCE = MAINTENANCE_SCHEDULE.reduce((sum, item) => sum + item.amount, 0); // 1,256,800
const DOWN_PAYMENT = 6599500; // Adjusted for 18M Total
const TOTAL_PRICE = DOWN_PAYMENT + TOTAL_REMAINING; // 18,000,000

export const PROPERTY_DATA: PropertyDetails = {
  title: "Luxury Townhouse Middle - Stone Park",
  projectPhase: "The Hills Willows Phase",
  location: "Directly on Ring Road, New Cairo (Bahary)",
  bua: 190,
  land: 190,
  garden: 110,
  bedrooms: 3,
  bathrooms: 4,
  finishing: "Core & Shell (Half Finishing)",
  deliveryDate: "January 2027",
  price: {
    total: TOTAL_PRICE,
    downPayment: DOWN_PAYMENT,
    remaining: TOTAL_REMAINING,
    maintenance: TOTAL_MAINTENANCE,
    currency: "EGP"
  },
  installmentPlan: "Quarterly installments till April 2031",
  installmentSchedule: INSTALLMENT_SCHEDULE,
  maintenanceSchedule: MAINTENANCE_SCHEDULE,
  contact: {
    phone: "+201004541000",
    whatsapp: "201004541000",
    email: "darwiiish@yahoo.com"
  },
  ownerName: "Owner"
};

// Relative path for GitHub Pages compatibility
export const BROCHURE_URL = "./brochure.pdf";

// INSTRUCTIONS FOR OWNER:
// 1. Create a folder named 'images' in your root directory (next to index.html).
// 2. Place your screenshot files there and rename them to match the filenames below.
// 3. Ensure paths start with ./images/
export const INITIAL_IMAGES = [
  "./data/gallery-1.jpg",
  "./data/gallery-2.jpg",
  "./data/gallery-3.jpg",
  "./data/gallery-4.jpg",
  "./data/gallery-5.jpg",
  "./data/gallery-6.jpg",
  "./data/gallery-7.jpg",
  "./data/gallery-8.jpg",
  "./data/gallery-9.jpg",
  "./data/gallery-10.jpg",
  "./data/gallery-11.jpg",
  "./data/gallery-12.jpg",
];

// Fallback images (Unsplash) in case local files are missing
export const FALLBACK_IMAGES = {
  HERO: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop", // Modern Villa
  EXTERIOR: "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=800&auto=format&fit=crop",
  INTERIOR: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  PLAN: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
  LANDSCAPE: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&w=800&auto=format&fit=crop",
};