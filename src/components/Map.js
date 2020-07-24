import React from 'react'
import { useSelector } from 'react-redux'

import GoogleMapReact from 'google-map-react'
import { getMarkersCoords } from '../features/stats/statsSelectors'

import { Row, Col } from 'reactstrap'
import { mapStyles } from '../config/mapStyles'

const CustomMarker = ({ text, flag }) => (
  <div className="align-items-center justify-content-center">
    <img src={flag} alt="test" style={{ height: '10px' }} />
    <span style={{ color: 'white', textAlign: 'center', fontSize: '6px' }}>
      {text}
    </span>
  </div>
)

export const Map = () => {
  const marks = useSelector(getMarkersCoords)
  return (
    <Col sm={12} md={8} className="mt-3">
      <Row>
        <div className="map">
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{
              key: 'AIzaSyDuq_-5Mef7JsmIrL2d1vGo7YKwhfYD0dk'
            }}
            defaultZoom={1}
            defaultCenter={{ lat: 18.483402, lng: -69.929611 }}
            options={{
              scrollwheel: false,
              streetViewControl: false,
              styles: mapStyles
            }}
          >
            {marks.map(
              (
                { active, countryInfo: { lat, long, flag }, severityColor },
                i
              ) => (
                <CustomMarker
                  key={i}
                  text={`${active}`}
                  lat={lat}
                  lng={long}
                  severityColor={severityColor}
                  flag={flag}
                />
              )
            )}
          </GoogleMapReact>
        </div>
      </Row>
    </Col>
  )
}
