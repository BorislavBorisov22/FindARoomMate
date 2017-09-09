import { OfferAuthor } from './offer-author.model';
const DEFAULT_OFFER_IMAGE = 'http://nursevibe.com/images/clients-pic/2.png';

export class Offer {
    _id: string;
    title: string;
    description: string;
    image1: string;
    image2?: string;
    image3?: string;
    price: number;
    address: string;
    author?: OfferAuthor;
    comments?: string[];

    constructor() {
        this.image1 = DEFAULT_OFFER_IMAGE;
    }
}
