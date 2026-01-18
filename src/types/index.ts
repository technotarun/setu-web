export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface Solution {
  id: number;
  title: string;
  details: string;
}

export interface Client {
  id: number;
  name: string;
  logoUrl: string;
  testimonial: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}