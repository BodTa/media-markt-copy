import type OfferItem from "./OfferItem";

export default interface Offer {
  id?: string;
  title: string;
  items: OfferItem[];
}
