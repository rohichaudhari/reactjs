//calculate factorial of a number using while loop
{
    const num=5;
    let fact=1;
    var i=1;
    while(i<=num)
    {
        fact=fact*i;
        i++;
    }
    document.write("factorial value is:"+fact+"<br>");
}
//calculate factorial of a number using for loop
document.write("for loop"+"<br>")
{
    const num=5;
    let fact=1;
    var i=1;
    {
        for(i=1;i<=num;i++)
        {
            fact=fact*i;
        }
        document.write("factorial value is:"+fact+"<br>"); 
    }
}
//calculate factorial of a number using do..while loop
document.write("do..while loop"+"<br>")
{
    const num=5;
    let fact=1;
    var i=1;
    {
        do{
            fact=fact*i;
            document.write("factorial value is:"+fact+"<br>");
            i++;
        }
        while(i<=num)
    }  
}

            