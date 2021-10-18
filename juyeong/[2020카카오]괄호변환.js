const check = (u) => { // 올바른 괄호 문자열인지 판단
  let openCnt = 0;
  let closeCnt = 0;
  if (u[0] === ")") return false;
  for (const x of u) {
    if (x === "(") {
      openCnt++;
    } else {
      closeCnt++;
      if (openCnt < closeCnt) {
        return false;
      }
    }
  }
  return true;
};
const rever = (u) => { // 괄호 반전
    return u.slice(1, u.length - 1).split("").map((x) => (x === "(" ? ")" : "(")).join("");
};
const separate = (p) => { // 괄호 분리
  let openCnt = 0;
  let closeCnt = 0;
  let u = "";
  let v = "";
  if (p === "") return "";
  for (const [idx, x] of p.entries()) {
    x === "(" ? openCnt++ : closeCnt++;
    if (openCnt === closeCnt) {
      u = p.join("").substring(0, idx + 1);
      v = p.join("").substring(idx + 1, p.length);
      if (check(u.split(""))) return u + separate(v.split(""));
      else return "(" + separate(v.split("")) + ")" + rever(u);
    }
  }
  return u;
};
function solution(p) {
  if (check(p)) return p;
  return separate(p.split(""));
}