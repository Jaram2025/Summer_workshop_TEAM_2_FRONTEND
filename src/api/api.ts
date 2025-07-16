import axios from 'axios';
import type { Result, UserFormData, Product, ApiResponse} from '../type/type';
// interface ApiRequest {
//
// }

export default class ApiManager {
    API_URL: string = import.meta.env.VITE_SERVER_URL + "/profile";

    async post(data: UserFormData): Promise<Result<Product[], Error>>{

        let result: ApiResponse;
        console.log('API로 전송할 데이터:', data);

        const response = await axios.post<UserFormData>(this.API_URL, data);

        console.log('API 응답 데이터:', response.data, JSON.stringify(response.data));
        
        if(response.status !== 200){
            return [null, new Error("status code is not 200")];
        }
        result = JSON.parse(JSON.stringify(response.data)) as ApiResponse;
    
        if (result.recommendations[0] === undefined){
            return[null, new Error("invalid json response")];
        }
        console.log("check");
        return [result.recommendations, null]; 
        
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