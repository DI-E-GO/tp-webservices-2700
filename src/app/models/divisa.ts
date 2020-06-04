export class Divisa {
    currency_name:string;
    rate:number;
    rate_for_amount:number;

    divisa(currency_name?:string, rate?:number, rate_for_amount?:number){
        this.currency_name = currency_name;
        this.rate = rate;
        this.rate_for_amount = rate_for_amount;
    }
}
