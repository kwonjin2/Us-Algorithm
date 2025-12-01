function solution(n, words) {
    const set = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const prev = words[i - 1];
        const person = (i % n) + 1;
        const count = Math.floor(i / n) + 1;
        
        if (set.has(word)) {
            return [person, count];
        }
        
        if (i > 0 && prev[prev.length - 1] !== word[0]) {
            return [person, count];
        }
        
        set.add(word);
    }
    
    return [0, 0];
}