//--------------------------------------Q1--------------------------------

/* var num = window.prompt("Enter Your Number: -");

console.log("the number is :-" ,num); */


//--------------------------------------Q2--------------------------------

/* var num =window.prompt("Enter Your Number");

if( num % 3 == 0  && num % 4 == 0 ){
    console.log("yes");
}
else{
    console.log("No");
} */

//--------------------------------------Q3--------------------------------

/* var num1 = Number(window.prompt("Enter Num 1:-"));

var num2 =Number(window.prompt("Enter Nmu 2:-"));

if( num1 > num2){
    console.log(num1);
}
else{
    console.log(num2);
} */

//--------------------------------------Q4--------------------------------


/* var num = Number(window.prompt("Enter Your Number"));

if (num < 0) {
    console.log("Output Negative");
}
else if ( num > 0){
    console.log("Output Positive");
}else{
    console.log("valid ! input");
}
 */


//--------------------------------------Q5--------------------------------

/* var num1 = window.prompt("Enter Your Number :-");
var num2 = window.prompt("Enter Your Number :-");
var num3 = window.prompt("Enter Your Number :-");

var max ;
var min ;

if( num1 > num2 && num1 > num3){
    max = num1 ;
}else if (num2 > num1 && num2 > num3){
    max = num2 ;
}else {
    max = num3 ;
}
console.log( "max number is :"  ,max );

if( num1 < num2 && num1 < num3){
    min = num1 ;
}else if (num2 < num1 && num2 < num3){
    min = num2 ;
}else {
    min = num3 ;
}
console.log( "min number is :"    ,min ); */


//--------------------------------------Q6--------------------------------

/* var num = Number( window.prompt("Enter Your Number" ));

if(num %2 == 0){
    console.log("even ");
}else {
    console.log("odd");
}
 */


//--------------------------------------Q7--------------------------------



/* var char = window.prompt("Enter Your Char :- ");

if( char == "a" ||  char == "e" ||  char == "i" || char== "o" ||  char == "u"){

    console.log("Vowel");

}else{

    console.log("Constant");
} */


//--------------------------------------Q8--------------------------------



/*  var num = window.prompt("Enter Your Number");

for(var i = 1 ; i<=num ; i++){
    console.log(i);
}  */



//--------------------------------------Q9--------------------------------


/* var num = window.prompt("Enter Your Nmuber");

var max = 12 ;

for(var i=1 ; i<=max  ; i++  ){
     result = i*num ;
     console.log(result);
} */


//--------------------------------------Q10--------------------------------


/* var num = Number(window.prompt("Enter Your Number") ) ;

for(i=1 ; i<num ; i++){
    if(i%2==0){
        console.log(i);
    }
} */

//--------------------------------------Q11--------------------------------

/* var num1=  Number( window.prompt("Enter Your Number 1:-")); 
  
var num2 =  Number( window.prompt("Enter Your Number 2:-"));
  
var num = 1; 

for (var i = 0 ; i < num2 ; ++i) { 
    num = num * num1 ; 
}  
console.log(num); */


//--------------------------------------Q12--------------------------------

/* var num1 = Number( window.prompt("student 1 mark :-") ) ;
var num2 = Number( window.prompt("student 2 mark :-") ) ;
var num3 = Number( window.prompt("student 3 mark :-") ) ;
var num4 = Number( window.prompt("student 4 mark :-") ) ;
var num5 = Number( window.prompt("student 5 mark :-") ) ;

total = num1+num2+num3+num4+num5;
avg = total/5;
percentage = (total / 500)*100 ;

console.log("Total Marks is",total);
console.log("Total Avarage is",avg);
console.log("Total Percentage is", percentage); */

//--------------------------------------Q13--------------------------------


 /* var month = Number( window.prompt("Enter Month Number :-") );

 if ( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 ||month == 10 || month == 12 ){

    console.log("Days in Month: 31");

 }else if ( month == 4 || month == 6 || month == 9 || month == 11 ){

    console.log("Days in Month: 30");
 }else if ( month ==2 ){

    console.log("Days in Month: 28");
 }else{
    console.log(" Valid ! Number ");
 } */


