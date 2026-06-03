import { Headphones, BookOpen, Bus, DollarSign } from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
{
  id: 'support',
  title: '24/7 Support',
  description: 'While using our services, you are assured of 24/7 quality customer support.',
  icon: Headphones,
},
{
  id: 'booking',
  title: 'Easy Booking',
  description: 'Our booking and check out process is easy and aimed at fitting your unique needs and concerns.',
  icon: BookOpen,
},
{
  id: 'transport',
  title: 'Free Transport',
  description: 'Our tour services include a quality and comfortable transport medium ranging from flights to luxury cars.',
  icon: Bus,
},
{
  id: 'currencies',
  title: 'All Currencies Supported',
  description: 'We accept all currencies and transaction rates are pegged on global forex prices.',
  icon: DollarSign,
},
];
