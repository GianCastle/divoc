import React, { useState, useEffect, useRef } from 'react'
import GoogleMapReact from 'google-map-react'

import { Row, Col } from 'reactstrap'

import { mapStyles } from '../config/mapStyles'

import useFetch from 'use-http'

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
  const [marks, setMarks] = useState([])
  const { get, response } = useFetch({ data: [], suspense: true })
  const mounted = useRef(false)

  const fetchData = async () => {
    const countryMarkers = await get('/jhucsse')
    response.ok ? setMarks(countryMarkers) : console.error(response)
  }

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    fetchData()
  })

  return (
    <Col sm={12} md={8} className="mt-3">
      <h4>Corona Map</h4>
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
            {marks.map(({ country, province, stats, coordinates }) => {
              if (isNaN(coordinates.latitude) || isNaN(coordinates.longitude))
                return undefined
              return (
                <CustomMarker
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
