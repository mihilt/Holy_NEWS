import React, { useState, useCallback } from "react";

import NewsList from "./components/newsList/newsList";
import Sidebar from "./components/sidebar/sidebar.component";

import "../src/tailwind/tailwind.css";

const App = () => {
    const [category, setCategory] = useState("all");
    const [country, setCountry] = useState("kr");
    const selectCategory = useCallback((category) => setCategory(category), []);
    const selectCountry = useCallback((country) => setCountry(country), []);

    return (
        <div className="flex">
            <Sidebar
                category={category}
                selectCategory={selectCategory}
                country={country}
                selectCountry={selectCountry}
            />

            <NewsList category={category} country={country} />
        </div>
    );
};

/* 
키워드 검색, 불러올 페이지 갯수 설정,  
description ellipsis 다시 시도해보거나 사이드바에서 토글옵션으로 빼기
사진 크기 일정하게

제목 + 내용검색, 제목검색, 출처, 사이트 도메인으로 검색 
날짜 (from, to), 정렬 (검색과 밀접한 것, 인기, 최신 (기본은 최신))
페이지 갯수

페이지 갯수 selectbox, 검색 제목 + 내용검색, 인기순 최신순 정렬 토글버튼, 
사이트 전체적인 번역 + 사이드바 맨 마지막에 출처 깃헙주소 아이콘 링크

메뉴 객체 파일 분기
*/

export default App;
