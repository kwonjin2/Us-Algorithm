function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let currentWeight = 0;
  let queue = Array.from({ length: bridge_length }).fill(0);

  while (truck_weights.length > 0 || currentWeight > 0) {
    time++;
    currentWeight -= queue.shift();

    if (currentWeight + truck_weights[0] <= weight) {
      const newTruck = truck_weights.shift();
      queue.push(newTruck);
      currentWeight += newTruck;
    } else {
      queue.push(0);
    }
  }

  return time;
}