//--------------------------------------Q14--------------------------------

/* var subject1 = Number( window.prompt("Enter Physics Grade :-") );
var subject2 = Number( window.prompt("Enter Chemistry Grade :-") );
var subject3 = Number( window.prompt("Enter Biology Grade :-") );
var subject4 = Number(  window.prompt("Enter Mathematics Grade :-") );
var subject5 = Number( window.prompt("Enter Computer Grade :-") );

total = subject1 + subject2 + subject3 + subject4 + subject5 ;
 percentage = (total / 500)*100 ;

 if( percentage >= 90 ){

    console.log(" Grade A");

}else if ( percentage >= 80 ){

    console.log(" Grade B");

}else if ( percentage >= 70 ){

    console.log(" Grade C");

}else if ( percentage >= 60 ){

    console.log(" Grade D");

}else if ( percentage >= 40 ){

    console.log(" Grade E");
    
}else if ( percentage < 40){

    console.log("Grade F");
}else{
    console.log("Valid Percentage ");
}  */

//--------------------------------------Q15--------------------------------


/* switch (month){

    case 1:
        console.log(" Days in Month: 31 ");
        break ;
    case 3:
        console.log(" Days in Month: 31 ");
        break ;
    case 5:
        console.log(" Days in Month: 31 ");
        break ;
    case 7:
        console.log(" Days in Month: 31 ");
        break ;
    case 8:
        console.log(" Days in Month: 31 ");
        break ;
    case 10:
        console.log(" Days in Month: 31 ");
        break ;
    case 12:
        console.log(" Days in Month: 31 ");
        break ;
    case 4:
        console.log(" Days in Month: 30 ");
        break ;
    case 6:
        console.log(" Days in Month: 30 ");
        break ;
     case 9:
        console.log(" Days in Month: 30 ");
        break ;
    case 11:
        console.log(" Days in Month: 30 ");
        break ;
    case 2:
        console.log(" Days in Month: 28 ");
        break ;

    default:
        console.log("Valid Number");
} */


//--------------------------------------Q16--------------------------------


/* var char = window.prompt("Enter Your Character :-");

switch (char){
    case "a":
        console.log("Vowel Character");
    break ;
    case "e":
        console.log("Vowel Character");
    break ;
    case "o":
        console.log("Vowel Character");
    break ;
    case "i":
        console.log("Vowel Character");
    break ;
    case "u":
        console.log("Vowel Character");
    break ;
    
    default :
        console.log("Constant Character");
} */


//--------------------------------------Q17--------------------------------


/* var num1 = Number( window.prompt("Enter First Nmmber :-"));
var num2 = Number( window.prompt("Enter Second Nmmber :-"));

switch( num1 > num2){
    case true :
        console.log("The Largest Number Is =" ,num1 );
        break;
    case false :
        console.log("The Largest Number Is =" , num2);
        break ;
} */


//--------------------------------------Q18--------------------------------


/* var num = Number( window.prompt("Enter Your Number :-"));

switch (num % 2 == 0){
    case true :
        console.log("This Number Is Even");
        break;
    case false :
        console.log("This Number IS Odd");
        break;
} */


//--------------------------------------Q19--------------------------------

/* 
var num = Number( window.prompt("Enter Your Number :-"));

switch (num > 0){

    case true :
        console.log("This Number Is Postitive");
        break;

   case false :
    switch ( num < 0 ){
        case true :
            console.log("This Number Is negative");
            break;
        case false :
            console.log("Number Equal Zero");
            break;
    }
    break ;
} */


//--------------------------------------Q20--------------------------------

/* var num1 = Number( window.prompt("Enter First Number") );
var op = window.prompt("Enter Your Operator ");
var num2 = Number( window.prompt( "Enter Second Number" ) );


switch( op ){
    case "+":
        console.log( num1 + num2 );
         break;
    case "-":
        console.log( num1 - num2 );
        break;
    case "*" :
        console.log( num1 * num2 );
        break;
    case "/" :
        console.log(num1 / num2);
        break;
    case "%":
        console.log( num1 % num2);
        break;
    default:
        console.log("Error! operator is not correct");
} */