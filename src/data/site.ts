import { MessageSquare, Phone, Mail } from 'lucide-react';
import type { NavLink, FooterLinkGroup, SupportChannel } from '../types';

export const siteConfig = {
name: 'Rwamps Tours',
tagline: 'Discover Arabian Wonders',
logo: 'https://rwampsglobaltoursconsult.com/assets/RWAMPS%20logo-1-CSrZdRkz.svg',
copyrightYear: 2026,
phone: '+971 4 123 4567',
email: 'contact@rwampstours.com',
supportEmail: 'support@traveluae.com',
contactEmail: 'contact@traveluae.com',
address: {
  full: 'Dubai Marina, Al Marsa Street, Building 12, Floor 8, Dubai, United Arab Emirates',
  short: 'Dubai Marina, Dubai, UAE',
},
hours: 'Sunday - Thursday, 8:00 AM - 8:00 PM GST',
hoursNote: 'Closed Friday & Saturday',
rating: 4.5,
reviewCount: 99,
} as const;

export const navLinks: NavLink[] = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Tours', href: '#tours' },
{ label: 'FAQs', href: '#faqs' },
{ label: 'Contact', href: '#contact' },
];

export const footerGroups: FooterLinkGroup[] = [
{
  title: 'Destinations',
  links: [
    { label: 'Dubai', href: '#' },
    { label: 'Abu Dhabi', href: '#' },
    { label: 'Sharjah', href: '#' },
    { label: 'Ras Al Khaimah', href: '#' },
  ],
},
{
  title: 'Tours',
  links: [
    { label: 'Desert Safari', href: '#' },
    { label: 'City Tours', href: '#' },
    { label: 'Adventure', href: '#' },
    { label: 'Cultural', href: '#' },
  ],
},
{
  title: 'Company',
  links: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
},
{
  title: 'Support',
  links: [
    { label: 'Help Center', href: '#' },
    { label: 'FAQ', href: '#faqs' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
},
];

export const supportChannels: SupportChannel[] = [
{
  id: 'chat',
  title: 'Live Chat',
  description: 'Get instant answers from our support team.',
  cta: 'Start Chat',
  icon: MessageSquare,
  availability: 'Available 24/7',
},
{
  id: 'phone',
  title: 'Phone Support',
  description: 'Speak directly with a travel specialist.',
  cta: 'Call Now',
  icon: Phone,
  availability: siteConfig.phone,
},
{
  id: 'email',
  title: 'Email Support',
  description: 'Send us a detailed message and we reply within 24 hours.',
  cta: 'Send Email',
  icon: Mail,
  availability: siteConfig.supportEmail,
},
];
