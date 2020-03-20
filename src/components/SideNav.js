import React from 'react'
import { NavItem, Col } from 'reactstrap'

export const SideNav = props => {
  return (
    <Col md={2} className=" pt-4 d-none d-md-block bg-light sidenav">
      <div className="sidenav__sticky">
        <ul className="nav flex-column">
          <NavItem>Worldwide</NavItem>
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
