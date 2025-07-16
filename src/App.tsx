// import { useState } from 'react'
import { useState } from 'react';
import './App.css';
import UserForm from './component/UserForm';
import type { UserFormData, Product} from "./type/type";
import ApiManager from './api/api';
import ResultForm from "./component/ResultForm.tsx";
// import ProductCard from './component/ProductCard.tsx';



export default function App() {
  const apiManager = new ApiManager();

  const [receivedFormData, setReceivedFormData] = useState<UserFormData | null>(null);
  const [resultData, setResultData] = useState<Product[]>([]);

  const handleUserFormSubmit = async (data: UserFormData): Promise<void> => {
    setReceivedFormData(data);

    const [result, err] = await apiManager.post(data);
    if(err != null){
      //write error log
    }
    if(result != null)
      setResultData(result);
  };
  return (
    <>
      <div className="App">
        <h1>Summer_workshop_TEAM_2_FRONTEND</h1>
          <UserForm onSubmit={handleUserFormSubmit} />
          {receivedFormData && (
              <>
              <ResultForm products={resultData}/>
              </>
          )}
      </div>
    </>
  );
}