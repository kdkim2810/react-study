export default function Example6() {
  /*
    어떤 값이 undefined일 수도 있다면 OR연산자를 사용해서 오류를 방지할 수 있음
    */
  const name = undefined;

  return name || '값이 undefined 입니다.';
}
