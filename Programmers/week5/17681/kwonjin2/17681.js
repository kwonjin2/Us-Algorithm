function solution(n, arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const ORValue = (arr1[i] | arr2[i]).toString(2).padStart(n, 0);
        const oneLine = ORValue.split('').map(v => v === '1' ? '#' : ' ').join('');
        result.push(oneLine);
    }
    
    return result;
}