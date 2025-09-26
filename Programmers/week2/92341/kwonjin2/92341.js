function solution(fees, records) {
  const parking = new Map();

  for (const record of records) {
    const [time, number, action] = record.split(" ");
    const [h, m] = time.split(":");
    const minutes = h * 60 + +m;

    if (!parking.has(number)) {
      parking.set(number, { totalTime: 0, inTime: null });
    }

    if (action === "IN") {
      parking.get(number).inTime = minutes;
    } else {
      parking.get(number).totalTime += minutes - parking.get(number).inTime;
      parking.get(number).inTime = null;
    }
  }

  for (const car of parking.values()) {
    if (car.inTime !== null) {
      car.totalTime += 1439 - car.inTime;
      car.inTime = null;
    }
  }

  const answers = [];

  const sortedParking = [...parking].sort((a, b) => a[0] - b[0]);

  for (const [number, car] of sortedParking) {
    let totalMoney = fees[1];
    if (car.totalTime > fees[0]) {
      totalMoney += Math.ceil((car.totalTime - fees[0]) / fees[2]) * fees[3];
    }
    answers.push(totalMoney);
  }

  return answers;
}
