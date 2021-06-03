//create model
export interface Product{
  productTitle:string;
  description:string;
  productImage:string;
  }
  export interface User{
    username:string,
    dob:string,
    email:string;
  }
  export interface Ecommerce{
    id:String;
    brand:String;
    colorway:String;
    gender:String;
    name:String;
    releaseDate:String;
    retailPrice:number;
    shoe:String;
    styleId:String;
    title:String;
    year:String;
    media:{
    imageUrl:String;
    smallImageUrl:String;
    thumbUrl:String;
    }
  }