import type { LucideIcon } from 'lucide-react';

export interface NavLink {
label: string;
href: string;
}

export interface TourCard {
id: string;
title: string;
subtitle: string;
image: string;
}

export interface Destination {
id: string;
name: string;
country: string;
image: string;
price: number;
currency: string;
rating: number;
reviews: number;
description: string;
duration: string;
}

export interface Service {
id: string;
title: string;
description: string;
icon: LucideIcon;
}

export interface PopularDestination {
id: string;
name: string;
category: string;
image: string;
}

export interface WhyChooseUsItem {
id: string;
title: string;
description: string;
icon: LucideIcon;
}

export interface StatItem {
id: string;
value: string;
label: string;
icon: LucideIcon;
}

export interface Testimonial {
id: string;
name: string;
role: string;
company: string;
rating: number;
quote: string;
avatar: string;
}

export type FaqCategory = 'booking' | 'payment' | 'travel' | 'general';

export interface Faq {
id: string;
category: FaqCategory;
question: string;
answer: string;
}

export interface SupportChannel {
id: string;
title: string;
description: string;
cta: string;
icon: LucideIcon;
availability: string;
}

export interface FooterLinkGroup {
title: string;
links: NavLink[];
}
