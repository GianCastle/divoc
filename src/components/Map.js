import React, { useState, useEffect, useRef } from 'react'
import GoogleMapReact from 'google-map-react'

import { Row, Col } from 'reactstrap'

import Icon from '@mdi/react'
import { mdiAlert } from '@mdi/js'
import { mapStyles } from '../config/mapStyles'

import useFetch from 'use-http'

const CustomMarker = ({ text }) => (
  <div>
    <span style={{ color: 'white' }}>{text}</span>
  </div>
)

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
    <Row className="">
      <Col sm={12} className="px-0 mt-2">
        <div className="map">
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{
              key: 'AIzaSyDuq_-5Mef7JsmIrL2d1vGo7YKwhfYD0dk'
            }}
            defaultZoom={5}
            defaultCenter={{ lat: 18.483402, lng: -69.929611 }}
            options={{
              scrollwheel: false,
              streetViewControl: false,
              styles: mapStyles
            }}
          >
            {marks.map(({ country, province, stats, coordinates }) => {
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
      </Col>
    </Row>
  )
}
