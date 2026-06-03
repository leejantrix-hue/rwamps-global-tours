import { Map, Compass, Headphones, Award } from 'lucide-react';
import type { Faq, WhyChooseUsItem } from '../types';

export const faqs: Faq[] = [
{
  id: 'f1',
  category: 'booking',
  question: 'How do I book a tour?',
  answer: 'You can book a tour directly through our website by selecting your destination, preferred dates, and number of travelers. Our easy checkout process guides you step by step.',
},
{
  id: 'f2',
  category: 'booking',
  question: 'Can I modify or cancel my booking?',
  answer: 'Yes. Bookings can be modified or cancelled up to 7 days before departure with no penalty. Please contact our support team for assistance.',
},
{
  id: 'f3',
  category: 'payment',
  question: 'What payment methods do you accept?',
  answer: 'We accept all major credit cards, bank transfers, and digital wallets. All currencies are supported with global forex pricing.',
},
{
  id: 'f4',
  category: 'payment',
  question: 'Is my payment secure?',
  answer: 'Absolutely. We use industry-standard encryption and secure payment gateways to protect your financial information.',
},
{
  id: 'f5',
  category: 'travel',
  question: 'Do I need a visa to travel?',
  answer: 'Visa requirements depend on your nationality and destination. Our team will guide you through the visa process during booking.',
},
{
  id: 'f6',
  category: 'travel',
  question: 'What is included in the tour package?',
  answer: 'Most packages include accommodation, transport, guided tours, and select meals. Detailed inclusions are listed for each tour.',
},
{
  id: 'f7',
  category: 'general',
  question: 'Are tours suitable for families?',
  answer: 'Yes. We offer family-friendly itineraries with activities for all ages and dedicated guides experienced with families.',
},
{
  id: 'f8',
  category: 'general',
  question: 'How do I contact customer support?',
  answer: 'Our support team is available 24/7 via live chat, phone (+971 4 123 4567), or email at support@traveluae.com.',
},
];

export const whyChooseUs: WhyChooseUsItem[] = [
{
  id: 'w1',
  title: 'Tailored Travel Plans',
  description: 'Custom itineraries designed around your interests, pace, and budget.',
  icon: Map,
},
{
  id: 'w2',
  title: 'Expert Local Guides',
  description: 'Multilingual guides with deep cultural and historical knowledge.',
  icon: Compass,
},
{
  id: 'w3',
  title: '24/7 Support',
  description: 'Round-the-clock assistance before, during, and after your trip.',
  icon: Headphones,
},
{
  id: 'w4',
  title: 'Best Value Guarantee',
  description: 'Premium experiences at competitive prices, no hidden fees.',
  icon: Award,
},
];
