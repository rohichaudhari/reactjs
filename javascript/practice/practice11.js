//skip printing odd number using a for loop and continue statement
{
    //  for(let i=1;i<=10;i++)
    //  {
    //     // document.write(i+"<br>")
    //     if(i%2==0){
    //         continue;
    //     }

    //     document.write(i+"<br>")
    //  }
}
//skip multiplies of 3 using a for loop and continues statement
{
    // for(let i=1;i<=20;i++)
    // {
    //     if(i%3==0){
    //         continue;
    //     }
    //     document.write(i+"<br>")
    // }
}
//print even number in specific range using a for loop and continues statement
{
    // for(let i=1;i<=20;i++)
    // {
    //     if(i%2!==0){
    //         continue;
    //     }
    //     document.write(i+"<br>")
    // }
}
//skip number divisible by using a do..while loop and continue statement
{
    let i = 1;
    {
        do {
            if (i % 5 === 0) {
                i++;
                continue;
            }
            document.write(i+"<br>");
            i++;
        } while (i <= 20);
    }
}
