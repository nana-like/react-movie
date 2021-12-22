import React, { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('Hi!');
    return () => console.log('Bye!'); // 컴포넌트가 파괴될 때 리턴한 함수가 실행됨 (=cleanup function)
  }, []);

  return (
    <div>
      <br />
      <strong>Hello</strong>
    </div>
  );
}

function Test() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
      {showing ? <Hello /> : null}
      <hr />
    </div>
  );
}

export default Test;
