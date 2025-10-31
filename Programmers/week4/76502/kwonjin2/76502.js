function solution(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) count++;
        s = s.slice(1) + s[0];
    }
    
    return count;
}

const isValid = (s) => {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };
    
    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            if (pairs[stack.pop()] !== c) return false;
        }
    }
    
    return stack.length === 0;
}
