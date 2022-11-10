//객체의 속성으로는 변수에 올수 있는 모든 타입이 가능
let person = {
    age:10, //number
    name:'hong', //string
    married:false, //boolean
    score:[90,80,70], //array
    parent:{mother:'park', father:'song'}, //object
    info : function(){//funtion
        console.log('...');
    }
}


let u1 = {name:"John"};
let u2 = u1; //shallow copy(얕은 복사)
u1.name = "Song";
console.log(u2.name);

let u3 = {}
for(let key in u1) {  //deep copy(깊은 복사)
 u3[key] = u1[key];
}


let u4 = {};
Object.assign(u4,u1); //deep copy
u1.name = 'hong';
console.log(u1);
console.log(u2);
console.log(u3);

let mobj = {};
Object.assign(mobj,u1,{age:30});
console.log(mobj);