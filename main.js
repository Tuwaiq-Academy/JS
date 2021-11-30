// operating and variable ------------->
// let quiz_2 = '2' + '5' == 5 * 5;
// console.log(quiz_2)
// let quiz_1 = 3 + 5 * 2 === 13;
// console.log(quiz_1)





// Arrays -------------------->
// function array(one1 , tow){}
// let tower =['I',"nour" , "here",'love'];

// console.log(tower[1])
// console.log(tower[1])
// tower[1]="sos"
// console.log(tower.length)

// console.clear()

// tower.pop()
// tower.shift()
// tower.unshift('first')
// tower.push('last')
//  console.log(tower)


// function array(array , vare){
// array.unshift(vare) 
// console.log(array) 

// if (array.includes(vare)){
//     console.log("");
//     console.log("😎🤞");
//     }
// else{    
//     console.log("");
//     console.log("😒🙂"); 
// }
// }

// array(['hi','one','love'],"first1")



// dictionary ----------------->

// let emoji ={one:"😀" ,2:"🤐",three:100,
// salary:function(value){
//     this.three=this.three+value;
//     return this.three;
// }}
// console.log(emoji['one'])
// console.log(emoji)
// console.log(emoji.one)

// console.log(emoji.salary(300));  //to change function in dictionary we use name of dictionary.function(parameter we want)
// console.log(emoji);

// let dictionary ={
//     name:"Nour",
//     age:27,
//     Major:"Cs"
// }

// for (let I in dictionary){

//     console.log(I +":",dictionary[I]);
// }

// console.log("I. lo.ve .you".split('.'));
// dictionary.name="hhhh";
// console.log(dictionary['name']);
// console.log(dictionary.name);

// let d={one:'i',tow:'you',three:'we',add:function(hi){
//     d.one=hi;
//     console.log(d);

//     return "hi     loll"
// }}

// console.log(d.add('saso'));


// forEach function---------------------->
// let arry=[4,3]
// let dic=arry.forEach((element,index)=>{
//     console.log(index,':',element*2);
// })

// filter function-------------------->
// let arry=['Ilove you','hhhhh','wow','h'];

// let dic=arry.filter((element,index)=>{
//     return element.length>2;
// })

// console.log(dic);

// // ------------- filter with number:return an array
// let arry=[2,4,6,7,8,9,9];

// let dic=arry.filter((element)=>{
//     return element>2;
// })

// console.log(dic);

// ------------- map function: return an array according to the condiction of return 
// let arry=[2,4,6,7,8,9,9];

// let dic=arry.map((element)=>{
//     return element-2;
// })

// console.log(dic);
// console.log(arry);


// ------------- find function: return first element of array that fulfills the condition of return 
// let arry=[2,4,6,7,8,9,9];

// let dic=arry.find((element,i)=>{
//     return element==2 ,i ;
// })
// console.log(dic);
// console.log(arry);

const arry =[1,2,3,4,3,4,5]; 
let U=0;
let dic=arry.forEach((element)=>{
   U=U+element;
})
 console.log(U);