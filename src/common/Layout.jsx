import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {

  return (

    <div className="layout">
      
      
      {/* 라우트 된 페이지 콘텐트 영역 */}
      <div className="content">
        <Outlet />  {/* 자식 페이지 렌더링 */}
      </div>

      <Footer/>

    </div>
  );
}

export default Layout;