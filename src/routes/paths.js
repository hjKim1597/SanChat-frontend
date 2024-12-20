// 라우트 경로를 상수로 관리
// 경로 변경시 paths.js 파일 수정

export const PATHS = {

  // 로그인 페이지
  LOGIN: "/login",

  // 지도 페이지
  MAP: "/map",

  // 커뮤니티 페이지
  COMMUNITY: {
    LIST: "/communityList",         // 커뮤니티 목록 경로
    CONTENT: "/communityContent",   // 커뮤니티 상세 경로
    WRITE: "/communityWrite",       // 커뮤니티 작성 경로
    EDIT: "/communityEdit",         // 커뮤니티 수정 경로
  },

  // 채팅 페이지
  CHAT: {
    LIST: "/chatList",           // 채팅 목록 경로
    ROOM: "/chatRoom",           // 채팅방 경로
  },

};