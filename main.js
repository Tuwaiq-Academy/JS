// // operating and variable ------------->
// // let quiz_2 = '2' + '5' == 5 * 5;
// // console.log(quiz_2)
// // let quiz_1 = 3 + 5 * 2 === 13;
// // console.log(quiz_1)





// // Arrays -------------------->
// // function array(one1 , tow){}
// // let tower =['I',"nour" , "here",'love'];

// // console.log(tower[1])
// // console.log(tower[1])
// // tower[1]="sos"
// // console.log(tower.length)

// // console.clear()

// // tower.pop()
// // tower.shift()
// // tower.unshift('first')
// // tower.push('last')
// //  console.log(tower)


// // function array(array , vare){
// // array.unshift(vare) 
// // console.log(array) 

// // if (array.includes(vare)){
// //     console.log("");
// //     console.log("😎🤞");
// //     }
// // else{    
// //     console.log("");
// //     console.log("😒🙂"); 
// // }
// // }

// // array(['hi','one','love'],"first1")



// // dictionary ----------------->

// // let emoji ={one:"😀" ,2:"🤐",three:100,
// // salary:function(value){
// //     this.three=this.three+value;
// //     return this.three;
// // }}
// // console.log(emoji['one'])
// // console.log(emoji)
// // console.log(emoji.one)

// // console.log(emoji.salary(300));  //to change function in dictionary we use name of dictionary.function(parameter we want)
// // console.log(emoji);

// // let dictionary ={
// //     name:"Nour",
// //     age:27,
// //     Major:"Cs"
// // }

// // for (let I in dictionary){

// //     console.log(I +":",dictionary[I]);
// // }

// // console.log("I. lo.ve .you".split('.'));
// // dictionary.name="hhhh";
// // console.log(dictionary['name']);
// // console.log(dictionary.name);

// // let d={one:'i',tow:'you',three:'we',add:function(hi){
// //     d.one=hi;
// //     console.log(d);

// //     return "hi     loll"
// // }}

// // console.log(d.add('saso'));


// // forEach function---------------------->
// // let arry=[4,3,4,5,6,7]
// // let dic=arry.forEach((element,index)=>{
// //     console.log(index,':',element*2);
// // })

// // filter function-------------------->
// // let arry=['Ilove you','hhhhh','wow','h'];

// // let dic=arry.filter((element)=>{
// //     return element.length>2;
// // })

// // console.log(dic);

// // // ------------- filter with number:return an array
// // let arry=[2,4,6,7,8,9,9];

// // let dic=arry.filter((element)=>{
// //     return element>2;
// // })

// // console.log(dic);

// // ------------- map function: return an array according to the condiction of return 
// // let arry=[2,4,6,7,8,9,9];

// // let dic=arry.map((element)=>{
// //     return element-2;
// // })

// // console.log(dic);
// // console.log(arry);


// // ------------- find function: return first element of array that fulfills the condition of return 
// // let arry=[2,4,6,7,8,9,9];

// // let dic=arry.find((element,i)=>{
// //     return element==2 ,i ;
// // })
// // console.log(dic);
// // console.log(arry);




// // sum of array element---------------------------
// // const arry =[1,2,3,4,3,4,5]; 
// // let U=0;
// // let dic=arry.forEach((element)=>{
// //    U=U+element;
// // })
// //  console.log(U);


// // Coderhub ---------------->
// // sum function-----
// // function ConcatNames(name1, name2) {
// // 	// wri	Output=name1+name2;

// //   	return name1+''+name2;
// // }


// // average function--
// // function average(array) {
// //     let total = 0;
// //     let count = 0;
  
// //     array.forEach((index)=> {
// //               total += index;
// //               count++;
// //           });
  
// //           return total / count;
// //       }


// // function isSame(name1, name2) {
// //     // write your code here
    
// //                 if(name1 == name2){
                  
// //                   return "متشابهتين";
// //                 }else{
// //                   return "غير متشابهتين	" ;
                  
// //                 }}
             
    
// //  console.log( average([1,2,3,55]))

// // min and max value in array------------------------
// // function largestSmallest(array) {

// // //    return Math.max(...array); 

// //    return Math.min(...array);  

// // }

// // console.log(largestSmallest([1,3,545,6,7,8,2]));



// // let arry=[2,4,6,7,8,9,9];

