var tomb = [];
let i = 0;
do
{
    let input = parseInt(prompt("Adj meg 1 számot (1-100)!"));
    if (1 <= input && input <= 50) 
        {
            tomb.push(input)
            i = i+1;
        }
    else if (!(1<= input && input <=100)) 
        {
            alert("Nem 1 és 100 közötti számod adtál");
            i = i-1;
        }
    
}while (!(i>=10))
    console.log(i)
    console.log(tomb)
