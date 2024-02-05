//find largest two number
// {
//     let a=11;
//     let b=15;
//     if(a>b){
//         document.write("number is largest b")
//     }
//     else{
//         document.write("number is smallest a")
//     }
// }


//arithmatic operation in switch case
{
    
    let x,y,z, ch;


    
    ch = parseInt(prompt("Enter your choice:"))
    

    if (ch > 0 && ch < 6) {
      x = parseInt(prompt("Enter first number"))
      y = parseInt(prompt("Enter second number"))
    }

    switch (ch) {
      case 1:
      z= x + y;
      document.write("\nResult is :" + z)
      break

      case 2:
      z = x - y
      document.write("\nResult is :" + z)
      break

      case 3:
      z= x * y
      document.write("\nResult is :" + z)
      break

      case 4:
      z= x / y
      document.write("\nResult is :" + z)
      break

      case 5:
      z = x % y;
      document.write("\nResult is :" + z)
      break

      default:
      document.write("Invalid Choice:" + z)
    }


}


//find grade for input marks
// {
//     let math=76;
//     let che=88;
//     let phy=33;
//     let eng=56;
//     let comp=88;
//     let  total=math+che+phy+eng+comp;
//     let percentage=(total/500)*100;
//     document.write(total);
//     document.write(percentage);
//     if(percentage>=75){
//         document.write("grade A");
//     }
//     else if(percentage>=60)
//     {
//         document.write("grade B");
//     }
//     else if(percentage>=45)
//     {
//         document.write("grade C");
//     }
//     else if(percentage>=33)
//     {
//         document.write("pass")
//     }
//     else{
//         document.write("fail")
//     }
// }


 //sort three numbers       
// var x= 0;
// var y=-1;
// var z= 4;
// if (x>y && x>z)
// {
//         if (y>z)
//         {
//             console.log(y);
//         }
//         else
//         {
//             console.log(z);
//         }
// }
// else if (y>x && y >z)
// {
//         if (x>z)
//         {
//              console.log(x);
//         }
//         else
//         {
//              console.log(z);
//         }
// }
// else if (z>x && z>y)
// {
//         if (x>y)
//         {
//             console.log(x);
//         }
//         else
//         {
//             console.log(y);
//         }
// } 

//check if a number is odd or even 
{
    let a=13;
    if(a%2==0)
    {
        console.log("number is even")
    }
    else{
        console.log("number is odd")
    }
}