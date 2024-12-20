import {Routes, Route, Navigate} from 'react-router-dom';

import {useContext, Suspense, lazy, useEffect} from 'react';
import { PATHS } from './paths';
import Layout from '../common/Layout';

const Map = lazy(() => import('../pages/Map/Map.jsx'));
const Chat = lazy(() => import('../pages/Chat/Chat.jsx'));
const Profile = lazy(() => import('../pages/User/Profile/Profile.jsx'));

function AppRouter() {
  
  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path={PATHS.LOGIN} element=""/>

      {/* 레이아웃 설정 */}
      <Route element={<Layout/>}>

        {/* 지도 페이지 */}
        <Route path={PATHS.MAP} element={<Map/>}/>

        {/* 커뮤니티 페이지 */}
        <Route path={PATHS.COMMUNITY.LIST} element=""/>
        <Route path={PATHS.COMMUNITY.CONTENT} element=""/>
        <Route path={PATHS.COMMUNITY.WRITE} element=""/>
        <Route path={PATHS.COMMUNITY.EDIT} element=""/>

        {/* 채팅 페이지 */}
        <Route path={PATHS.CHAT.LIST} element={<Chat/>}/>
        <Route path={PATHS.CHAT.ROOM} element=""/>

        {/* 내정보 페이지 */}
        <Route path={PATHS.USER.PROFILE} element={<Profile/>}/>

      </Route>
      
    </Routes>
  );
}

export default AppRouter;