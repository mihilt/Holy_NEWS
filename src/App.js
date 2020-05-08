import React, {useState, useCallback} from 'react';

import NewsList from './components/NewsList';
import SideBar from './components/SideBar/SideBar';

import '../src/tailwind/tailwind.css';

const App = () => {
  const[ category, setCategory ] = useState('all');
  const[ country, setCountry ] = useState('kr');
  const selectCategory = useCallback(category => setCategory(category), []);
  const selectCountry = useCallback(country => setCountry(country), []);

  return(
    <div className="flex"> 
      <SideBar category = { category } 
               selectCategory = { selectCategory } 
               country = { country } 
               selectCountry = { selectCountry }/>

      <NewsList category = { category }
                country = { country }/>
    </div>
  );
};

/* 
키워드 검색, 불러올 페이지 갯수 설정, 사이드바 반응형 스크롤, 
description ellipsis 다시 시도해보거나 사이드바에서 토글옵션으로 빼기
사진 크기 일정하게
*/

export default App;
