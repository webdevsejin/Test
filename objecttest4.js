function User(name) {
        this.name = name;
        this.isAdmin = false;

        this.info = function () {
            console.log(`name:${this.name},isAdmin:${this.isAdmin}`);

        }
}

let user1 = new User("Hong");
//console.log(user1.name);
//console.log(user1.isAdmin);
user1.info();

let  user2 = new User("Song");
//console.log(user2.name);
//console.log(user2.isAdmin);
user2.info();

let s = '10';
let n1 = Number(s);
let n2 = +s;
console.log(typeof n1);
console.log(typeof n2);

let value1 = '10';
let value2 = '20';
let res = +value1 + +value2;
console.log(res);