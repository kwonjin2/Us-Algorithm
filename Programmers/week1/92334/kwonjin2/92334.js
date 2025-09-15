function solution(id_list, report, k) {
  const set = new Set(report);
  const arr = [...set];

  const report_count = Array(id_list.length).fill(0);
  const mailed_count = Array(id_list.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    report_count[id_list.indexOf(arr[i].split(" ")[1])]++;
  }

  const banned = report_count.map((count) => count >= k);

  for (let i = 0; i < arr.length; i++) {
    const [from, to] = arr[i].split(" ");

    if (banned[id_list.indexOf(to)]) {
      mailed_count[id_list.indexOf(from)]++;
    }
  }

  return mailed_count;
}
