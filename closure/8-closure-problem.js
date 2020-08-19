for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*300 );
}

// 1.
// for (var i=1; i<=5; i++) {
//     (function(){
//         setTimeout( function timer(){
//             console.log( i );
//         }, i*300 );
//     })();
// }

// 2.
// for (var i=1; i<=5; i++) {
//     (function(){
//         var j = i;
//         setTimeout( function timer(){
//             console.log( j );
//         }, j*300 );
//     })();
// }

// 3.
// for (var i=1; i<=5; i++) {
//     let j = i; // yay, block-scope for closure!
//     setTimeout( function timer(){
//         console.log( j );
//     }, j*1000 );
// }

// 4.
// for (let i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
// }