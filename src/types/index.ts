export type Product = {
  _id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
};

export type Category = {
  name: string,
  _id: number
}

export type ProductBody = {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
};