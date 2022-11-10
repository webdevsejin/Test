function func(x,y) { //함수
        return x+y;
}

let func2 = function(x,y) { //함수 표현식
        return x+y;
}

let func3 = (x,y) => x+y //화살표 함수

let func4 = (x,y) => { return x+y; }//화살표 함수

let func5 = (x,y) => {
    let sum = x+y;
    return sum;
}

let sum = func3(10,20);
console.log(sum);

function func6(f) {
        f();
}

func6(function(){
        console.log("Hi!");
})

func6(()=>{
        console.log("Hello!");
})

let func7 = name => {console.log();}
func7("James"); 