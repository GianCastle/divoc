import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Form,
  NavbarText
} from 'reactstrap'

export const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar color="dark" expand="md">
        <NavbarBrand href="/">Vidoc</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Form className="form-center">
                <Input type="text" placeholder="Search your country" />
              </Form>
            </NavItem>
          </Nav>
          <NavbarText>Github</NavbarText>
        </Collapse>
      </Navbar>
    </>
  )
}
