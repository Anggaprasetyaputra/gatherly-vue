// Mock data shared by EventList.vue & EventDetail.vue
export const events = [
  {
    id: 1,
    title: 'Jakarta Tech Summit 2026',
    category: 'Tech',
    icon: '💻',
    date: 'Sat, 12 Dec 2026',
    time: '09:00 – 17:00 WIB',
    location: 'JIExpo Kemayoran, Jakarta',
    price: 'Rp 250.000',
    seats: 120,
    gradient: 'linear-gradient(135deg, #6644ff, #a48bff)',
    organizer: 'Gatherly Tech Community',
    description:
      'A full-day summit bringing together developers, designers, and founders to explore the future of web, AI, and cloud. Expect inspiring keynotes, hands-on workshops, and plenty of networking.',
    agenda: [
      { time: '09:00', title: 'Registration & Welcome Coffee' },
      { time: '10:00', title: 'Keynote: The Next Decade of the Web' },
      { time: '11:30', title: 'Workshop: Building SPAs with Vue 3' },
      { time: '13:00', title: 'Lunch & Networking' },
      { time: '14:00', title: 'Panel: AI in Everyday Products' },
      { time: '16:00', title: 'Lightning Talks & Closing' }
    ]
  },
  {
    id: 2,
    title: 'Indie Music Night',
    category: 'Music',
    icon: '🎸',
    date: 'Fri, 18 Dec 2026',
    time: '19:00 – 23:00 WIB',
    location: 'Rossi Musik, Jakarta',
    price: 'Rp 150.000',
    seats: 60,
    gradient: 'linear-gradient(135deg, #ff6a88, #ff99ac)',
    organizer: 'Local Sound Collective',
    description:
      'An intimate night celebrating the best of the local indie scene. Five bands, one stage, and a crowd that loves live music.',
    agenda: [
      { time: '19:00', title: 'Doors Open' },
      { time: '19:30', title: 'Opening Act' },
      { time: '20:30', title: 'Main Performances' },
      { time: '22:30', title: 'Headliner Set' }
    ]
  },
  {
    id: 3,
    title: 'Modern Art Exhibition',
    category: 'Art',
    icon: '🎨',
    date: 'Sun, 20 Dec 2026',
    time: '10:00 – 20:00 WIB',
    location: 'Museum MACAN, Jakarta',
    price: 'Free',
    seats: 300,
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    organizer: 'Galeri Nusantara',
    description:
      'Explore contemporary works from emerging Indonesian artists, featuring installations, paintings, and interactive digital art.',
    agenda: [
      { time: '10:00', title: 'Gallery Opens' },
      { time: '13:00', title: 'Guided Tour' },
      { time: '16:00', title: 'Meet the Artists' },
      { time: '19:00', title: 'Closing Reception' }
    ]
  },
  {
    id: 4,
    title: 'Startup Pitch Day',
    category: 'Business',
    icon: '🚀',
    date: 'Wed, 6 Jan 2027',
    time: '13:00 – 18:00 WIB',
    location: 'GoWork, Bandung',
    price: 'Rp 75.000',
    seats: 80,
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    organizer: 'Bandung Founders Club',
    description:
      'Watch ten early-stage startups pitch to a panel of investors. Great for founders, investors, and anyone curious about the startup world.',
    agenda: [
      { time: '13:00', title: 'Opening Remarks' },
      { time: '13:30', title: 'Pitch Session I' },
      { time: '15:30', title: 'Coffee Break' },
      { time: '16:00', title: 'Pitch Session II & Awards' }
    ]
  },
  {
    id: 5,
    title: 'Street Food Festival',
    category: 'Food',
    icon: '🍜',
    date: 'Sat, 16 Jan 2027',
    time: '16:00 – 22:00 WIB',
    location: 'Alun-Alun Kota, Yogyakarta',
    price: 'Rp 25.000',
    seats: 500,
    gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)',
    organizer: 'Jogja Kuliner',
    description:
      'Taste over 50 food stalls serving legendary street food from across the archipelago, plus live acoustic music all evening.',
    agenda: [
      { time: '16:00', title: 'Festival Opens' },
      { time: '18:00', title: 'Cooking Demo' },
      { time: '19:30', title: 'Live Acoustic Music' },
      { time: '21:30', title: 'Best Stall Award' }
    ]
  },
  {
    id: 6,
    title: 'Sunrise Yoga & Wellness',
    category: 'Sports',
    icon: '🧘',
    date: 'Sun, 24 Jan 2027',
    time: '05:30 – 09:00 WITA',
    location: 'Sanur Beach, Bali',
    price: 'Rp 100.000',
    seats: 40,
    gradient: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    organizer: 'Bali Wellness Hub',
    description:
      'Start your day with a guided sunrise yoga session on the beach, followed by a healthy breakfast and a mindfulness talk.',
    agenda: [
      { time: '05:30', title: 'Check-in' },
      { time: '06:00', title: 'Sunrise Yoga Flow' },
      { time: '07:30', title: 'Healthy Breakfast' },
      { time: '08:15', title: 'Mindfulness Talk' }
    ]
  }
]

export const getEventById = (id) => events.find((e) => e.id === Number(id))
