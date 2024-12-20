import React, { useEffect, useRef } from 'react';
import './MapWalkDisplay.css';

function MapWalkDisplay() {

  return (
    <>
      {/* 산책 정보 표시 */}
      <div className="map-walk-display">
        <div className="map-walk-display-distance">
          <div> 거리 </div>
          <div> 1.2 <span>km</span> </div>
        </div>
        <div className="map-walk-display-time">
          <div> 산책 시간 </div>
          <div> 00 : 41 </div>
        </div>
      </div>
    </>
  );
}

export default MapWalkDisplay;
