function solution(s) {
  const slen = s.length;
  let min = slen;
  if (slen === 1) return 1;

  for (let i = 1; i <= slen / 2; i++) {
    let count = 1;
    let result = 0;
    for (let j = 0; j < slen; j += i) {
      const sub1 = s.substr(j, i);
      const sub2 = s.substr(j + i, i);
      if (sub1 === sub2) {
        count++;
      } else {
        count > 1
          ? count >= 10
            ? (result += sub1.length + 2)
            : (result += sub1.length + 1)
          : (result += sub1.length);
        count = 1;
      }
    }
    if (result < min) min = result;
  }
  return min;
}
