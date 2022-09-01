let array1Original = [1,2,3,4,5,6];
let array1Copia = [];
let array2Original = [1,2,3,4,5,6];
let array2Copia = [];
let array3Original = [1,2,3,4,5,6];
let array3Copia = [];

array1Copia=array1Original.slice()
array1Copia.push(7)
console.log(array1Original)
console.log(array1Copia)

console.log("*********************")

array2Copia=array2Original.slice()
array2Copia.pop()
console.log(array2Original)
console.log(array2Copia)

console.log("*********************")

array3Copia=array3Original.slice()
array3Copia.splice(1,1)
console.log(array3Original)
console.log(array3Copia)