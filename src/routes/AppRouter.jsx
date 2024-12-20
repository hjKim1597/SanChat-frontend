import {Routes, Route, Navigate} from 'react-router-dom';

import {useContext, Suspense, lazy, useEffect} from 'react';
import { PATHS } from './paths';
import Layout from '../common/Layout';

function AppRouter() {
  
  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path={PATHS.LOGIN} element=""/>

      {/* 레이아웃 설정 */}
      <Route element={<Layout/>}>

        {/* 지도 페이지 */}
        <Route path={PATHS.MAP} element=""/>

        {/* 커뮤니티 페이지 */}
        <Route path={PATHS.COMMUNITY.LIST} element=""/>
        <Route path={PATHS.COMMUNITY.CONTENT} element=""/>
        <Route path={PATHS.COMMUNITY.WRITE} element=""/>
        <Route path={PATHS.COMMUNITY.EDIT} element=""/>

        {/* 채팅 페이지 */}
        <Route path={PATHS.CHAT.LIST} element=""/>
        <Route path={PATHS.CHAT.ROOM} element=""/>
      
      </Route>
      
    </Routes>
  );
}

export default AppRouter;