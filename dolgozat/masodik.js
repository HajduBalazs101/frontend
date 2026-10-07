let tomb = []
for(i = 100; i <= 200; i++)
{
        tomb.push(i);
}
console.log(tomb)
let res = tomb.filter(checkoszthato)
console.log("result:")
console.log(res)
function checkoszthato(oszto) {
  return oszto % 4 == 0;
}