// // // let dic=arry.filter((element)=>{


// //     a=Math.max(...arry);
// //     b=Math.min(...arry); 
// //     // return a,b;
// // // })

// // console.log(`[${a},${b}]`)


// // function largestSmallest(array) {

// //     a=Math.max(...array);
// //     b=Math.min(...array); 
 

// // console.log(`[${a},${b}]`)      }
  
// // largestSmallest([2 , 4 , 9 , 23 , 435])

// // let t=[4,3.3,47,8,9,0,686,457,,35,14]
   
 
   
// // let maximum = t[0];   // start with the first value
// // for (let i=1; i<t.length; i++) {
// //     if (t[i] > maximum) {
// //         maximum = t[i];   // new maximum
// //     }else if (t[i] < maximum){
// //         min=t[i];
// //     }
// // }
// // console.log(`[${maximum},${min}]`);


// // ------


// // function largestSmallest(array) {
// //    array= [4,3.3,47,8,9,0,686,457,35,14];
// //     let maximum = array[0];
// //     let min = array[0];
// //     let dic=array.filter((element)=>{
    
// //         if (element > maximum) {
// //             maximum = element; 
// //              // new maximum
// //         }else if (element < maximum){
// //             min=element;}
// //         } );

// //         console.log(maximum,min);
// // largestSmallest([4,3.3,47,8,9,0,686,457,35,14]);



// //         function largestSmallest(array) {

// //             let maximum = array[0];
// //             let min = array[0];
// //             array.filter((element)=>{
            
// //                 if (element > maximum) {
// //                     maximum = element;   // new maximum
// //                 }else if (element < maximum){
// //                     min=element;
// //                 }
// //             })
        
// //            console.log(`[${maximum},${min}]`);
// // };
                
// // largestSmallest([1,2,3,4,5,67,8,2]);


// // function largestSmallest(array) {

// //     let maximum = array[0];
// //     let min =array[0];
// //     array.filter((element)=>{
    
// //         if (element > maximum) {
// //             maximum = element;   // new maximum
// //         }else if (element < maximum){
// //              min=element;
// //         }
// //     })
// //     let I=[];
// // I.unshift(min);
// // I.unshift(maximum);
// // console.log(I);

// // function largestSmallest(array) {

// //     let maximum = array[0];
// //     let min = array[0];
// //     array.filter((element)=>{
    
// //         if (element > maximum) {
// //             maximum = element;   // new maximum
// //         }else if (element < maximum){
// //             min=element;
// //         }
// //     })

// //    return [maximum,min];
// // };



// // function largestSmallest(array) {

       
        
// //     return [Math.max(...array),Math.min(...array)];
// // }

// // console.log(largestSmallest([1,2,3,4,5,67,8,2,1]));])

// // function num_elements(array) {
// //     // write your code here
// //     return array.length;
// //   }
// //   console.log(num_elements([1,2,3,4,5,67,8,2,1]));


// // function cumulativeAddition(array) {
// //   // write your code here
 
// // let U=0;
// // array.forEach((element)=>{
// //     U=U+element;
// // })
// // I=array.length;
// // return [U,I]

// // }

// // function cumulativeAddition(array) {
// //   // write your code here
   
// // sum=0;

// // for(i=0; i<array.length; i++){
// //     sum+=array[i];
// // }

// // return [sum,array.length]


// // }
// //   console.log(cumulativeAddition([1,2,3,4,3,4,5]) );
// // -------------------------------------------------
// // function oddEven(number) {
// //   // write your code here
// //   if (number%2==0){
// //     return "زوجي"	;
// //   }else if (number%2==1){
// //     return "فردي";
// //   }
// // }

// // console.log(oddEven(3));


// // -------------------------------------------
// // function inputType(value) {
// //   // write your code here
 
// //   c=toString(value)==true;
// //   if(t){
// //       return "integer" ;
// //   }else if(c){
// //       return "string " ;}}

// //   console.log(inputType('value'))

// // ---------------
// // function cumulativeAddition(array) {
  
// //   return array.pop();
  
  
// //   }
// //     console.log(cumulativeAddition([1,2,3,4,3,4,5]) );


// // function arrayRemove(arr, value) { 
    
// //   return arr.filter(function(ele){ 
// //       return ele != value; 
// //   });
// // }


