// const n = 5
// let a = "";
// for (let i = 0; i < n; i++) {
//     a += '*';
//     console.log(a);
// }

// let n = 7
// a = 0
// b = 1
// let c;
// let str = ' '
// for (let i = 0; i < n; i++) {
//     // for (let j = 0; j < n-i; j++) {
//     //     str+= " "
//     // }   
//     for (let k = 0; k < i; k++) {
//         // str+= count;
//          c = a+b
//          str+= c + ' ';
//          a=b;
//         b=c;

//     }
//     str += '\n'
// }
// console.log(str);



// let n = 5
// str = ''
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <n-i; j++) {
//         str+=' '
//     }
//     for (let k = 0; k < 2*i-1; k++) {
//         str+= k +1       
//     }
//     str+='\n'
// }
// console.log(str);


// let n = 5
// str = ''
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <n-i; j++) {
//         str+=' '
//     }
//     for (let k = 0; k < 2*i-1; k++) {
//         if(k===0 || k===2*i-2 || i===n){
//             str+= i         
//         }
//         else{
//             str+= ' '
//         }
//     }
//     str+='\n'
// }
// console.log(str);

//  const n = 5;

// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//         str += "*"; 
//         if(j==n){
//             break
//         }else{
//             str += "-";
//         }
       
//     }
//     console.log(str)
//     }

let n = 5
let a = 0 
let b = 1
str = ''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n-i; j++) {
        str+=' '
    }    
    for (let k = 0; k <= i; k++) {
        let c = a + b
        str+= ' ' +c
        a=b;
        b=c;
    }
    str+='\n'
}
console.log(str);
  