var i = 1;
var x = 999;

function outerFunc() {
    var x = i;

    var innerFunc = function() {
        console.log(x);
    };
    var modiX = function() {
        x = x + 1
    }

    return { innerFunc, modiX };
}

var a = outerFunc()
a.innerFunc()

var b = outerFunc()
b.innerFunc()

a.modiX()
a.innerFunc()

b.innerFunc()

a.newFunc = function () { 
    console.log(x); 
};
console.dir(a)

a.newFunc();