// // console.log( arrayRemove([1,2,5,7], 2));
// // ----------------------------------------------------------
// // function deleteElementInArray(arr, index) {
// // return arr.filter(function(ele,i){ 
// //   return index != i; 
// // });


// // way 2
// // delete arr[index];
// // return arr;
// // }

// // console.log( deleteElementInArray([1,2,3,4,5,], 2));

// // -----------------------------------------------------------
// // factorial function

// // function factorial(number) {
// //   // write your code here

// //   let sum=1;
// //   for(i=0; i<number; i++){
    
// //    sum=sum*(number-i);
// //   }

// //   return sum;
// // }

// // console.log(factorial(6));

// // function wordRepeat(word, n) {
// //   // write your code here
// //   j="";
// //   for(i=0; i<n; i++){
    
// //   j+=word+" ";
// //   }
// //   return j;
// // }
// // console.log(wordRepeat('sss',6));

// // ------------------------------------
// // match_array-----------

// // function match_array(array1, array2){
// //   // write your code here
 
// // // if(array1.length==array2.length){
 
// //  for(i=0; i<array2.length; i++) {
   
// //    if (array1[i]!=array2[i]){
   
// //    return false;
// //    }}
// // return true
// // }
// // // }

// // console.log(match_array(["word1", "woffff", "word2"], ["word1", "wo", "word2"]));

// // function match_array(array1, array2){
// //   // write your code here
    
// //   for (let item of array1) { 
// //     if (!array2.includes(item)) return false 
// //   } 
// //   return array2.length == array1.length 

// // }

// // ------------------way 2

// // function match_array(array1, array2){

// //      for(i=0; i<array1.length; i++){
// //         for(j=0; j<array2.length; j++){
// //         if (array1[i]!==array2[j]){
// //         return "false";}

// //         else{return "true";}
// //      }}}

// // -----------------------------


//   // function match_array(array1, array2){
 

//   //   for(i=0; i<array1.length; i++){
//   //        for(j=0; j<array2.length; j++){
//   //        if (array1[i]!==array2[j]){
//   //        return "false";}
 
//   //        else{return "true";}
      
//   //        }}}

// // --------------------------------------

//   // function numbers_range(number) {
//   //   // write your code here
        
//   //       I=''
//   //       for (i=0; i<=number; i++){
          
//   //         I+=number-(number-i)+" "
          
//   //       }
//   //       console.log( `"${I}"`)

//   //     }

//   //     numbers_range(7)


//   // --------------------------------

//   // function exponent_squared(number) {
//   //   // write your code here 
//   //   return Math.pow(number,2)
//   // }

//   // console.log(exponent_squared(2))

//   // ---------------------------------------------------------

//   // function countDown(number) {
//   //   // write your code here
    
//   //   I=''
//   //         for (i=0; i<=number; i++){
            
//   //           I+=number-i+" "
            
//   //         }
          
//   //         return I;
  
//   // }


//   // console.log(countDown(3))

//   // --------------------------------------------------------------


//   // function countChar(sentence, ch) {
//   //   // write your code here
//   //   c=0;
//   //   for(i of sentence){
      
//   //     if (i==ch){
//   //       c++
//   //     }
//   //     }
    
//   //   return c;
//   // }


//   // function reverseWords(str1, str2) {
//     // write your code here
    
//     // return  str2+','+str1;
    
//   //   I=[str1,",",str2];
  
//   // return I.reverse();

//   // }

//   // console.log( reverseWords("sentence",'e'))
// // ----------------------------------------------------

//   // function reverseCase(str) {
//   //   // write your code here
//   //   return str.split("").reverse().join("");
  
//   // }
//   // console.log( reverseCase('str ssss bbb'))

// // --------------------------------------------------------------------
//   // function reverseCase(str) {
//   //   // write your code here .reverse().join("")
//   //   I= str.split("");
    
//   //   for (i=0 ;i<I.length;i++){
      
//   //      if (I[i] != I[i].toLowerCase()){
        
//   //       I[i]=I[i].toLowerCase();
//   //     }
//   // else{I[i]= I[i].toUpperCase();}}
  
  
//   // return I.join("");
//   // }

//   // console.log( reverseCase('STr sSSSs BBBBbb'))
//   // --------------------------------------------------------------------


