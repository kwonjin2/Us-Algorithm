function solution(people, limit) {
    people.sort((a,b) => a - b);
    
    let cnt = 0;

    while (people.length) {
        const person = people.pop(); 
        if (people[0] + person <= limit) {
            people.shift();
        }
        cnt++;
    }
    return cnt;
}