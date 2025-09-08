function solution(participant, completion) {
  const participant_sort = [...participant].sort();
  const completion_sort = [...completion].sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant_sort[i] !== completion_sort[i]) {
      return participant_sort[i];
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
