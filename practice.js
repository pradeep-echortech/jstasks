let n = 4
count = 0
for (let i = 1; i < n; i++) {
    if (i % n == 0) {
        count++
    }
}
if (count > 2) {
    console.log('not a prime number');
} else {
    console.log('prime number');
}