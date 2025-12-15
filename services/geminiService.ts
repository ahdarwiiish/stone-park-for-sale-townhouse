import { GoogleGenAI } from "@google/genai";
import { PROPERTY_DATA } from '../constants';

// Initialize Gemini
// NOTE: In a production environment, you should proxy this through a backend
// to avoid exposing the API key in the client bundle.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are a helpful, professional, and persuasive real estate sales assistant for a specific property listing.
Your goal is to answer potential buyer's questions and encourage them to contact the owner.

Here are the property details you represent:
Project: ${PROPERTY_DATA.projectPhase} in Stone Park.
Type: Townhouse Middle.
Location: ${PROPERTY_DATA.location}.
BUA: ${PROPERTY_DATA.bua}m.
Land: ${PROPERTY_DATA.land}m.
Garden: ${PROPERTY_DATA.garden}m.
Bedrooms: ${PROPERTY_DATA.bedrooms} (1 Master) + Living Room.
Bathrooms: ${PROPERTY_DATA.bathrooms}.
Finishing: ${PROPERTY_DATA.finishing}.
Delivery: ${PROPERTY_DATA.deliveryDate}.

Financials:
Total Price: ${PROPERTY_DATA.price.total.toLocaleString()} EGP.
Down Payment: ${PROPERTY_DATA.price.downPayment.toLocaleString()} EGP.
Remaining: ${PROPERTY_DATA.price.remaining.toLocaleString()} EGP.
Installments: ${PROPERTY_DATA.installmentPlan}.
Maintenance: ${PROPERTY_DATA.price.maintenance.toLocaleString()} EGP.

Contact Info:
Phone: ${PROPERTY_DATA.contact.phone}
Email: ${PROPERTY_DATA.contact.email}

Rules:
1. Only answer questions related to this specific property or the general area (Stone Park/New Cairo).
2. Be polite and concise.
3. Always end with a call to action like "Would you like to schedule a viewing?" or "Shall I provide the WhatsApp number?".
4. If asked about price negotiation, suggest contacting the owner directly.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact the owner directly via phone.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please check the 'Details' section or call the owner directly.";
  }
};
