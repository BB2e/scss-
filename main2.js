let frame = $('#tab1');
let btns = frame.find('ul li');
let boxs = frame.find('section article');

btns.on('click', function(e){
    let isOn = $(e.currentTarget).hasClass('on');
    if(isOn) return;

    let i = $(e.currentTarget).index();
    activation(i);
})

function activation(index){
    btns.removeClass('on');
    btns.eq(index).addClass('on');

    boxs.removeClass('on');
    boxs.eq(index).addClass('on');
}