import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context'
import { ILogin } from '../interfaces';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  const { user } = useContext(AppContext) as unknown as ILogin;
  const navigate = useNavigate();

  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>{user}</Navbar.Brand>
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
        </Container>
      </Navbar>
    </header>
  )
}
