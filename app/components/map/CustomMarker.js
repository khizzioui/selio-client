import React from 'react';

const CustomMarker = ({ markerIcon, markerId }) => {
  return (
    <div className="map-marker-container" data-marker-id={markerId}>
      <div className="marker-container">
        <div className="marker-card">
          <div className="front face">{markerIcon}</div>
          <div className="back face">{markerIcon}</div>
          <div className="marker-arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomMarker;