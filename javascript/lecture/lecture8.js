//tostring()
{
    let number=155;
    console.log(number);
    console.log(typeof(number));

    let number1=number.toString()
    console.log(number1);
    console.log(typeof(number1))

    let number2=(155+89).toString();
    console.log(number2)
    console.log(typeof(number2))

    let number3=(155.25).toString()
    console.log(number3)
    console.log(typeof(number3))
}
//toExponential()
{
    let Enumber=1555000;
    console.log(Enumber);

    let Enumber1=Enumber.toExponential()
    console.log(Enumber1);

    let Enumber2=Enumber.toExponential(1);
    console.log(Enumber2);

    let Enumber3=Enumber.toExponential(2);
    console.log(Enumber3);

    let Enumber4=Enumber.toExponential(3);
    console.log(Enumber4);

    let Enumber5=Enumber.toExponential(4);
    console.log(Enumber5);
}
//toFixed()
{
    let Fnumber=1255.2355;
    console.log(Fnumber);

    let Fnumber1=Fnumber.toFixed();
    console.log(Fnumber1);
    console.log(typeof(Fnumber))
    console.log(typeof(Fnumber1))
}
//toPrecision()
{
    let Pnumber=1.566987
    console.log(Pnumber);

    let Pnumber1=Pnumber.toPrecision(3)
    console.log(Pnumber1);
    console.log(typeof(Pnumber1))

    let Pnumber2=Pnumber.toPrecision(2)
    console.log(Pnumber2);
    console.log(typeof(Pnumber2))

    let Pnumber3=Pnumber.toPrecision(8)
    console.log(Pnumber3);
    console.log(typeof(Pnumber3))
}
//ValueOf()
{
    let Vnumber=156465;
    console.log(Vnumber);

    let Vnumber1=Vnumber.valueOf();
    console.log(Vnumber1)
    console.log(typeof(Vnumber1));

    let Vnumber2=(12-5).valueOf();
    console.log(Vnumber2);
}
//Math.sin()
{
    let math1=Math.sin(30*3.14/180)
    console.log(math1)

    let math2=Math.sin(90*3.14/180)
    console.log(math2)

    let math3=Math.sin(45*3.14/180)
    console.log(math3)
}
//Math.cos()
{
    let math4=Math.cos(0*3.14/180)
    console.log(math4);

    let math5=Math.cos(30*3.14/180)
    console.log(math5);

    let math6=Math.cos(90*3.14/180)
    console.log(math6);
}
//Math.log()
{
    let math7=Math.log(155.55)
    console.log(math7);

    let math8=Math.log(1877)
    console.log(math8);

    let math9=Math.log(1077.458)
    console.log(math9)
}
//Math.log2()
{
    let math10=Math.log2(155.55)
    console.log(math10);
}
//Math.log10()
{
    let math11=Math.log10(155.55)
    console.log(math11);
}