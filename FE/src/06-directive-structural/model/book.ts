// export class Book{
//     public id:number=0;
//     public title:string="";
//     public author:string="";
//     public price:number=0;
//     public rating:number=0.0;

//     constructor(id:number, title:string, author:string, price:number, rating:number){
//         this.id = id;
//         this.title = title;
//         this.author = author;
//         this.price = price;
//         this.rating = rating;
//     }
// }


export class Book{

    constructor(
        public id:number, 
        public title:string, 
        public author:string, 
        public price:number, 
        public rating:number=2.5
    ){}
}