//Old style: loops

const color = ['yellow', 'blue', 'red', 'orange'];

let i = 0
while (i < color.length) {
  console.log(color[i]);
  i++
}

console.log('All colors are done');


//New style: array methods

for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}
console.log('New version is also done');

//1. for loop 3, while loop 4
//2. Don't know, i think 2
//3. No continues loop, easy to read, save time
//4. 

