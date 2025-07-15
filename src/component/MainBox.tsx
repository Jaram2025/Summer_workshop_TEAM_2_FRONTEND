import React from 'react';

// 'React.FC'는 "React Functional Component"의 약자로,
// 이 함수가 React 컴포넌트임을 명시하고 기본적인 props 타입(children 등)을 제공합니다.
const HelloWorld: React.FC = () => {
  // 컴포넌트는 JSX(JavaScript XML)를 반환합니다.
  // JSX는 HTML과 매우 유사하게 생겼으며, React가 UI를 렌더링하는 방식을 정의합니다.
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

// 이 컴포넌트를 다른 파일에서 임포트하여 사용할 수 있도록 내보냅니다.
export default HelloWorld;