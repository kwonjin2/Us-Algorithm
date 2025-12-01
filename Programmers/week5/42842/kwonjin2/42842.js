function solution(brown, yellow) {
    const total = brown + yellow;
    const divi = getDivisors(total);
    
   for (let i = 0; i < divi.length; i++) {
       const height = divi[i];
       const width = total / height;
       
       if ((width - 2) * (height - 2) === yellow) {
           return [width, height];
       }
   }
}

const getDivisors = (n) => {
    const divisors = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisors.push(i);
    }
    
    return divisors;
}
