import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar bg="success" variant="dark">
      <Container className="justify-content-center">
        <Link to="/" className="text-white ms-3 py-3 text-decoration-none"> Home </Link>   
        <Link to="/favoritos" className="text-white ms-3 py-3 text-decoration-none"> Favoritos </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;

