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
  orderNum: number;
  delivered: string;
  items: Item[];
}

const orderHistory: Order[] = [];
