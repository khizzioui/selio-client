import React, { useState, useCallback } from 'react';
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import ListingInfo from './ListingInfo';
import CustomMarker from './CustomMarker';

const MapContainer = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDVwc4veKudU0qjYrLrrQXacCkDkcy3AQ',
    libraries: ['places'],
  });

  const listings = [
    {
      id: 1,
      title: 'Grameen Sweets',
      address: '964 School Street, New York',
      position: { lat: 23.72447089779572, lng: 90.42868673801422 },
      icon: '<i class="la la-home"></i>',
    },
    {
      id: 2,
      title: 'Grameen Sweets',
      address: '964 School Street, New York',
      position: { lat: 21.72447089779572, lng: 90.42868673801422 },
      icon: '<i class="la la-home"></i>',
    },
  ];

  const handleMarkerClick = useCallback((marker) => {
    setActiveMarker(marker);
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setActiveMarker(null);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={9}
      center={{ lat: 22.72447089779572, lng: 90.43003517390389 }}
      mapContainerStyle={{ height: '500px', width: '100%' }}
    >
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={listing.position}
          onClick={() => handleMarkerClick(listing)}
          icon={{
            url: `data:image/svg+xml;utf-8,${encodeURIComponent(listing.icon)}`,
          }}
        >
          {activeMarker === listing && (
            <InfoWindow onCloseClick={handleInfoWindowClose}>
              <ListingInfo
                link="24_Property_Single.html"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Compass_Real_Estate_Seattle_Hub.jpg/220px-Compass_Real_Estate_Seattle_Hub.jpg"
                title={listing.title}
                address={listing.address}
              />
            </InfoWindow>
          )}
          <CustomMarker markerIcon={listing.icon} markerId={listing.id} />
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default MapContainer;