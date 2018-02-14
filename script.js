function debounce(fn,delay) {
    
    let timer = null;
    return function(){
        let context = this;
        let args = arguments;
        console.log(arguments.length);
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,args)
        },delay);
    }
}

function foo() {
    console.log('You are scrolling');
}

let elem = document.getElementById('container');
elem.addEventListener('scroll',debounce(foo,2000));















// const arr = [10,12,15,21];

// for(let i=0;i<arr.length;i++) {
//     setTimeout(function(){
//         console.log('The index of this number is:' + i);
//     },3000)
// }

// for (var i =0 ; i < arr.length;i++) {
//     setTimeout(function(i_local){
//         return function() {
//             console.log('THe index of this number is :' + i_local);
//         }
//     }(i),3000);
// }