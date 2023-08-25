// Q 1) Print even numbers between 1 and 20 but exclude multiole of 6.

// const even_numbers=(num)=>{
//     for(let i=1;i<num;i++){
//         if(i%2==0){
//             if(6/i!=0){
//                 console.log(i);
//             }
//         }
//     }
// }
// even_numbers(20);

// Q 2) Calculate the total price of items in a shopping cart, but apply a 10% discount to items that are on sale.

// const shoppingCart= [ {items: 'Shirt', price:25,onSale:false},{items: 'Jeans',price:50, onSale:true},{items: 'Shoes',price:80, onSale:false},{items: 'Hat', price:15, onSale:true}];
// var sum=0;
// for(let x of shoppingCart){
//     // console.log(x.price);
//     let prices=x.price;
//     if(x.onSale==true){
//        prices=(x.price*10)/100;
//         prices=x.price - prices;
//     }
//     sum+=prices;
// }
// console.log(sum);


// Q3) Remove the odd numbers form an array and get only the even numbers in a new array using filter function.

// const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const remove_odd_num= arr.filter( (num) =>  {
//     if(num%2==0){
//         return num;
//     }
//     console.log(num);
// });


// Q 4) Double each number in an array using the map function.

// const arr=[10,20,30,40,50];
// arr.map((num) => {
//     let double= num*2;
//     console.log(double);
// })


// Q 5) Calculate the sum of the numbres in an array using the reduce function.

// const arr=[100,200,300,400,500];
// const total=arr.reduce( (x,y) =>{
//     return x + y ;
// })
// console.log(total);


// Q 6) Find the first even number in an array using find function.

// const arr=[13,8,3,4,5,6,7,10,9];
// const even= arr.find((num) =>{
//     if(num%2==0){
//         return num;
//     }
// })
// console.log(even);
