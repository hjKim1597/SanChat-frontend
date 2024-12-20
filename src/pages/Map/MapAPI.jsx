import React, { useEffect, useRef, useState } from 'react';
import './MapAPI.css';
import MapWalkDisplay from './MapWalkDisplay';


function MapAPI() {

    //내 위치 가져오기
    // const [location, setLocation] = useState({lat : null, lng: null});

    // 네이버 지도
    const mapContainer = useRef(null);

    // 내 위치
    const [location, setLocation] = useState({latitude : null , longitude : null});


    // 지도 객체 참조
    const mapRef = useRef(null);

    useEffect(() => {
        // 내 위치 가져오기
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({latitude:position.coords.latitude , longitude : position.coords.longitude}); // 위도 경도 값
          },
        );
        console.log(location);
      }, []); 


    useEffect(() => {
        // 네이버 지도 API가 로드된 후 실행
        const { naver } = window;
    
        if (naver) {
          const mapOptions = {
            center: new naver.maps.LatLng(location.latitude , location.longitude), // 내 위치
            zoom: 10,
            minZoom: 15,
            useStyleMap: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: naver.maps.MapTypeControlStyle.BUTTON,
              position: naver.maps.Position.TOP_LEFT
            },
            zoomControl: true,
            zoomControlOptions: {
              position: naver.maps.Position.TOP_RIGHT
            }
          };
    
          // 네이버 지도 객체 생성
          mapRef.current = new naver.maps.Map(mapContainer.current, mapOptions);
    
          // 마커 추가
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(location.latitude , location.longitude), 
            map: mapRef.current
          });
    
          // 정보창 추가
          const contentString = '<div>여기에 정보창 내용을 넣으세요!</div>';
          const infowindow = new naver.maps.InfoWindow({
            content: contentString,
            anchorSize: new naver.maps.Size(15, 5),
            pixelOffset: new naver.maps.Point(0, -10)
          });
    
          // 마커 클릭 시 정보창 열기
          naver.maps.Event.addListener(marker, 'click', () => {
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(mapRef.current, marker);
            }
          });
    
          // 정보창 처음에 열기
          infowindow.open(mapRef.current, marker);
        }


      }, [location]);
      


      const goMyLocation = () => {
        mapRef.current.setCenter(new naver.map.LatLng(37.575386001258, 127.18992467816));
      }
      

  return (
    <>
     
      <div className='map-box'>
        {/* 산책 정보 표시 */}
        <MapWalkDisplay/>

        {/* 우측 상단 버튼 */}

        <div className='map-my-location'> 
            <button onClick={() => goMyLocation()}> 📍 </button>
        </div>

        <div className='map-view-mode'> 
            <button > 👁️ </button>
        </div>

        <div className='map-sharing-option'> 
            <select>
                <option> 전체 </option>
                <option> 친구만 </option>
                <option> 비공개 </option>
            </select>
        </div>

         {/* 지도 영역 */}
        <div
            ref={mapContainer}
            // style={{ width: '100%', height: '400px' }} // 지도 크기 설정
            className='naver-map'
        ></div>


      </div>
    </>
  );
}

export default MapAPI;
