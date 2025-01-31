interface Item {
  title: string;
  returnClosed: string;
  price: number;
  author?: string;
}

interface Order {
  orderPlaced: string;
  total: number;
  shipTo: string;
  orderNum: string;
  delivered: string;
  items: Item[];
}

const orderHistory: Order[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.0,
    shipTo: 'JS Masher',
    orderNum: '114-3941689-8772232',
    delivered: 'Aug 8, 2020',
    items: [
      {
        title: 'JavaScript for Impatient programmers',
        returnClosed: 'Sep 7, 2020',
        price: 31.55,
        author: 'Rauschmayer, Dr. Axel',
      },
    ],
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNum: '113-9984268-1280257',
    delivered: 'Jul 20, 2020',
    items: [
      {
        title: 'The Timeless Way of Building',
        returnClosed: 'Aug 19, 2020',
        price: 41.33,
        author: 'Alexander, Christopher',
      },
    ],
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNum: '114-2875557-9059409',
    delivered: 'Jul 7, 2020',
    items: [
      {
        title:
          'Gamecube controller Adapter, Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnClosed: 'Aug 5, 2020',
        price: 15.98,
      },
    ],
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNum: '113-2883177-2648248',
    delivered: 'Jul 5, 2020',
    items: [
      {
        title:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnClosed: 'Aug 4, 2020',
        price: 94.95,
      },
      {
        title: 'The Art of Sql',
        returnClosed: 'Aug 4, 2020',
        price: 33.99,
      },
    ],
  },
];

/// ///
