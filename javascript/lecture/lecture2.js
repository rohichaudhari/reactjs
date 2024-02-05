// global variable
var b=40;
{
    var b=30;
}
{
    var c=40;
}
console.log(b);
console.log(typeof(b));
    
// declaration let
let d="hello"
let e="hi"
e='hiii'
console.log(d);
{
    let d='hellooo'
    console.log(d);
}
// declaration constant
{
     const f=20;
     console.log(f);
}
const f=90;
console.log(f);
// string with quotes
let str1="Rohi'ni"
let str2='rohin"i'
let str3="ro\"hini"
let str4='rohin\'i'
let str5='roh\nini'
let str6='roh\t\tini'
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);