//let arr = new Array();
let arr = [];
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
console.log(arr.length);
console.log(arr);

arr[2] = 100;
console.log(arr[2]);
let v = arr.pop();
console.log(v);
console.log(arr);
let s = arr.shift();
console.log(s);
console.log(arr);

arr.unshift(200);
console.log(arr);
console.log(arr.toString());

let farr = [100,200,300,400,500];
let tot = 0;
for(let idx in farr) {
        tot += farr[idx];
}
console.log(tot);

tot = 0;
for(let n of farr){
    tot += n;
}
console.log(tot);

farr.splice(1,1,600,700); //1번째부터 1개 제거하고 그 자리에 600,700 삽입
console.log(farr);

farr.splice(-1,1); //맨 뒤 1개 제거
console.log(farr);

let narr = [1,2,3,4,5];
let subarr = narr.slice(1,3); //1번째에서 3-1번째까지 부분 배열을 리턴
console.log(subarr);
console.log(narr);

let arr1 = ['A','B','C'];
let arr2 = ['D','E','F'];
let totarr = [...arr1,...arr2];
console.log(totarr);

let totarr2 = arr1.concat(arr2);
console.log(totarr2)

let varr = [11,22,33,44,55];
arr.forEach(function(item, index, Array) {
        console.log(`item:${item},idx:${index}`);
});

let uarr = [
    {name:"hong", age:20},
    {name:"song", age:30},
    {name:"kong", age:40},
    {name:"song", age:50},
];

let suser = uarr.find(item => item.name=="song");

console.log(suser);


let auserarr = uarr.filter(item => item.age>="30");

console.log(auserarr);