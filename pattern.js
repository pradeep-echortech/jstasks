// 1

function s1(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
     str+='*'
     console.log(str);
}
}

// 2

function s2(num) {
    let n = num 
str =''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        str+='*'
    }    
    str+='\n'
}
return str
}

// 3

function s3(num) {
    let n = num 
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '        
    }
    for (let j = 0; j < i; j++) {
        str+='*'
    }    
    str+='\n'
}
return str
}

// 4

function s4(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str += ' '
    }
    for (let j = 0; j < n-i; j++) {
        str += '*'
    }
    str += '\n'
}
return str
}

// 5

function s5(num) {
    let n=num
str=''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n-i; j++) {
        str+=' '        
    }    
    for (let k = 0; k < i; k++) {
         str+='*'
         if(k==i-1){
            break
         }else{
            str+=' '
         }
    }
    str+='\n'
}
return str
}

// 6

function s6(num) {
    let n = num
str=''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str+=' '
    } 
    for (let k = 0; k < n-i; k++) {
        str+='*'
        if(k==n-i-1){
            break
        }else{
            str+=' '
        }
    }   
    str+='\n'
}
return str
}

// 7 

function s7(num) {
    let n = num 
str =''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        str+='*'
    }    
    str+='\n'
}
return str
}

// 8

function s8(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str += '*'
    }
    str += '\n'
}
for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
        str += '*'
    }
    str += '\n'
}
return str
}

// 9 

function s9(num) {
    
let n = 5
str = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        str+=' '
    }
    for (let k = 0; k < i; k++) {
        str+='*'
        if(k==i-1){
            break
        }else{
            str+=' '
        }
    }
    str+='\n'
}
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += ' '
    }
    for (let k = 0; k < n - i; k++) {
        str += '*'
        if(k==n-i-1){
            break
        }else{
            str+=' '
        }
    }
    str += '\n'
}
return str
}

// 10

function s10(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        if(j===0 || j=== 2*i-2){
            str+='*'
        }else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// 11

function s11(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        str+='*'
    }
    str+='\n'
}
return str
}

//12

function s12(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*(n-i)-1; j++) {
        str+='*'
    }
    str+='\n'
}
return str
}

// 13

function s13(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < i; j++) {
        str+='*'
    }
    str+='\n'
}
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        str += ' '
    }
    for (let j = 0; j < n-i; j++) {
        str += '*'
    }
    str+='\n'
}
return str
}

// 14

function s14(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*(n-i)-1; j++) {
        if(j===0 || j===2*(n-i)-2){
            str+='*'
        }
        else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// 15

function s15(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        if(j==0 || j==2*i-2){
            str+='*'
        }else{
            str+= ' '
        }
    }
    str+='\n'
}
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        str += ' '
    }
    for (let j = 0; j <= 2*(n-i)-1; j++) {
        if(j==0 || j==2*(n-i)-2){
            str += '*'
        }else{
            str += ' '
        }
    }
    str+='\n'
}
return str
}

// 16

function s16(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+='*'
    }
    for (let j = 0; j < 2*i-1; j++) {
        str+=' '
    }
    for (let k = 0; k < n-i; k++) {
        if(k==n-1){
            break
        }else{
            str+= '*'
        }
    }
    str+='\n'
}
return str
}

// 17

function s17(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        if(k==n-1){
            break
        }else{
            str+='*'
        }
    }
    for (let j = 1; j <= 2*(n-i)-1; j++) {
        str+=' '
    }
    for (let l = 0; l < i; l++) {
        str+= '*'
    }
    str+='\n'
}
return str
}

// 18

function s18(num) {
    let n = num
str =''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        str+='*'
    }
    for (let k = 0; k < i; k++) {
        str+= ' '
    }
    str+='\n'
}
for (let i = 1; i < n; i++) {
    for (let l = 0; l < i+1; l++) {
        str+='*'
    }
    str+='\n'
}
return str
}

// 19

function s19(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
        str += ' '
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
        if(j==0 || j==2*(n-i)-2){
            str += '*'
        }else{
            str += ' '
        }
    }
    str += '\n'
}
for (i = 2; i <= n; i++) {
    for (let k = 0; k < n - i; k++) {
        str += ' '
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        if(j==0 || j==2*i-2){
            str += '*'
        }else{
            str+= ' '
        }
    }
    str += '\n'
}
return str
}


// 20

