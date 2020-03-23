import React from 'react'
import { useSelector } from 'react-redux'

import GoogleMapReact from 'google-map-react'

import { Row, Col } from 'reactstrap'

import { mapStyles } from '../config/mapStyles'
import { getMarkersCoords } from '../features/stats/statsSelectors'

const CustomMarker = ({ text }) => {
  return (
    <div className="align-items-center justify-content-center">
      {/* <Icon path={mdiAlert} color="white" size={0.8} horizontal /> */}
      <span style={{ color: 'white', textAlign: 'center' }}>
        {`${text} ${Number(text) > 1 ? 'cases' : 'case'}`}
      </span>
    </div>
  )
}

export const Map = () => {
  const marks = useSelector(getMarkersCoords)

  console.log(marks)
  return (
    <Col sm={12} md={8} className="mt-3">
      <Row>
        <div className="map">
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{
              key: 'AIzaSyDuq_-5Mef7JsmIrL2d1vGo7YKwhfYD0dk'
            }}
            defaultZoom={8}
            defaultCenter={{ lat: 18.483402, lng: -69.929611 }}
            options={{
              scrollwheel: false,
              streetViewControl: false,
              styles: mapStyles
            }}
          >
            {marks.map(({ stats, coordinates }, i) => {
              if (isNaN(coordinates.latitude) || isNaN(coordinates.longitude))
                return undefined
              return (
                <CustomMarker
                  key={i}
                  text={`${stats.confirmed}`}
                  lat={coordinates.latitude}
                  lng={coordinates.longitude}
                />
              )
            })}
          </GoogleMapReact>
        </div>
      </Row>
    </Col>
  )
}
