/*
    객체 지향 코드 변경 공식
    1. 대문자로 생성자 함수 생성
    2. 1에서 만든 생성자 함수 안쪽에 기존의 전역 변수를 this 객체에 담아서 등록
    3. 함수 호출을 this를 붙여서 호출
    4. 선언적 함수들을 생성자.prototype에 등록
    5. 생성자 함수를 new 키워드로 인스턴스 생성

*/

// 1. 대문자로 생성자 함수 생성 - window 변수 그래도면 오염되기에 this로 묶을 예정
// function Tab() {
//     let frame = $('#tab1');
//     let btns = frame.find('ul li');
//     let boxs = frame.find('section article');
// }


// 2. 1에서 만든 생성자 함수 안쪽에 기존의 전역 변수를 this 객체에 담아서 등록
function Tab() {
    this.frame = $('#tab1');
    this.btns = this.frame.find('ul li');
    this.boxs = this.frame.find('section article');

    // 또는 index.html script문에 있는거 옮겨옴
    this.bindingEvent();
}


// 3. 함수 호출을 this를 붙여서 호출
// tab 생성자 prototype 공간에 bindingEvent 함수 등록
Tab.prototype.bindingEvent = function(){
    this.btns.on('click', function(e){
        let isOn = $(e.currentTarget).hasClass('on');
        if(isOn) return;
    
        let i = $(e.currentTarget).index();
        this.activation(i);
    }.bind(this)); //이벤트문 안쪽의 this값을 인스턴스로 고정
}


// Tab 생성자 prototype 공간에 activation 함수 생성
Tab.prototype.activation = function(index){
    this.btns.removeClass('on');
    this.btns.eq(index).addClass('on');

    this.boxs.removeClass('on');
    this.boxs.eq(index).addClass('on');
}

// 호출문을 맨 아래에 둬야 동작이 되네...?
// 외부 head안쪽에서 호출하는거래,,
// index.html script로 옮김
/* 
    let tab1 = new Tab();
    tab1.bindingEvent();
 */


// -------------------------------------------------
/*
--- 오리지날 함수 ---

let frame = $('#tab1');
let btns = frame.find('ul li');
let boxs = frame.find('section article');



bindingEvent();

function bindingEvent(){
    btns.on('click', function(e){
        let isOn = $(e.currentTarget).hasClass('on');
        if(isOn) return;
    
        let i = $(e.currentTarget).index();
        activation(i);
    })
}

function activation(index){
    btns.removeClass('on');
    btns.eq(index).addClass('on');

    boxs.removeClass('on');
    boxs.eq(index).addClass('on');
}

*/