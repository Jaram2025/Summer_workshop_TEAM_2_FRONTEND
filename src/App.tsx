// import { useState } from 'react'
import { useState } from 'react';
import './App.css';
import UserForm from './component/UserFrom';
import type { UserFormData } from './component/UserFrom'

function App() {
  const [receivedFormData, setReceivedFormData] = useState<UserFormData | null>(null);

  const handleUserFormSubmit = (data: UserFormData): void => {
    setReceivedFormData(data);
  };
  return (
    <>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Summer_workshop_TEAM_2_FRONTEND</h1>
          <UserForm onSubmit={handleUserFormSubmit} />
            {receivedFormData && (
              <div className={"container"}>
                <div className="receivedData">
                  <h3>App.tsx에서 받은 데이터:</h3>
                  <p>생일: <span>{receivedFormData.birthday}</span></p>
                  <p>성별: <span>{receivedFormData.gender}</span></p>
                  <p>나이: <span>{receivedFormData.age}</span></p>
                  <p>직업: <span>{receivedFormData.job}</span></p>
                  <p>관계: <span>{receivedFormData.relationship}</span></p>
                </div>
              </div>
          )}
      </div>
    </>
  )
}

export default App
