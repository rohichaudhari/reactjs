// calculate the power of a number using a while loop
{
    let exponent=1;
    let base=4;
    {
       for(exponent=1;exponent<=10;exponent++)
       {
         result=exponent**base;
         document.write(result+"<br>")
       }
    }
}
// calculate the power of a number using a for loop
document.write("for loop"+"<br>")
{
  let exponent=1;
  let base=4;
  {
    while(exponent<=10)
    {
      result=exponent**base;
      document.write(result+"<br>")
      exponent++;
    }
  }
}
// calculate the power of a number using a while loop
document.write("while loop"+"<br>")
{
  let exponent=1;
  let base=4;
  {
    do
    {
      result=exponent**base;
      document.write(result+"<br>")
      exponent++;
    }
    while(exponent<=10)
  }
}