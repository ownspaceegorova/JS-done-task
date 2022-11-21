//Проверка ляется ли введенное значение числом
let a;
a = prompt('please put a number');
b=++a;
console.log(typeof b);
if (b=Number) {
    console.log ('Right,you put a number')
}
else if(b != Number) {
    console.log ('You are wrong. It is not a number, try again')
}

else if(b = NaN) {
    console.log ('You are wrong. It is not a number, try again')
}

if (b % 2 == 0) {
    console.log ('Number is even')
}

else {
    console.log('Number is odd')
}