function s20(num) {
    
let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if(i==0 || j==0 || i==n || j==i-1){
            str+='*'
        }
        else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// 21

function s21(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n; j++) {
        if(i==0 || j==0 || i==n || j==n-1){
            str+='*'
        }
        else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// 22

function s22(num) {
    let n = num
str =''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if(j==n-2){
            break
        }else{
            str+='*'
        }
    }
    for (let k = 2; k < 2*(n-i)-1; k++) {
        str+= ' '
    }
    for (let l = 0; l < i; l++) {
        str+='*'
    }
    str+='\n'
}
for (let i = 2; i < n; i++) {
    for (let l = 0; l < n-i; l++) {
        str+='*'
    }
    for (let j = 2; j < 2*i-1; j++) {
        str+=' '
    }
    for (let k = 0; k < n-i; k++) {
        
        str+='*'
    }
    str+='\n'
}
return str
}


// N1

function n1(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        str+= i+1
    }
    str+='\n'
}
return str
}

// N2

function n2(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        str+= j+1
    }
    str+='\n'
}
return str
}

// N3

function n3(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        str+= n-i
    }
    str+='\n'
}
return str
}

// N4

function n4(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        str+= n-j
    }
    str+='\n'
}
return str
}

// N5

function n5(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str+= i
    }
    str+='\n'
}
return str
}

// N6

function n6(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str+= j+1
    }
    str+='\n'
}
return str
}

// N7

function n7(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n-i; j++) {
        str+= i+1
    }
    str+='\n'
}
return str
}

// N8

function n8(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str+=' '
    }
    for (let j = 0; j < n-i; j++) {
        str+= j+1
    }
    str+='\n'
}
return str
}

// N9

function n9(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        str+= i
    }
    str+='\n'
}
return str
}

// N10

function n10(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        str+= 2*i-1
    }
    str+='\n'
}
return str
}

// N11

function n11(num) {
    
let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        str+= j+1
    }
    str+='\n'
}
return str
}

// N12

function n12(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 2*i-1; j > 0 ; j--) {
        str+= j
    }
    str+='\n'
}
return str
}

// N13

function n13(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < i; j++) {
        str+=i
        if(j==i-1){
            break
        }else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// N14

function n14(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str+=' '
    }
    for (let j = 0; j < n-i; j++) {
        str+= n-i
        if(j==n-i-1){
            break
        }else{
            str +=' ';
        }
    }
    str+='\n'
}
return str
}

// N15

function n15(num) {
    
let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < i; j++) {
        str+=i
        if(j==i-1){
            break
        }else{
            str+=' '
        }
    }
    str+='\n'
}
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        str+=' '        
    }    
    for (let k = 0; k < n-i; k++) {
        str+= n-i 
        if(k==n-i-1){
            break
        }else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// N16

function n16(num) {
    
let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        if(j==0 || j==2*i-2){
            str+= i
        }else{
            str+= ' '
        }
    }
    str+='\n'
}
return str
}

// N17

function n17(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*(n-i)-1; j++) {
        if(j==0 || j==2*(n-i)-2){
            str+= n-i
        }else{
            str+= ' '
        }
    }
    str+='\n'
}
return str
}

// N18

function n18(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i ; j++) {
        str+= n-j

    }
    str+='\n'
}
for (let i = 0; i < n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+= n-k
    }
    str+='\n'
}
return str
}

// N19

function n19(num) {
    let n = num
str = ''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j= i; j >= 0 ; j--) {
        str+= n-j
    }
    str+='\n'
}
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        str+=' '
    }
    for (let k = n-i; k > 0 ; k--) {
        str+= n-k+1
    }
    str+='\n'
}
return str
}

// N20

function n20(num) {
    let n = num
str =''
for (let i = 0; i <= n; i++) {
    for (let k = 0; k < n-i; k++) {
        str+=' '
    }
    for (let j = 0; j < 2*i-1; j++) {
        if(j==0 || j==2*i-2){
            str+= i
        }else{
            str+= ' '
        }
    }
    str+='\n'
}
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        str += ' '
    }
    for (let j = 0; j <= 2*(n-i)-1; j++) {
        if(j==0 || j==2*(n-i)-2){
            str += n-i
        }else{
            str += ' '
        }
    }
    str+='\n'
}
return str
}

// N21

function n21(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
        str += ' '
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
        if(j==0 || j==2*(n-i)-2){
            str += i+1
        }else{
            str += ' '
        }
    }
    str += '\n'
}
for (i = 2; i <= n; i++) {
    for (let k = 0; k < n - i; k++) {
        str += ' '
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        if(j==0 || j==2*i-2){
            str += n+i
        }else{
            str+= ' '
        }
    }
    str += '\n'
}
return str
}

// N22

function n22(num) {
    let n = num
a = 0
b = 1
let c;
let str = ' '
for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
        c = a + b
        str += c + ' ';
        a = b;
        b = c;

    }
    str += '\n'
}
return str
}

