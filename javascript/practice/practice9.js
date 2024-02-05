//search for a specific number using a for loop and break statement
{
    for(let i=0;i<=10;i++)
    {
        if(i==9){
            break;
        }
        document.write(i+"<br>")
    }
}
//loop with a conditional break statement based on user inputs
document.write("for loop"+"<br>")
{
    for(let i=0;i<=10;i++)
    {
        if(i==5){
            break;
        }
        document.write(i+"<br>")
    }
}
//check if a number is prime using a for loop and break statement
{
    num=13;
    for(let i=2;i<=num;i++)
    {
        if(num%i==0)
        {
            result=`${num} number is not prime`;
        }
        else{
            result=`${num} number is prime`;
        }
    }
    console.log(result);
}

// find the first oddnumber in a sequences using a while loop and break statement
// {
//     for(let i=8;i<=10;i++)
//     {
//         if(i%2!==0){
//             document.write(i);
//             break;
//         }
//     }
// }
{
    let i=0;
    while(i<=10)
    {
        if(i%2!=0)
        {
            
            document.write(i);
            break;
        }
        i++;
    }
            
}
 
   