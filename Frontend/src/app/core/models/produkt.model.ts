export interface Stock{
    id:number;
    quantity:number;
}
export interface Produkt{
    id: number;
    name : string;
    short_description: string;
    product_description: string;
    price: number;
    stock: Stock;
}