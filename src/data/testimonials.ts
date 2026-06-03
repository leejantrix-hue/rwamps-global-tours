import { Users, MapPin, Award, Clock } from 'lucide-react';
import type { Testimonial, StatItem } from '../types';

export const testimonials: Testimonial[] = [
{
  id: 't1',
  name: 'Khalif Muhammad',
  role: 'CEO',
  company: 'XYZ Company',
  rating: 5.0,
  quote: 'They took care of everything from transport to accommodations, making the whole trip completely stress-free and thoroughly enjoyable. The attention to detail was exceptional!',
  avatar: 'https://rwampsglobaltoursconsult.com/assets/user_one-CWCMHY8k.png',
},
{
  id: 't2',
  name: 'Sarah Johnson',
  role: 'Marketing Director',
  company: 'TechCorp',
  rating: 5.0,
  quote: 'An unforgettable experience! The tour guides were knowledgeable, the itinerary was perfectly planned, and every moment felt special. Highly recommended for anyone seeking adventure.',
  avatar: 'https://rwampsglobaltoursconsult.com/assets/user_two-BOwF-0uc.png',
},
{
  id: 't3',
  name: 'Robert Chen',
  role: 'Senior Engineer',
  company: 'Innovate Labs',
  rating: 5.0,
  quote: "The best travel experience of my life. From booking to departure, everything was seamless. The team's professionalism and dedication made our family vacation perfect.",
  avatar: 'https://rwampsglobaltoursconsult.com/assets/user_three-BBGg2ndS.png',
},
];

export const stats: StatItem[] = [
{
  id: 's1',
  value: '98%',
  label: 'Customer Satisfaction',
  icon: Award,
},
{
  id: 's2',
  value: '5K+',
  label: 'Happy Travelers',
  icon: Users,
},
{
  id: 's3',
  value: '150+',
  label: 'Destinations',
  icon: MapPin,
},
{
  id: 's4',
  value: '24/7',
  label: 'Support Available',
  icon: Clock,
},
];