// N23

function n23(num) {
    let n = num
str = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if(j==n-2){
            break
        }else{
            str+=j+1
        }
    }
    for (let k = 2; k < 2*(n-i)-1; k++) {
        str+=' '
    }
    for (let l = i; l > 0; l--) {
        str+=n-l+(n-2)
    }
    str+='\n'
}
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n-i; j++) {
        str+=j
    }
    for (let k = 0; k < 2*i-1; k++) {
        str+=' '
    }
    for (let l = n-i-1; l > 0; l--) {
        str+=n-l+(n-2)
    }
    str+='\n'
}
return str
}

// N24

function n24(num) {
    let n = num
str=''
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if(j==0 || j==i-1 || i==n){
            str+=i
        }else{
            str+=' '
        }
    }
    str+='\n'
}
return str
}

// N25

function n25(num) {
    let n = num
    str = ''
    count = 1
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += count + ' '
            count++
        }
        str += '\n'
    }
    return str
}

// a1

function a1(num) {
    let n = num
    str = ''
    count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += String.fromCharCode(j + 65)
        }
        str += '\n'
    }
    return str
}

// a2

function a2(num) {
    let n = num
    str = ''
    count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += String.fromCharCode(j + 65)
            if (j == n - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a3

function a3(num) {
    let n = num
    str = ''
    count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += String.fromCharCode(n - i + 64)
            if (j == n - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a4

function a4(num) {
    let n = num
    str = ''
    count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += String.fromCharCode(n - j + 64)
            if (j == n - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a5

function a5(num) {

    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += String.fromCharCode(i + 64)
            if (j == i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a6

function a6(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += String.fromCharCode(j + 65)
            if (j == i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a7

function a7(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += String.fromCharCode(n - i + 64)
            if (j == n - i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a8
function a8(num) {

    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += String.fromCharCode(j + 65)
            if (j == n - i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a9

function a9(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += String.fromCharCode(i + 65)
            if (j == n - i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a10
function a10(num) {

    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += String.fromCharCode(n - j + 64)
            if (j == n - i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a11

function a11(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let k = 0; k < n - i; k++) {
            str += ' '
        }
        for (let j = 0; j < i; j++) {
            str += String.fromCharCode(i + 64)

        }
        str += '\n'
    }
    return str
}

// a12

function a12(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let k = 0; k < n - i; k++) {
            str += ' '
        }
        for (let j = 0; j < i; j++) {
            str += String.fromCharCode(j + 65)

        }
        str += '\n'
    }
    return str
}

// a13

function a13(num) {
    let n = num
    str = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += ' '
        }
        for (let k = 0; k < n - i; k++) {
            str += String.fromCharCode(k + 65)
        }
        str += '\n'
    }
    return str
}

// a14

function a14(num) {
    let n = num
    str = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += ' '
        }
        for (let k = 0; k < n - i; k++) {
            str += String.fromCharCode(k + 65)
        }
        str += '\n'
    }
    return str
}

// a15

function a15(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += ' '
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            str += String.fromCharCode(i + 64)
        }
        str += '\n'
    }
    return str
}

// a16

function a16(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += ' '
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            str += String.fromCharCode(n - i + 64)
        }
        str += '\n'
    }
    return str
}

// a17

function a17(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let k = 0; k < i; k++) {
            str += String.fromCharCode(n - k + 64)
        }
        str += '\n'
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += String.fromCharCode(n - j + 64)
        }
        str += '\n'
    }
    return str
}

// a18

function a18(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += ' '
        }
        for (let k = i; k > 0 ; k--) {
            str += String.fromCharCode(n - k + 65)
        }
        str += '\n'
    }
    for (let i = 1; i < n; i++) {
        for (let k = 0; k < i; k++) {
            str += ' '
        }
        for (let j = n-i ; j > 0; j--) {
            str += String.fromCharCode(n - j + 65)
        }
        str += '\n'
    }
    return str
}

// a19

function a19(num) {
    let n = num
    str = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += ' '
        }
        for (let k = 0; k < i; k++) {
            str += String.fromCharCode(i + 64)
            if (k == i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += ' '
        }
        for (let k = 0; k < n - i; k++) {
            str += String.fromCharCode(n - i + 64)
            if (k == n - i - 1) {
                break
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

// a20

function a20(num) {

    let n = num
    str = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += ' '
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            if (k == 0 || k == 2 * (n - i) - 2) {
                str += String.fromCharCode(n - i + 64)
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}



