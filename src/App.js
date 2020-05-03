import React, {useState, useCallback} from 'react';

import NewsList from './components/NewsList';
import SideBar from './components/SideBar/SideBar';

import '../src/tailwind/tailwind.css';

const App = () => {
  const[ category, setCategory ] = useState('all');
  const selectCategory = useCallback(category => setCategory(category), []);


  return(
    <div className="flex"> 
      <SideBar category = { category } 
               selectCategory = { selectCategory } 
               />

      <NewsList category = { category }
                />
    </div>
  );
};



export default App;
