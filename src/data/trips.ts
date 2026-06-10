import type { Trip } from '@/types/trip'

export const trips: Trip[] = [
  {
    slug: 'kedarkantha-trek',
    title: 'Kedarkantha Trek',
    type: 'trek',
    region: 'Uttarakhand',
    location: 'Sankri → Kedarkantha Summit (3,810m)',
    durationDays: 6,
    basePrice: 8500,
    difficulty: 'moderate',
    featured: true,
    summary:
      'One of the most rewarding winter treks in India. Kedarkantha offers panoramic Himalayan views, dense oak-rhododendron forests, and the magic of sleeping in snow-covered meadows. Perfect for first-timers who want a genuine high-altitude experience.',
    heroImage: 'https://picsum.photos/seed/kedarkantha/1400/900',
    gallery: [
      'https://picsum.photos/seed/kedar2/800/600',
      'https://picsum.photos/seed/kedar3/800/600',
      'https://picsum.photos/seed/kedar4/800/600',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun → Sankri',
        description:
          'Drive from Dehradun to Sankri village (200 km, ~8 hrs). The road winds through Mussoorie, Nainbag, Mori, and Netwar. Arrive, settle in, team briefing, acclimatisation walk.',
        meals: ['Dinner'],
        stay: 'Guesthouse, Sankri',
      },
      {
        day: 2,
        title: 'Sankri → Juda Ka Talab (2,708m)',
        description:
          'Trek through rhododendron and oak forests for ~4–5 hrs, gaining steady altitude. Juda Ka Talab is a frozen lake in winter — camp beside it for a surreal night under stars.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Tents at Juda Ka Talab',
      },
      {
        day: 3,
        title: 'Juda Ka Talab → Kedarkantha Base (3,100m)',
        description:
          'Short 2–3 hr ascent to base camp. Afternoon free for rest and acclimatisation. Pre-summit briefing in the evening.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Tents at Kedarkantha Base',
      },
      {
        day: 4,
        title: 'Summit Day (3,810m) → Hargaon Camp',
        description:
          'Pre-dawn start (4 AM) for the summit push. 2–3 hr climb to the peak. 360° views of Swargarohini, Bandarpunch, Black Peak, and Ranglana. Descend to Hargaon camp.',
        meals: ['Breakfast', 'Packed Lunch', 'Dinner'],
        stay: 'Tents at Hargaon',
      },
      {
        day: 5,
        title: 'Hargaon → Sankri',
        description:
          'Descend through meadows and forests back to Sankri. Celebration dinner, stories around the bonfire.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Guesthouse, Sankri',
      },
      {
        day: 6,
        title: 'Sankri → Dehradun — Departure',
        description:
          'Morning drive back to Dehradun. Drop at Dehradun railway station / ISBT by evening.',
        meals: ['Breakfast'],
        stay: '',
      },
    ],
    inclusions: [
      'Transport: Dehradun ↔ Sankri (shared cab)',
      'All meals on trek (Day 1 dinner to Day 6 breakfast)',
      'Experienced WMRT/FRT-certified trek leader + support staff',
      'High-quality camping tents (twin sharing) and sleeping bags',
      'Forest permits and trekking fees',
      'Basic first aid and oxygen cylinder on trail',
      'Welcome tea / refreshments on arrival',
    ],
    exclusions: [
      'Train / flight tickets to Dehradun',
      'Personal trekking gear (gaiters, poles, crampons — can be rented)',
      'Travel insurance (strongly recommended)',
      'Any expenses due to itinerary change caused by weather / medical emergency',
      'Tips and personal purchases',
    ],
    thingsToCarry: [
      'Warm layers: thermal innerwear, fleece jacket, down jacket',
      'Waterproof outer shell (jacket + pants)',
      'Sturdy trekking boots (ankle support, non-slip sole)',
      'Woollen socks × 3 pairs, gloves, balaclava, beanie',
      'Sunglasses (UV-400), sunscreen SPF 50+, lip balm',
      'Personal first-aid kit, any medication',
      'Water bottles (2 × 1L), water purification tablets',
      '30–40L daypack',
      'Headlamp + spare batteries',
      'Camera / powerbank',
    ],
    safetyNotes: [
      'Trek leader holds Wilderness First Responder certification (WMRT Level 2+).',
      'Oxygen cylinder and basic AMS medication carried on trail at all times.',
      'Daily health checks — pulse-oximeter readings recorded every evening.',
      'Altitude gain is managed to prevent AMS; descent is mandatory if SpO₂ drops below 88%.',
      'Emergency evacuation plan coordinated with Sankri base and Uttarkashi district hospital.',
      'Maximum group size: 12 trekkers + 1 guide + 1 support.',
    ],
    faqs: [
      {
        q: 'What fitness level is needed?',
        a: 'You should be able to walk 8–10 km on consecutive days. Three weeks of regular jogging or stair climbing is adequate preparation. No prior trek experience required.',
      },
      {
        q: 'Is this trek possible for solo travellers?',
        a: 'Absolutely. Our groups are a mix of solos, duos, and small groups. We keep batch sizes small (max 12) so everyone gets personal attention and it\'s easy to connect with fellow trekkers.',
      },
      {
        q: 'What is the best season for Kedarkantha?',
        a: 'December–February for snow trek; April–June for green meadows. We run batches in both windows.',
      },
      {
        q: 'Is altitude sickness a risk?',
        a: "The summit is 3,810m — high enough to cause AMS in some people. We acclimatise gradually, carry oxygen, and our guide monitors everyone closely. We've had zero serious incidents across 60+ Kedarkantha batches.",
      },
    ],
    dates: [
      {
        id: 'kk-jan-1',
        startDate: '2026-01-10',
        endDate: '2026-01-15',
        slotsTotal: 12,
        slotsLeft: 4,
      },
      {
        id: 'kk-jan-2',
        startDate: '2026-01-24',
        endDate: '2026-01-29',
        slotsTotal: 12,
        slotsLeft: 8,
      },
      {
        id: 'kk-feb-1',
        startDate: '2026-02-07',
        endDate: '2026-02-12',
        slotsTotal: 12,
        slotsLeft: 12,
      },
    ],
  },
  {
    slug: 'triund-trek',
    title: 'Triund Trek & Dharamshala Escape',
    type: 'trek',
    region: 'Himachal Pradesh',
    location: 'McLeod Ganj → Triund Ridge (2,850m)',
    durationDays: 3,
    basePrice: 4200,
    difficulty: 'easy',
    featured: true,
    summary:
      'A perfect first-trek for the uninitiated. The trail from McLeod Ganj climbs through cedar-oak forest and opens onto the Triund ridge with jaw-dropping views of the Dhauladhar range. Spend a night under the stars, then explore Dharamshala.',
    heroImage: 'https://picsum.photos/seed/triund/1400/900',
    gallery: [
      'https://picsum.photos/seed/triund2/800/600',
      'https://picsum.photos/seed/triund3/800/600',
      'https://picsum.photos/seed/triund4/800/600',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in McLeod Ganj + Explore',
        description:
          'Arrive at McLeod Ganj. Afternoon free to explore the Tibetan Market, Namgyal Monastery, and the cafés on Bhagsu Road. Group dinner and briefing.',
        meals: ['Dinner'],
        stay: 'Hostel / guesthouse, McLeod Ganj',
      },
      {
        day: 2,
        title: 'McLeod Ganj → Triund Ridge (7 km)',
        description:
          'Start trekking by 8 AM. The trail climbs steadily through Magic View Point and Snowline Café to the open ridge. Arrive by early afternoon. Sunset on the ridge is spectacular. Bonfire, stargazing night.',
        meals: ['Breakfast', 'Packed Lunch', 'Dinner'],
        stay: 'Tents at Triund Ridge',
      },
      {
        day: 3,
        title: 'Sunrise on the Ridge → Descend → Dharamshala',
        description:
          'Catch the Dhauladhar sunrise, then descend back to McLeod Ganj. Afternoon at leisure — Bhagsu waterfall visit, shopping. Departure by evening.',
        meals: ['Breakfast'],
        stay: '',
      },
    ],
    inclusions: [
      'Shared transport from bus stand to trailhead',
      'All meals on trek (Day 1 dinner to Day 3 breakfast)',
      'Experienced trek guide',
      'Camping tent and sleeping bag',
      'Forest camping permit',
      'First aid kit on trail',
    ],
    exclusions: [
      'Travel to/from McLeod Ganj',
      'Day 1 accommodation (pre-trek night)',
      'Personal gear',
      'Any activity not mentioned',
    ],
    thingsToCarry: [
      'Light trekking / sports shoes (trail runners work fine)',
      'Warm jacket for the ridge night (it gets cold even in summer)',
      'Sunscreen, sunglasses',
      'Water bottle 1L',
      'Personal snacks, camera',
      'Small daypack (20–25L)',
    ],
    safetyNotes: [
      'The trail is well-marked and busy; no technical sections.',
      'Guide has first-aid training and carries a basic kit.',
      'Do not attempt the Snowline section beyond Triund without guide clearance — weather can change fast.',
    ],
    faqs: [
      {
        q: 'Can a complete beginner do this trek?',
        a: 'Yes — Triund is one of the most beginner-friendly treks in India. If you can walk for 3–4 hours at a steady pace, you can do it.',
      },
      {
        q: 'What is the weather like?',
        a: 'The best months are March–June (pleasant, clear views) and September–November (post-monsoon, crisp air). Avoid July–August (heavy rains, slippery trail) and January (snow on the trail).',
      },
    ],
    dates: [
      {
        id: 'tr-jan-1',
        startDate: '2026-01-16',
        endDate: '2026-01-18',
        slotsTotal: 10,
        slotsLeft: 6,
      },
      {
        id: 'tr-feb-1',
        startDate: '2026-02-20',
        endDate: '2026-02-22',
        slotsTotal: 10,
        slotsLeft: 10,
      },
    ],
  },
  {
    slug: 'kasol-weekend',
    title: 'Kasol Weekend Escape',
    type: 'weekend',
    region: 'Himachal Pradesh',
    location: 'Kasol · Kheerganga · Chalal',
    durationDays: 3,
    basePrice: 3800,
    difficulty: 'easy',
    featured: true,
    summary:
      'Three days in the Parvati Valley — India\'s most beloved backpacker pocket. Wander through pine forests, soak in Kheerganga\'s natural hot springs, eat at the legendary Israeli cafés, and camp along the river. Exactly what burnout looks like when it\'s cured.',
    heroImage: 'https://picsum.photos/seed/kasol/1400/900',
    gallery: [
      'https://picsum.photos/seed/kasol2/800/600',
      'https://picsum.photos/seed/kasol3/800/600',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi → Kasol (Overnight Bus)',
        description:
          'Board overnight Volvo from Delhi ISBT Kashmere Gate at 6 PM. Arrive Kasol by early morning.',
        meals: [],
        stay: 'Overnight bus',
      },
      {
        day: 2,
        title: 'Kasol — Explore + Kheerganga Day Hike',
        description:
          'Freshen up at the guesthouse. Optional: 12 km trek to Kheerganga\'s natural hot springs (soak those legs!). Return to Kasol for dinner at Evergreen or Jim Morrison Café.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Riverside camp / guesthouse, Kasol',
      },
      {
        day: 3,
        title: 'Chalal Forest Walk → Return to Delhi',
        description:
          'Morning walk through Chalal village across the suspension bridge. Explore the Parvati river banks. Board return bus in the afternoon, arrive Delhi by next morning.',
        meals: ['Breakfast'],
        stay: 'Overnight bus',
      },
    ],
    inclusions: [
      'Roundtrip Volvo bus Delhi ↔ Kasol',
      'Day 2 riverside camp or guesthouse accommodation',
      'Mentioned meals',
      'Kheerganga guide (if opting)',
    ],
    exclusions: [
      'Kheerganga entry fee (₹200 approx.)',
      'Café meals beyond included',
      'Personal shopping',
    ],
    thingsToCarry: [
      'Comfortable trekking shoes',
      'Warm layer for evenings (Parvati Valley is cool year-round)',
      'Swimwear for Kheerganga hot spring',
      'Snacks, water bottle',
      'Valid ID (Himachal forest entry checkpoint)',
    ],
    safetyNotes: [
      'Stay on marked trail to Kheerganga; do not trek alone.',
      'Parvati river current is strong; do not wade.',
    ],
    faqs: [
      {
        q: 'Is this suitable for solo women travellers?',
        a: 'Yes. We always maintain mixed groups and our guides are experienced with solo women participants. Kasol is a well-frequented, safe backpacker destination.',
      },
    ],
    dates: [
      {
        id: 'ka-jan-1',
        startDate: '2026-01-09',
        endDate: '2026-01-11',
        slotsTotal: 15,
        slotsLeft: 7,
      },
      {
        id: 'ka-jan-2',
        startDate: '2026-01-23',
        endDate: '2026-01-25',
        slotsTotal: 15,
        slotsLeft: 12,
      },
    ],
  },
  {
    slug: 'spiti-valley-road-trip',
    title: 'Spiti Valley Road Trip',
    type: 'roadtrip',
    region: 'Himachal Pradesh',
    location: 'Shimla → Kaza → Chandratal → Manali',
    durationDays: 9,
    basePrice: 18500,
    difficulty: 'moderate',
    featured: true,
    summary:
      'Spiti is not a destination — it\'s a test of whether you\'re still alive. The Cold Desert, ancient monasteries, the world\'s highest villages, and a road that may or may not exist depending on the day. We drive the Shimla–Manali circuit through Kinnaur and Spiti, camping under skies you won\'t find anywhere else.',
    heroImage: 'https://picsum.photos/seed/spiti/1400/900',
    gallery: [
      'https://picsum.photos/seed/spiti2/800/600',
      'https://picsum.photos/seed/spiti3/800/600',
      'https://picsum.photos/seed/spiti4/800/600',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Shimla → Narkanda → Rampur',
        description:
          'Drive from Shimla through the apple orchards of Narkanda and descend to Rampur Bushahr along the Sutlej. Evening in Rampur.',
        meals: ['Dinner'],
        stay: 'Hotel, Rampur',
      },
      {
        day: 2,
        title: 'Rampur → Sangla Valley',
        description:
          'Enter Kinnaur. The valley turns dramatic — sheer cliffs, the turquoise Baspa river, Kamru Fort, and Chitkul (India\'s last village on the India–China border).',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Homestay, Sangla',
      },
      {
        day: 3,
        title: 'Sangla → Kalpa → Nako',
        description:
          'Cross Kinnaur, stop at Kalpa for the impossible view of Kinner Kailash peak, continue to Nako Lake. One of the most beautiful evening camps of the trip.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Camp, Nako',
      },
      {
        day: 4,
        title: 'Nako → Tabo → Kaza',
        description:
          'Enter Spiti Valley proper. Visit Tabo Monastery (975 AD — older than Angkor Wat). Drive into Kaza.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Hotel, Kaza',
      },
      {
        day: 5,
        title: 'Kaza → Key Monastery → Komic → Hikkim',
        description:
          'The monastery circuit: Key (13th century, perched above the valley), Komic (world\'s highest motorable village), Hikkim (world\'s highest post office — mail a postcard).',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Homestay, Kaza',
      },
      {
        day: 6,
        title: 'Kaza → Langza → Dhankar → Pin Valley',
        description:
          'Langza fossil village, then Dhankar Monastery and the surreal Dhankar Lake hike. Afternoon in Pin Valley (Snow Leopard Reserve).',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Camp, Pin Valley',
      },
      {
        day: 7,
        title: 'Pin Valley → Chandratal Lake (4,250m)',
        description:
          'Drive over the Kunzum La (4,590m) pass — one of the most dramatic road crossings in the country. Arrive at the crescent-shaped Chandratal Lake. Camp night under stars at altitude.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Camp, Chandratal',
      },
      {
        day: 8,
        title: 'Chandratal → Rohtang Pass → Manali',
        description:
          'Morning at the lake, then descend over Rohtang Pass to Manali. Celebration dinner in Manali Old Town (Vashisht).',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Hotel, Manali',
      },
      {
        day: 9,
        title: 'Manali — Departure',
        description:
          'Breakfast and departure. Overnight Volvo bus to Delhi available or extend your stay in Manali.',
        meals: ['Breakfast'],
        stay: '',
      },
    ],
    inclusions: [
      'All surface transport (shared 4WD/SUV, Shimla to Manali)',
      'All accommodation as listed (hotel/homestay/camp)',
      'All meals from Day 1 dinner to Day 9 breakfast',
      'Experienced driver-guide team familiar with Spiti roads',
      'Inner-line permits for restricted zones',
      'All monastery entry fees',
    ],
    exclusions: [
      'Travel to Shimla / from Manali',
      'Meals in Kaza town on Day 4/5 (you\'ll want to explore the cafés)',
      'Personal expenses',
      'Any activity beyond itinerary',
    ],
    thingsToCarry: [
      'Warm layers (temperatures can drop to -5°C at night even in June)',
      'Sunscreen SPF 50+ (UV is extreme at altitude)',
      'Comfortable clothing for long driving days',
      'Motion sickness tablets if needed (mountain roads)',
      'Power bank (electricity unreliable in remote areas)',
      'Water purification tablets',
    ],
    safetyNotes: [
      'Roads in Spiti are mountain passes — drives can be longer than planned due to conditions.',
      'Altitude above 4,000m: watch for AMS symptoms. Descent is the cure.',
      'Our drivers have 10+ years of Spiti experience and know every alternate route.',
      'Emergency contacts at Kaza hospital and Manali base maintained throughout.',
    ],
    faqs: [
      {
        q: 'What is the best time to visit Spiti?',
        a: 'June to October when the roads are open. The Shimla route opens around June 1; Rohtang Pass (Manali side) opens after the snow clears, usually May–June.',
      },
      {
        q: 'Is the road safe?',
        a: 'The roads are challenging mountain passes, not highways. That is part of the experience. Our drivers are Spiti specialists — we\'ve done 40+ circuits without incident. Travel insurance is mandatory.',
      },
    ],
    dates: [
      {
        id: 'sp-jun-1',
        startDate: '2026-06-20',
        endDate: '2026-06-28',
        slotsTotal: 8,
        slotsLeft: 3,
      },
      {
        id: 'sp-jul-1',
        startDate: '2026-07-18',
        endDate: '2026-07-26',
        slotsTotal: 8,
        slotsLeft: 8,
      },
    ],
  },
  {
    slug: 'coorg-coffee-trails',
    title: 'Coorg Coffee Trails',
    type: 'weekend',
    region: 'Karnataka',
    location: 'Madikeri · Abbey Falls · Talakaveri',
    durationDays: 3,
    basePrice: 5500,
    difficulty: 'easy',
    summary:
      'Misty hills, coffee plantations you can walk through, the smell of cardamom in the air, and the kind of quiet that reminds you why you started working in the first place. A long-weekend reset in the Scotland of India.',
    heroImage: 'https://picsum.photos/seed/coorg/1400/900',
    gallery: [
      'https://picsum.photos/seed/coorg2/800/600',
      'https://picsum.photos/seed/coorg3/800/600',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Madikeri — Coffee Estate Walk',
        description:
          'Arrive at the estate by afternoon. Guided walk through the coffee and spice plantation. Learn the farm-to-cup process. Bonfire and Kodava-style dinner.',
        meals: ['Dinner'],
        stay: 'Coffee Homestay Estate, Madikeri',
      },
      {
        day: 2,
        title: 'Abbey Falls · Raja\'s Seat · Talakaveri Hike',
        description:
          'Morning visit to Abbey Falls. Post-lunch drive to Raja\'s Seat gardens for the valley view. Late afternoon hike to Talakaveri (source of the Cauvery river) and Brahmagiri peak.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Coffee Homestay Estate, Madikeri',
      },
      {
        day: 3,
        title: 'Dubare Elephant Camp → Departure',
        description:
          'Early morning Dubare elephant camp visit on the Cauvery riverbank. Return to Madikeri, light lunch, and depart.',
        meals: ['Breakfast', 'Lunch'],
        stay: '',
      },
    ],
    inclusions: [
      'Pick-up and drop at Madikeri bus stand',
      'All accommodation (estate homestay)',
      'All meals as listed',
      'Plantation walk guide',
      'Dubare elephant camp entry',
      'All sightseeing transfers',
    ],
    exclusions: [
      'Travel to/from Madikeri',
      'Personal shopping (spices, coffee to take home)',
    ],
    thingsToCarry: [
      'Light cotton clothes for the day, a light sweater for evenings',
      'Comfortable walking shoes',
      'Insect repellent',
      'Camera',
    ],
    safetyNotes: [
      'Elephant camp activity is supervised by trained mahouts.',
      'If trekking to Brahmagiri during monsoon, wear non-slip footwear.',
    ],
    faqs: [
      {
        q: 'How do I get to Madikeri?',
        a: 'Overnight buses from Bangalore to Madikeri are frequent (7–8 hrs, KSRTC or private). We\'ll share the bus schedule when you book.',
      },
    ],
    dates: [
      {
        id: 'co-jan-1',
        startDate: '2026-01-23',
        endDate: '2026-01-25',
        slotsTotal: 12,
        slotsLeft: 5,
      },
      {
        id: 'co-feb-1',
        startDate: '2026-02-13',
        endDate: '2026-02-15',
        slotsTotal: 12,
        slotsLeft: 10,
      },
    ],
  },
  {
    slug: 'goa-backpacking',
    title: 'Goa Budget Backpacking',
    type: 'backpacking',
    region: 'Goa',
    location: 'North Goa · Panjim · Old Goa',
    durationDays: 4,
    basePrice: 4900,
    difficulty: 'easy',
    summary:
      'Four days in Goa — done right. Not the club-circuit, not the over-touristed beach strip. We explore Fontainhas (Goa\'s Latin Quarter), the spice farms of the hinterland, the quieter beaches of Morjim and Arambol, and the Portuguese architecture of Panjim and Old Goa. Full Goa, tight budget.',
    heroImage: 'https://picsum.photos/seed/goa/1400/900',
    gallery: [
      'https://picsum.photos/seed/goa2/800/600',
      'https://picsum.photos/seed/goa3/800/600',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Goa — Fontainhas & Panjim',
        description:
          'Arrive Goa (train/flight). Explore Fontainhas Latin Quarter — pastel Portuguese houses, the Altinho chapel, and the best prawn curry in the city. Evening on Miramar Beach.',
        meals: ['Dinner'],
        stay: 'Heritage Hostel, Panjim',
      },
      {
        day: 2,
        title: 'Old Goa Monuments + Spice Farm',
        description:
          'Morning: UNESCO Basilica of Bom Jesus, Se Cathedral. Afternoon: guided spice farm tour with Goan lunch on banana leaf. Evening at Candolim.',
        meals: ['Breakfast', 'Lunch'],
        stay: 'Hostel, North Goa',
      },
      {
        day: 3,
        title: 'Morjim + Arambol + Ashwem',
        description:
          'A day on the quieter North Goa beaches — Morjim (turtle nesting beach), Arambol with its natural freshwater lake, and the laid-back vibe of Ashwem.',
        meals: ['Breakfast'],
        stay: 'Beach Hostel, Arambol',
      },
      {
        day: 4,
        title: 'Divar Island → Depart',
        description:
          'Morning ferry to Divar Island — the most unhurried part of Goa. Cycle through paddy fields and 17th-century chapels. Back to Panjim for departure.',
        meals: ['Breakfast'],
        stay: '',
      },
    ],
    inclusions: [
      'All accommodation (hostel dormitory / private twin)',
      'Mentioned meals',
      'Spice farm entry',
      'Divar Island ferry + bicycle',
      'Local guide on Days 1–2',
    ],
    exclusions: [
      'Travel to Goa',
      'Beach activities (water sports, scooter rent)',
      'Personal expenses',
    ],
    thingsToCarry: [
      'Light cotton clothes, swimwear',
      'Flip flops + comfortable walking shoes',
      'Sunscreen, sunglasses, hat',
      'Small daypack',
    ],
    safetyNotes: [
      'Swim only in designated zones with lifeguards on duty.',
      'Our accommodation is vetted, centrally located, and secure.',
    ],
    faqs: [
      {
        q: 'Is this trip party-focused?',
        a: 'No. We deliberately stay away from the club-circuit beaches. This is a cultural and nature-focused Goa trip. The vibe is explorer, not party tourist.',
      },
    ],
    dates: [
      {
        id: 'ga-jan-1',
        startDate: '2026-01-15',
        endDate: '2026-01-18',
        slotsTotal: 15,
        slotsLeft: 9,
      },
      {
        id: 'ga-feb-1',
        startDate: '2026-02-12',
        endDate: '2026-02-15',
        slotsTotal: 15,
        slotsLeft: 14,
      },
    ],
  },
]
