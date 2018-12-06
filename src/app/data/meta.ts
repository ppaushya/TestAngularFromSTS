export interface Product {
 
  productId: number;
  productName: string;
  productDescription: string;
  picture: string;
  productPrice: number;
  discountedPrice:number;
  productImage: ProductPhoto[];

    // quantity:number;
    // // productId:number;
    // productName:string;
    // productCategory:string;
    // inventoryId:number;
    // productPrice:string;
    // merchantId:number;
    // promoId:number;
    // productsold:number;
    // productView:number;
    // isPromotionmsgSent:boolean;


    //dummycheck
    //dummycheck2
    //dummycheck3
}

export interface ProductPhoto {
  thumb: string;
  full: string;
  description: string;
}
