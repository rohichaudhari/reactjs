// sum of number from 1 to 10 using a while loop
{
    let i=1; 
    total=0;
    {
        while(i<=10)
        {
            document.write(i+"<br>");
            total=total+i
            i++;
        }
        document.write("total:"+total+"<br>");
    }
}
// sum of number from 1 to 10 using a for loop
document.write("for loop"+"<br>")
{
    let i=1;
    total=0;
    {
        for(i=1;i<=10;i++)
        {
            document.write(i+"<br>")
            total=total+i
        }
        document.write("total:"+total+"<br>");
    }
}
// sum of number from 1 to 10 using a do..while loop
document.write("do..while loop"+"<br>")
{
    let i=1;
    {
        do
        {
            document.write(i+"<br>")
            // total=total+i;
            i++
        }
        while(i<=10)
    }
    // document.write("total:"+total+"<br>");
}