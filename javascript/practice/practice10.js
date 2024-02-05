//print a pattern using while loop
{
    // let i;
    // let j;
    // for(i = 1; i<=5; i++)
    // {
    //     for(j = 1; j <= i; j++)
    //     {
    //         document.write("*");
    //     }
    //     document.write("<br>")
    // }
}
{
    let i =1;
    
    while(i<=5)
    {
        let j =1;
        while(j<=i)
        {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i++;
    }
}

