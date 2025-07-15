// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import UserForm from './component/UserFrom';
import type { UserFormData } from './component/UserFrom'

function App() {
  const [receivedFormData, setReceivedFormData] = useState<UserFormData | null>(null);

  const handleUserFormSubmit = (data: UserFormData): void => {
    // // UserForm으로부터 전달받은 두 가지 입력값(이름, 이메일)을 콘솔에 출력합니다.
    // console.log('--- App.tsx에서 UserForm으로부터 전달받은 데이터 ---');
    // console.log('이름:', data.name);
    // console.log('이메일:', data.email);
    // console.log('--------------------------------------------------');

    // 전달받은 데이터를 App 컴포넌트의 상태에 저장하여 화면에 표시합니다.
    setReceivedFormData(data);
  };
  return (
    <>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Summer_workshop_TEAM_2_FRONTEND</h1>
      <UserForm onSubmit={handleUserFormSubmit} />
      {receivedFormData && (
        <div className="receivedData">
          <h3>App.tsx에서 받은 데이터:</h3>
          <p>생일: <span>{receivedFormData.birthday}</span></p>
          <p>성별: <span>{receivedFormData.gender}</span></p>
          <p>나이: <span>{receivedFormData.age}</span></p>
          <p>직업: <span>{receivedFormData.job}</span></p>
          <p>관계: <span>{receivedFormData.relationship}</span></p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
