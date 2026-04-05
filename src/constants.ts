export interface Destination {
  id: string;
  name: string;
  region: 'Europe' | 'South East Asia';
  description: string;
  image: string;
  category: 'Economical' | 'Medium' | 'Expensive';
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  image: string;
  category: 'Economical' | 'Medium' | 'Expensive';
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  type: 'Adventure' | 'Culture' | 'Food' | 'Relaxation';
  price: number;
  image: string;
  category: 'Economical' | 'Medium' | 'Expensive';
}

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Santorini, Greece',
    region: 'Europe',
    description: 'Iconic blue domes and breathtaking sunsets over the Aegean Sea.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    category: 'Expensive',
  },
  {
    id: '2',
    name: 'Bali, Indonesia',
    region: 'South East Asia',
    description: 'Tropical paradise with lush jungles, ancient temples, and vibrant culture.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    category: 'Medium',
  },
  {
    id: '3',
    name: 'Prague, Czech Republic',
    region: 'Europe',
    description: 'The City of a Hundred Spires, rich in history and gothic architecture.',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&q=80&w=800',
    category: 'Economical',
  },
  {
    id: '4',
    name: 'Hanoi, Vietnam',
    region: 'South East Asia',
    description: 'A bustling capital known for its centuries-old architecture and rich street food.',
    image: 'https://images.unsplash.com/photo-1509067172240-56d28e047144?auto=format&fit=crop&q=80&w=800',
    category: 'Economical',
  },
  {
    id: '5',
    name: 'Amalfi Coast, Italy',
    region: 'Europe',
    description: 'Dramatic cliffs and colorful villages overlooking the Tyrrhenian Sea.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    category: 'Expensive',
  },
  {
    id: '6',
    name: 'Chiang Mai, Thailand',
    region: 'South East Asia',
    description: 'Mountainous city in northern Thailand, home to hundreds of elaborate temples.',
    image: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?auto=format&fit=crop&q=80&w=800',
    category: 'Medium',
  },
];

export const HOTELS: Hotel[] = [
  {
    id: 'h1',
    name: 'Grace Hotel, Auberge Resorts',
    location: 'Santorini, Greece',
    pricePerNight: 1200,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800',
    category: 'Expensive',
  },
  {
    id: 'h2',
    name: 'The Kayon Jungle Resort',
    location: 'Ubud, Bali',
    pricePerNight: 450,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
    category: 'Medium',
  },
  {
    id: 'h3',
    name: 'Old Town Square Hotel',
    location: 'Prague, Czech Republic',
    pricePerNight: 180,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    category: 'Economical',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    title: 'Private Yacht Sunset Cruise',
    location: 'Santorini, Greece',
    type: 'Relaxation',
    price: 800,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    category: 'Expensive',
  },
  {
    id: 'e2',
    title: 'Elephant Sanctuary Visit',
    location: 'Chiang Mai, Thailand',
    type: 'Adventure',
    price: 120,
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=800',
    category: 'Medium',
  },
  {
    id: 'e3',
    title: 'Street Food Tour',
    location: 'Hanoi, Vietnam',
    type: 'Food',
    price: 35,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    category: 'Economical',
  },
];
