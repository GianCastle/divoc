import React from 'react'
import { NavItem, Col } from 'reactstrap'

export const SideNav = props => {
  return (
    <Col md={1} className="pt-4 d-none d-md-block  sidenav">
      <div className="sidenav__sticky">
        <ul className="nav flex-column">
          <NavItem href="#worldwide">Worldwide</NavItem>
        </ul>
        <ul className="nav flex-column">
          <NavItem>Countries</NavItem>
        </ul>
        <ul className="nav flex-column">
          <NavItem>Other stats</NavItem>
        </ul>
      </div>
    </Col>
  )
}
