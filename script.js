/* This is window object alert Method
The alert() method displays an alert box with a message and an OK button.*/
window.alert("This is JavaScript");

//varaiable and arthimetic operators
let num1=25;
let num2=15;
// arthimetic operators +,-,*,/,%,**
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);
// assignments op  = , += , -= , *=, /= %= **=
let a=15;
let b=55;
console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
let c=25;
let d=3
console.log(c%=d);
console.log(c**=d);

// comparsion op  == === != > < >= <= 
let n=35;
const ans=36;
console.log(n==ans);
console.log(n===ans);
console.log(n!=ans);
console.log(n>ans);
console.log(n<ans);
console.log(n>=ans);
console.log(n<=ans);

//STRING METHODS
let fname="Jimin";
let lname="park";
console.log(fname.length);
console.log(fname.slice(2,5));
let answer="Hello! How are You";
a=answer.slice(0,5);
b=answer.slice(9,10);
c=answer.slice(15);
console.log(a);
console.log(b);
console.log(c);
console.log(answer.substring(6));
console.log(answer.substring(2,9)));
let string="How are You";
newString=string.replaceAll("You","doing");
console.log(newString);
let char="welcome for class"
blue=char.replace("for","to");
console.log(blue);
console.log(answer.toUpperCase());
console.log(answer.toLowerCase());
console.log(fname.concat(lname));
const pink="  How may I help You   ";
console.log(pink.trim());
