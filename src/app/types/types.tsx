export interface Slug {
  slug: string;
  id: string;
}
export interface ProductPage {
  price: string;
  title: string;
  description: string;
  image: Array<any>;
  imageLarge: Array<any>;
}
export interface BadgeData extends Array<any> {
  title: string;
  link: string;
  slug: string;
}
export interface Auction {
  description: string;
  gif: {
    width: Number;
    height: Number;
    url: string;
  };
  image: Array<string | any>;
  price: Number;
  title: string;
  id: string;
}
