import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context'

import { Api } from '../services';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Header: React.FC = () => {
  const [music, setMusic] = useState('');
  const { user, setMusics, setLoading } = useAppContext()
  const navigate = useNavigate();

  const useClickButon = async () => {
    setLoading(true)
    const baseURL = `https://itunes.apple.com/search?term=${music}&enitity=album`;
    const response = await Api(baseURL);
    setMusics(response)
    setLoading(false)
  }

  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <div>
            <Navbar.Brand>{user}</Navbar.Brand>
          </div>
          <Form>
            <Form.Group className="mb-3 search" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Nome da música"
                onChange={({ target }) => setMusic(target.value)}
              />
                <Button
                  className="search-button"
                  variant="light"
                  type="button"
                  disabled={music.length >= 2 ? false : true}
                  onClick={useClickButon}
                >
                  Pesquisar
                </Button>
            </Form.Group>
          </Form>
          <div>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Links"
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate('/profile')}>
                    Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/favorites')}>
                    Favoritas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/search')}>
                    Pesquisar
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}
