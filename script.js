var arry=[2,4,6,8,10];

let arrmap = arry.map(function(currentItem, index, array){
    console.log(`currentItem is ${currentItem}`);
return currentItem*2;

})


function functionabc(){
console.log('clicking is working');
}

let btn = document.querySelector("button")
if(btn){

    btn.addEventListener("click", functionabc)
}

