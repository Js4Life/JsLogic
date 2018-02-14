document.addEventListener('DOMContentLoaded',function(){
    let app = document.getElementById('todo-app');
   // let items = app.getElementsByClassName('item');

    // for(let item of items) {
    //     item.addEventListener('click',function(){
    //         alert('You click on item :' + item.innerHTML);
    //     })
    // }
    app.addEventListener('click',function(e){
        if(e.target && e.target.nodeName === 'LI') {
            let item = e.target;
            alert('you clickedon item:'+ item.innerHTML);
        }
    })
})