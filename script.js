var arry=[2,4,6,8,10];

let arrmap = arry.map(function(currentItem, index, array){
    console.log(`currentItem is ${currentItem}`);
return currentItem*2;

})


console.log(arrmap);
console.log(arry);



var arrsort  = [2,20,40,54,80,100,42,23];
var pointsort = arrsort.sort(function(a,b){
return a-b;
})

console.log(pointsort)