// multiplication program for a given number using while loop
document.write("while loop"+"<br>")
{
    const a=4;
    let b=1;
    {
        while(b<=10)
        {
            const result=b*a;
            document.write(`${b}*${a}=${result}`+"<br>");
            b++;
        }
    }
}
  // multiplication program for a given number using for loop      
  document.write("for loop"+"<br>")
  {
    const a=4;
    let b=1;
    {
        for(b=1;b<=10;b++)
        {
            const result=b*a;
            document.write(`${b}*${a}=${result}`+"<br>");
        }
    }
  }
    // multiplication program for a given number using for loop 
    document.write("do..while loop"+"<br>")
    {
        const a=4;
        let b=1;
        {
            do
            {
                const result=b*a;
                document.write(`${b}*${a}=${result}`+"<br>");
                b++;
            }
            while(b<=10)
        }

    }