const USERS = [
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Elias', last: 'Justi' },
    location: {
      street: { number: 1250, name: 'Rotuaari' },
      city: 'Hammarland',
      state: 'Southern Savonia',
      country: 'Finland',
      postcode: 97062,
      coordinates: { latitude: '-9.4951', longitude: '-100.1017' },
      timezone: { offset: '+9:00', description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk' }
    },
    email: 'elias.justi@example.com',
    login: {
      uuid: '43d1b1df-2942-47da-a0d0-f77a97b72357',
      username: 'ticklishbear995',
      password: 'aaaa',
      salt: 'iKshC2OA',
      md5: '86e5ae1bdb31fce5c4663cae3d209f42',
      sha1: '722e67fdd3e717e57c4de377c20d5c0028de03d3',
      sha256: 'd42a2fd3a1548bbaf6f83e07f1e877aef94c2890ce3dac900ab8e20de5738732'
    },
    dob: { date: '1969-03-25T04:58:15.626Z', age: 51 },
    registered: { date: '2010-11-04T12:49:34.592Z', age: 10 },
    phone: '06-464-123',
    cell: '044-055-20-13',
    id: { name: 'HETU', value: 'NaNNA057undefined' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/65.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/65.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/65.jpg'
    },
    nat: 'FI'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Tomas', last: 'Skråmestø' },
    location: {
      street: { number: 2991, name: 'Ole Bulls gate' },
      city: 'Eikefjord',
      state: 'Hordaland',
      country: 'Norway',
      postcode: '5855',
      coordinates: { latitude: '-87.4887', longitude: '33.2276' },
      timezone: { offset: '+2:00', description: 'Kaliningrad, South Africa' }
    },
    email: 'tomas.skramesto@example.com',
    login: {
      uuid: '8311519c-c0ec-484a-a6a0-f71aa5c97b10',
      username: 'heavypeacock167',
      password: 'mariners',
      salt: 'b9DfNNwX',
      md5: '49d8429cdd665224931a3a7134468c68',
      sha1: '36f25ad581f268d3c1720950578c44f6f86816a6',
      sha256: 'c4eaf4301b57e03d68efe4528c1403b04f945cb1d9aed3084d7f08151d4ec641'
    },
    dob: { date: '1945-07-11T16:20:12.960Z', age: 75 },
    registered: { date: '2012-05-01T11:50:18.180Z', age: 8 },
    phone: '79700538',
    cell: '45611770',
    id: { name: 'FN', value: '11074503529' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/68.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/68.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg'
    },
    nat: 'NO'
  },
  {
    gender: 'female',
    name: { title: 'Mrs', first: 'Beatrice', last: 'Lo' },
    location: {
      street: { number: 2055, name: 'Grand Marais Ave' },
      city: 'Oakville',
      state: 'Yukon',
      country: 'Canada',
      postcode: 'W4E 9Z4',
      coordinates: { latitude: '13.9386', longitude: '67.0074' },
      timezone: { offset: '-10:00', description: 'Hawaii' }
    },
    email: 'beatrice.lo@example.com',
    login: {
      uuid: 'cfc1085d-78a1-41cc-8ea2-8396138af9c6',
      username: 'crazyelephant220',
      password: 'peter1',
      salt: 'UzjxU2XJ',
      md5: '51b5cbf24fc795d8c94fa95559dd4f3e',
      sha1: '7d81c2c4b60c7820f36da6653d90d354d89fbbf6',
      sha256: '97bd30c38593aa6cea0aa343ad8ebd043589ac89579f75e1829832c999914de7'
    },
    dob: { date: '1978-09-09T09:17:19.875Z', age: 42 },
    registered: { date: '2011-07-29T03:29:53.052Z', age: 9 },
    phone: '231-162-8230',
    cell: '333-364-1550',
    id: { name: '', value: null },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/12.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/12.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/12.jpg'
    },
    nat: 'CA'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Burghard', last: 'Grund' },
    location: {
      street: { number: 4239, name: 'Friedhofstraße' },
      city: 'Oberkochen',
      state: 'Sachsen-Anhalt',
      country: 'Germany',
      postcode: 66023,
      coordinates: { latitude: '-61.7244', longitude: '-43.3043' },
      timezone: { offset: '-3:00', description: 'Brazil, Buenos Aires, Georgetown' }
    },
    email: 'burghard.grund@example.com',
    login: {
      uuid: 'cdc9a442-a823-4611-a3e4-505565a72891',
      username: 'sadbear443',
      password: 'weed420',
      salt: 'RvVfOHWX',
      md5: 'a4f0a25f47a2c6eba0ddbc4a36334bf7',
      sha1: '5b1bf4cc28cb2ee63e23164930511ccf440cdf1f',
      sha256: '78274e06cad34f5c5b4ad8fa96f7538fdfbb07f7c8607480f679046122483caf'
    },
    dob: { date: '1987-01-26T13:41:25.805Z', age: 33 },
    registered: { date: '2016-05-24T12:10:32.093Z', age: 4 },
    phone: '0252-7863473',
    cell: '0172-7042789',
    id: { name: '', value: null },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/1.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/1.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    nat: 'DE'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Borre', last: 'Does' },
    location: {
      street: { number: 4946, name: 'Achter de Boogerden' },
      city: 'Waardenburg',
      state: 'Utrecht',
      country: 'Netherlands',
      postcode: 88756,
      coordinates: { latitude: '63.1652', longitude: '-31.0537' },
      timezone: { offset: '-10:00', description: 'Hawaii' }
    },
    email: 'borre.does@example.com',
    login: {
      uuid: '2ef73414-565a-4d9b-9c1a-8ccfb06cc048',
      username: 'silverpeacock583',
      password: 'lala',
      salt: 'gOP3hDXU',
      md5: '230bfe19c0b274519bb6c0680c9050c8',
      sha1: '5f692cc0c3979387115ce220d48704ce8695170f',
      sha256: 'e747749901b38918fac308511180b5c037d509a8eaff7e7261ece5d31dfb71f4'
    },
    dob: { date: '1981-02-17T06:43:09.905Z', age: 39 },
    registered: { date: '2005-11-14T20:38:00.769Z', age: 15 },
    phone: '(743)-914-5789',
    cell: '(421)-587-8462',
    id: { name: 'BSN', value: '80411926' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
    },
    nat: 'NL'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Daniel', last: 'Lehtonen' },
    location: {
      street: { number: 6699, name: 'Hämeenkatu' },
      city: 'Ilmajoki',
      state: 'Central Ostrobothnia',
      country: 'Finland',
      postcode: 94814,
      coordinates: { latitude: '-53.0626', longitude: '74.2686' },
      timezone: { offset: '+5:45', description: 'Kathmandu' }
    },
    email: 'daniel.lehtonen@example.com',
    login: {
      uuid: 'ea67b53b-173b-4deb-b121-70ede1aae17c',
      username: 'sadladybug694',
      password: 'jewels',
      salt: 'sFTtK6M1',
      md5: '45e069cd9b53c52de2c12f8ac1be5b1e',
      sha1: 'fea32f181d989a990589c26ef4aa533f777f573a',
      sha256: 'fda0c350d167ba484d810fe1ffbf95aaaa5343297e14b8bab34d7a37290b5e1c'
    },
    dob: { date: '1958-12-18T20:00:35.575Z', age: 62 },
    registered: { date: '2017-01-08T21:41:00.055Z', age: 3 },
    phone: '04-990-841',
    cell: '046-965-39-57',
    id: { name: 'HETU', value: 'NaNNA673undefined' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/56.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/56.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/56.jpg'
    },
    nat: 'FI'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Hans Josef', last: 'Bartsch' },
    location: {
      street: { number: 7390, name: 'Blumenstraße' },
      city: 'Ellwangen (Jagst)',
      state: 'Brandenburg',
      country: 'Germany',
      postcode: 71757,
      coordinates: { latitude: '45.8370', longitude: '9.9427' },
      timezone: { offset: '-11:00', description: 'Midway Island, Samoa' }
    },
    email: 'hansjosef.bartsch@example.com',
    login: {
      uuid: 'bb8a3dc7-5f26-49cd-a743-8ebd6a3e1621',
      username: 'purpleduck576',
      password: '2468',
      salt: 'gLcf0RbF',
      md5: '5ce2ee3a5726c9c90aa915acada74ebb',
      sha1: '59885bfdadbb1006ef6686551e7521fd489a0237',
      sha256: '4736816cc464a3cba56dba2c582140c7670398fbb33d271da990d3a087e545e5'
    },
    dob: { date: '1956-07-01T04:26:03.341Z', age: 64 },
    registered: { date: '2004-05-16T05:30:54.461Z', age: 16 },
    phone: '0789-2486412',
    cell: '0177-0810348',
    id: { name: '', value: null },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/15.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/15.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/15.jpg'
    },
    nat: 'DE'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Phoenix', last: 'Kumar' },
    location: {
      street: { number: 4267, name: 'West Coast Road' },
      city: 'Nelson',
      state: 'Taranaki',
      country: 'New Zealand',
      postcode: 20783,
      coordinates: { latitude: '81.7666', longitude: '-75.5272' },
      timezone: { offset: '-12:00', description: 'Eniwetok, Kwajalein' }
    },
    email: 'phoenix.kumar@example.com',
    login: {
      uuid: 'a7317ba3-20f4-48b5-9e9d-7b7a4d94fe0e',
      username: 'blackzebra477',
      password: '686868',
      salt: 'S488ewJA',
      md5: 'f5047bb5c610323004a6f9217b9b345b',
      sha1: '9b3016cb34affacb690638bb4a6e86a9f58a283d',
      sha256: 'f9f50c51a91de708d98d320dda5dea8bac1386c6977f4508ef3e95bc77cf699f'
    },
    dob: { date: '1992-06-11T18:56:57.130Z', age: 28 },
    registered: { date: '2007-01-07T16:20:50.339Z', age: 13 },
    phone: '(138)-697-2734',
    cell: '(841)-877-1609',
    id: { name: '', value: null },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/18.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/18.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/18.jpg'
    },
    nat: 'NZ'
  },
  {
    gender: 'female',
    name: { title: 'Miss', first: 'Kristin', last: 'Dean' },
    location: {
      street: { number: 6856, name: 'Alexander Road' },
      city: 'Carlow',
      state: 'South Dublin',
      country: 'Ireland',
      postcode: 78478,
      coordinates: { latitude: '-4.5800', longitude: '-118.8089' },
      timezone: { offset: '-7:00', description: 'Mountain Time (US & Canada)' }
    },
    email: 'kristin.dean@example.com',
    login: {
      uuid: '9ea95f9c-ab54-4350-8b23-3a1901fb080a',
      username: 'lazyrabbit345',
      password: 'asians',
      salt: '5L6Wm9pS',
      md5: '55502a884943d1e399b656ba405c74e7',
      sha1: 'f7ecb7f39880b740d1f299ace8c2d43e8b2ef840',
      sha256: 'e54790dcfdebd95646253d746c2fa6a10a9641de1a41ce60149d037eaadee826'
    },
    dob: { date: '1995-05-31T09:08:54.805Z', age: 25 },
    registered: { date: '2011-03-08T18:28:38.369Z', age: 9 },
    phone: '071-586-3499',
    cell: '081-916-2671',
    id: { name: 'PPS', value: '8136903T' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/86.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/86.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/86.jpg'
    },
    nat: 'IE'
  },
  {
    gender: 'female',
    name: { title: 'Ms', first: 'Yasmin', last: 'Stigen' },
    location: {
      street: { number: 3496, name: 'Waldemar Thranes gate' },
      city: 'Brandal',
      state: 'Hedmark',
      country: 'Norway',
      postcode: '0988',
      coordinates: { latitude: '-49.4965', longitude: '10.7185' },
      timezone: { offset: '+8:00', description: 'Beijing, Perth, Singapore, Hong Kong' }
    },
    email: 'yasmin.stigen@example.com',
    login: {
      uuid: '312bef37-ea63-44b1-8105-7ed0d606f8b1',
      username: 'crazywolf754',
      password: 'kittens',
      salt: '1Q6DSrzT',
      md5: '0f68bad1165a45902dcaa56b75086c71',
      sha1: '317c06b5a798fb549b4d7124ee427966f7418663',
      sha256: '8aca979052fbc4a605b13f66c0df49a98fddf006632b6ab7f6a7d4b99e013049'
    },
    dob: { date: '1954-02-03T21:36:26.069Z', age: 66 },
    registered: { date: '2017-06-11T04:17:58.810Z', age: 3 },
    phone: '28002375',
    cell: '98784305',
    id: { name: 'FN', value: '03025403079' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/19.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/19.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/19.jpg'
    },
    nat: 'NO'
  }
]

export default USERS
