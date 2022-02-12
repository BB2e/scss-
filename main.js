// 객체지향
//     - 선택자와 이벤트를 통채로 기능 단위로 패키징을 해서
//     해당 기능이 필요할때마다 복사 객체를 생성

//     객체 지향형 코드의 구조 
//     - 멤버 변수 + 메서드
//     - 멤버 변수? 특정 기능 전용으로 쓰이는 변수값들
//     - 메서드? 특정 기능 전용으로 쓰이는 함수들
//     - 특정 기능을 활성화시켜야 할때마다 손쉽게 해당 기능을 복사하기 위한 시스템적인 틀

//     생성자함수 ( constructor ) - 붕어빵 틀
//     : 특정 기능을 복사하기 위한 특별한 함수, 인스턴스를 생성하는 함수

//     인스턴스 (instance )
//     : 생성자 함수를 통해서 실제로 복사가 되는 결과물 (객체 형태로 반환)

//     프로토타입 (prototype)
//     : 생성자 함수를 생성시 자동으로 만들어지는 공통의 저장공간
//     : 같은 생성자 함수를 통해서 만들어진 인스턴스를 해당 생성자의 프로토타입 공간을 공유
    
//     생성자 함수 안쪽의 this값 -> 해당 생성자를 통해서 앞으로 복사가 될 인스턴스 객체를 지칭
    
//     * 생성자 안쪽의 this 값이 다른 값을 지칭하는 상황
//     1. 이벤트문 안쪽에서의 this - 이벤트가 발생한 대상을 지칭
//     2. each문 안쪽에서의 this - 현재 반복을 돌고 있는 각 대상을 지칭
//     3. $.ajax문 안에서의 this - 해당 메서드를 통해서 비동기식으로 전달받은 데이터를 지칭
//     4. setTimeOut 안에서의 this - window 객체를 지칭

//     1~4의 경우에 안쪽의 this를 원하는 값으로 고정하는 방법
//     - 해당 this 값을 감싸는 함수에 .bind(고정할값) 해주면 된데
/*
    생성자 함수- es5
 */

// 대문자로 시작하는 함수 - 생성자함수
// 인수로 문자열을 받아서 제이쿼리 선택자로 변환한 다음에
// 이벤트 바인딩까지 연결된 구문을 인스턴스로 내보내는 생성자 함수
function Box(el) {
    this.selector = $(el); //외부로 부터 받은 parameter를 
                           // jquery로 dom 선택해서 this.selector에 배정
    // this는 객체라서 .으로 key값(selector)을 지정 가능

    // this는 복사되는 수많은 instance(객체 box1, box2)들을 지칭한다

    this.selector.on('click', function(){
        this.changeBg(this.selector);
        // console.log(this);
        // 이벤트문 안쪽에있는 this는 이벤트의 주체를 지칭
        // 바깥의 객체를 그대로 지칭하게 하려면?
        //.bind로 this값을 고정한다.
    }.bind(this))


}

Box.prototype.changeBg = function(el){
    el.css({
        backgroundColor: 'hotpink'
    });
}

// 해당 생성자 함수로 부터 원하는 선택자의 문자열만 집어넣으면
// 자동으로 해당 요소에 이벤트까지 연결된 기능이 활성화
let box1 = new Box('.box1');
// box1이 instance

console.log(box1);

let box2 = new Box('.box2');

console.log(box2)