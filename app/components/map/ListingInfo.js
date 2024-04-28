import React from 'react';

const ListingInfo = ({ link, imageUrl, title, address }) => {
  return (
    <a href={link} className="listing-img-container">
      <div className="infoBox-close">
        <i className="fa fa-times"></i>
      </div>
      <img src={imageUrl} alt="" />
      <div className="rate-info">
        <h5>$550.000</h5>
        <span>For Rent</span>
      </div>
      <div className="listing-item-content">
        <h3>{title}</h3>
        <span>
          <i className="la la-map-marker"></i>
          {address}
        </span>
      </div>
    </a>
  );
};

export default ListingInfo;