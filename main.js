let box1 = $('.box1');
let box2 = $('.box2');

box1.on('click', function(e){
    console.log(box1);
})

box2.on('click', function(){
    changeBg(box2);
})

function changeBg(el){
    el.css({
        backgroundColor: 'hotpink',
    })
}