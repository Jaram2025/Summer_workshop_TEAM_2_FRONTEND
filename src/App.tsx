// import { useState } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './component/UserFrom';
import type { UserFormData } from './component/UserFrom'

interface ApiResponse {
  message: string;
  status: 'success' | 'error'; // 응답 상태를 명확히
  data?: UserFormData; // 선택적으로 추가 데이터를 받을 수 있음
}

function App() {
  // 2. API 호출 중 로딩 상태를 관리합니다. (버튼 비활성화 등에 사용)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // 3. API 응답 메시지를 저장할 상태입니다.
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  // 4. API 응답의 성공/실패 상태를 저장할 상태입니다.
  const [apiStatus, setApiStatus] = useState<'success' | 'error' | null>(null);

  const [receivedFormData, setReceivedFormData] = useState<UserFormData | null>(null);

  const [resultData, setResultData] = useState<string | null>(null);

  const handleUserFormSubmit = async (data: UserFormData): Promise<void> => {
    setReceivedFormData(data);
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    try {
        console.log('App.tsx: API로 전송할 데이터:', data);
        const response = await axios.post<UserFormData>(API_URL, data);

        console.log('App.tsx: API 응답 데이터:', response.data, typeof response.data);

        setResultData(response.data.birthday); 

        setApiMessage('사용자 정보가 성공적으로 제출되었습니다!');
        setApiStatus('success');

      } catch (error) {
        if (axios.isAxiosError(error)) { 
          console.error('App.tsx: API 요청 오류:', error.message);
          const errorMessage = error.response?.data?.message || '서버와 통신 중 오류가 발생했습니다.';
          setApiMessage(errorMessage);
          setApiStatus('error');
        } else {
          console.error('App.tsx: 예상치 못한 오류:', error);
          setApiMessage('예상치 못한 오류가 발생했습니다.');
          setApiStatus('error');
        }
      } finally {
        setIsLoading(false);
      }
  };
  return (
    <>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Summer_workshop_TEAM_2_FRONTEND</h1>
          <UserForm onSubmit={handleUserFormSubmit} />
            {receivedFormData && (
              <div className={"container"}>
                {/* <div className="receivedData">
                  <h3>App.tsx에서 받은 데이터:</h3>
                  <p>생일: <span>{receivedFormData.birthday}</span></p>
                  <p>성별: <span>{receivedFormData.gender}</span></p>
                  <p>나이: <span>{receivedFormData.age}</span></p>
                  <p>직업: <span>{receivedFormData.job}</span></p>
                  <p>관계: <span>{receivedFormData.relationship}</span></p>
                </div> */}
                <span>{resultData}</span>
              </div>
          )}
      </div>
    </>
  )
}

export default App
