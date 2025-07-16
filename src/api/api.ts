import axios from 'axios';
import type { Result, UserFormData } from '../type/type';

// interface ApiRequest {
//
// }

interface ApiResponse {
  message: string;
  status: 'success' | 'error'; 
  data?: UserFormData;  
}

export default class ApiManager {
    API_URL: string = import.meta.env.VITE_MOCK_SERVER_URL;

    async post(data: UserFormData): Promise<Result<ApiResponse, Error>>{

        const result: ApiResponse = {message: "ok", status: "success"};
        console.log('App.tsx: API로 전송할 데이터:', data);

        const response = await axios.post<UserFormData>(this.API_URL, data);

        console.log('App.tsx: API 응답 데이터:', response.data, JSON.stringify(response.data));

        return [result, null]; 
    }
}

    //   }

    //   } catch (error) {
    //     if (axios.isAxiosError(error)) { 
    //       console.error('App.tsx: API 요청 오류:', error.message);
    //       const errorMessage = error.response?.data?.message || '서버와 통신 중 오류가 발생했습니다.';
    //       setApiMessage(errorMessage);
    //       setApiStatus('error');
    //     } else {
    //       console.error('App.tsx: 예상치 못한 오류:', error);
    //       setApiMessage('예상치 못한 오류가 발생했습니다.');
    //       setApiStatus('error');
    //     }
    //   } finally {
    //     setIsLoading(false);
    //   }