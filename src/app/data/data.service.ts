import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  products: Product[] = [
    {
      productId: 1,
      productName: 'Roxy Women\'s Jetty Block Snow Jacket',
      productDescription: 'The Roxy Women\'s Jetty Block Snow Jacket combines a great look with alpine performance!',
      picture: '/assets/p1-1.jpg',
      productPrice: 170,
      discountedPrice: 145,
      productImage: [
        {
          thumb: '/assets/p1-1.jpg',
          full: '/assets/p1-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-2.jpg',
          full: '/assets/p1-2.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-3.jpg',
          full: '/assets/p1-3.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-4.jpg',
          full: '/assets/p1-4.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      productId: 2,
      productName: 'Spyder Women\'s Willow Snow Jacket',
      productDescription: 'The Spyder Women\'s Willow Snow Jacket has a long, lean silhouette and athletic fit!',
      picture: '/assets/p2-1.jpg',
      productPrice: 400,
      discountedPrice: 350,
      productImage: [
        {
          thumb: '/assets/p2-1.jpg',
          full: '/assets/p2-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p2-2.jpg',
          full: '/assets/p2-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      productId: 3,
      productName: 'Women\'s Autumn Insulated Snowboard Jacket',
      productDescription: 'The Jacket is tailored to fit your needs.',
      picture: '/assets/p3-1.jpg',
      productPrice: 90,
      discountedPrice: 68,
      productImage: [
        {
          thumb: '/assets/p3-1.jpg',
          full: '/assets/p3-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p3-2.jpg',
          full: '/assets/p3-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      productId: 4,
      productName: 'Burton Women\'s Expedition 1/4 Zip Base Layer Top',
      productDescription: 'Built-in Stretch 360° for rider-friendly mobility, and zip-venting to regulate active body temps.',
      picture: '/assets/p4-1.jpg',
      productPrice: 79,
      discountedPrice:50,
      productImage: [
        {
          thumb: '/assets/p4-1.jpg',
          full: '/assets/p4-1.jpg',
          description: 'Base Layer Top',
        },
        {
          thumb: '/assets/p4-2.jpg',
          full: '/assets/p4-2.jpg',
          description: 'Base Layer Top',
        },
      ],
    },
    {
      productId: 5,
      productName: 'Nils Women\'s Lucy Print Leggings',
      productDescription: 'The are heavyweight, fleece backed, body hugging baselayer that will move with you down the slopes. ',
      picture: '/assets/p5-1.jpg',
      productPrice: 125,
      discountedPrice: 109,
      productImage: [
        {
          thumb: '/assets/p5-1.jpg',
          full: '/assets/p5-1.jpg',
          description: 'Lucy',
        },
        {
          thumb: '/assets/p5-2.jpg',
          full: '/assets/p5-2.jpg',
          description: 'Lucy',
        },
      ],
    },
    {
      productId: 6,
      productName: 'Burton Women\'s Starr Vest',
      productDescription: 'Is the epitome of comfort and versatility thanks to a sweater fleece fabric.',
      picture: '/assets/p6-1.jpg',
      productPrice: 75,
      discountedPrice: 60,
      productImage: [
        {
          thumb: '/assets/p6-1.jpg',
          full: '/assets/p6-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-2.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-3.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-4.jpg',
          full: '/assets/p6-4.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      productId: 7,
      productName: 'Dylan by True Grit Women\'s Flannel & Sherpa Road Trip Vest',
      productDescription: 'Is a nice piece to cap of your fall or winter wardrobe.',
      picture: '/assets/p7-1.jpg',
      productPrice: 124,
      discountedPrice: 90,
      productImage: [
        {
          thumb: '/assets/p7-1.jpg',
          full: '/assets/p7-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-2.jpg',
          full: '/assets/p7-2.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-3.jpg',
          full: '/assets/p7-3.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      productId: 8,
      productName: 'O\'Neill Exalt Ski Pants',
      productDescription: 'For the technical side they have 10K/10K waterproofing & breathability and O\'Neill Hyperdry to keep you warm and dry.',
      picture: '/assets/p8-1.jpg',
      productPrice: 140,
      discountedPrice: 135,
      productImage: [
        {
          thumb: '/assets/p8-1.jpg',
          full: '/assets/p8-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-2.jpg',
          full: '/assets/p8-2.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-3.jpg',
          full: '/assets/p8-4.jpg',
          description: 'Pants',
        },
      ],
    },
    {
      productId: 9,
      productName: 'Strafe Outerwear Capital Snow Pants',
      productDescription: 'Will repel any type of weather you encounter during your mountain adventure',
      picture: '/assets/p9-1.jpg',
      productPrice: 350,
      discountedPrice: 339,
      productImage: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
  ];
}
