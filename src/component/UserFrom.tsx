// src/components/UserForm/UserForm.tsx

import React, { useState } from 'react';
import styles from './UserForm.module.css';

// UserForm 컴포넌트가 부모에게 전달할 데이터의 타입을 정의합니다.
export interface UserFormData {
    birthday: string;
    gender: string;
    age: number;
    job: string;
    relationship: string;
}

// UserForm 컴포넌트가 부모로부터 받을 props의 타입을 정의합니다.
interface UserFormProps {
    onSubmit: (data: UserFormData) => void; // UserFormData 객체를 인자로 받는 함수
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
    const [birthday, setBirthday] = useState<string>('');
    const [gender, setGeder] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [job, setJob] = useState<string>('');
    const [relationship, setRelationship] = useState<string>('');

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // 폼의 기본 동작(페이지 새로고침) 방지

    // 입력 필드에서 현재 값들을 가져와 UserFormData 객체로 만듭니다.
    const formData: UserFormData = { birthday, gender, age, job, relationship };

    // 부모 컴포넌트로부터 전달받은 onSubmit 함수를 호출하여 데이터를 전달합니다.
    onSubmit(formData);

    // // 폼 제출 후 입력 필드 초기화
    // setBirthday('');
    // setGeder('');
    // setAge(0);
    // setJob('');
    // setRelationship('nothing');
  };

  return (
    <div className={styles.container}>
      <h2>사용자 정보 입력</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
          <label htmlFor="birthdayInput" className={styles.label}>
            생일:
          </label>
          <input
            type="date"
            id="birthdayInput"
            className={styles.inputField}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="생일을 입력하세요"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="genderInput" className={styles.label}>
            성별:
          </label>
          <select 
            id="genderInput"
            className={styles.inputField}
            onChange={(e) => setGeder(e.target.value)}
            required>
            <option value=""> ---고르세요---</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
            <option value="선택 안함">선택 안함함</option>
        </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="ageInput" className={styles.label}>
            나이:
          </label>
          <input
            type="number"
            id="ageInput"
            className={styles.inputField}
            value={age}
            onChange={(e) => {
              const v = parseInt(e.target.value);
              if(v < 0) setAge(0);
              setAge(v);
              }
            }
            placeholder="나이를 입력하세요"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="jobInput" className={styles.label}>
            직업:
          </label>
          <input
            type="text"
            id="jobInput"
            className={styles.inputField}
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="직업을 입력하세요"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="relationshipInput" className={styles.label}>
            관계:
          </label>
          <select 
            id="relationshipInput"
            className={styles.inputField}
            onChange={(e) => setRelationship(e.target.value)}
            required>
            <option value=""> ---고르세요---</option>
            <option value="연인">연인</option>
            <option value="친구">친구</option>
            <option value="가족(부모님)">가족(부모님)</option>
            <option value="가족(형제, 자매)">가족(형제, 자매)</option>
            <option value="직장 동료">직장 동료</option>
            <option value="기타">기타</option>
        </select>
        </div>
        <button type="submit" className={styles.submitButton}>
          정보 제출
        </button>
      </form>
    </div>
  );
};

export default UserForm;