//   // function say_hi_bye(name, num) {
//   //   // write your code here
    
//   //   if (num==1){
      
//   //     return "Hi"+" "+name;
//   //   }else if(num==0){
      
//   //     return "Bye"+" "+name;
//   //   }
//   // }


//   // console.log( say_hi_bye("name1111", 1))

// // --------------------------------------------------------------

// function sumTwoSmallestNums(arr) {
// 	// write your code here
	
// 	// q=Math.min(...arr);
// 	// let p= arr.filter(function(ele){ 
//   //     return ele!=Math.min(...arr); 
//   //   });
	 
// 	// g= Math.min(...p);
	 
// 	// //  return ;
//   // console.log(g+q )
// // -----------------------------------------------------------------------
//   let maximum = arr[0];   // start with the first value
//   for (let i=1; i<arr.length; i++) {
//       if (arr[i] < maximum){
//           min=arr[i];
//       } }

//       let p= arr.filter(function(ele){ 
//             return ele!=min; 
//           });

//           let maximum1 = p[0];   // start with the first value
//           for (let i=1; i<p.length; i++) {
//               if (p[i] < maximum1){
//                   min1=p[i];
//               } }

//               console.log(min+min1 )
// }

// sumTwoSmallestNums([20,9,3,2])

// const nums = [ 5, 6, 7, 9, 3, 1, 6, 12, -2 ]

// // filter( ( elem, i ) => { return elem > 3 })


// nums.filter( ( elem, i ) => { return elem > 3 })

// // nums.filter( ( elem, i ) => { return elem < 3 })
// // A
// // nums.filter( ( elem, i ) => { elem > 3 })
// console.log(nums.map( ( elem, i ) => { return elem * elem }))



// ----------------------DOM----------------------
// const fisrt=document.querySelector('#a1').innerHTML;
// const fr=document.querySelector('#b2');
// const fi=document.querySelector('#c3');
// const fis=document.querySelector('#d4');
// const fisr=document.querySelector('#f5');
// const v=document.querySelectorAll('p')[1];
// console.log(fi.innerText);


// const bi=getComputedStyle(fi);
// // console.log(bi);
// console.log(bi.color);
// fi.style.color ='black';//"""" FI """هااااااااااااااااااااااااااااااااااااممممممممممممممم التعديل بيكون عن طريق اسم النود
// console.log(bi.color);

// fi.getAttribute('id')   // للخصول على قيمة الid
// fi.setAttribute('id','a1') //لتغيير قيمة الid




// const br=document.querySelector('#s4');
// br.setAttribute('type','text')

// const one=document.querySelector('#b2');

// const hgfa=document.querySelector("#hgf");


//  function action1(){

//     console.log("clear");
//     document.querySelector("#hgf").innerHTML="fffffffffffffff";
//  }

//  hgfa.addEventListener('click',action1)

// // ------------------------

// const ss=document.querySelector("#ss");
// const ssss=document.querySelector("#sss");
// const s4=document.querySelector("#s44");
// const k=document.querySelector("#k");

// const users=[{User:"nour", pass:"123"}
// ,{User:"nnn", pass:"111"}
// , {User:"nano", pass:"1234"}];



// function help(){
// const i1=document.querySelector("#ss").value;
// const i2=document.querySelector("#sss").value;

//     for(let i = 0; i<=users.length ; i++){
//         if(i1===users[i].User && i2===users[i].pass){
//             k.innerText="success"
//             return;
//         }}
        
        
//         k.innerText="failled"
//         return;
//     }
//     // k.innerText="failled"
//     // return


            
            

// s4.addEventListener('click',help)


// ------------------------------------------EX-------------------
const Use=[{name:"nour", pass:"12"},{name:"noura", pass:"1452"}];

const A1=document.querySelector("#A1");
const B2=document.querySelector("#B2");
const C3=document.querySelector("#C3");
const D4=document.querySelector("#D4");

function Exam(){

    const Az=document.querySelector("#A1").value;
    const Ab=document.querySelector("#B2").value;

    for(let i = 0; i < Use.length; i++){
    if(document.querySelector("#A1").value===Use[0].name && document.querySelector("#B2").value===Use[0].pass){
            D4.innerText="Success"
            return;
    }
}
D4.innerText="Failled"
return;
}

C3.addEventListener('click',Exam);