import { Button,Card ,Navbar,Container} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Home from "./Home";
const Menu=()=>{
    const navigate=useNavigate();
    function onLogOUt(){
      localStorage.removeItem('user');
      navigate(-2)
    }
    return(
        <div>
          <Navbar className="bg-dark" variant="white">
      <Container variant="white">
        <Navbar.Brand href="#home" variant="white" className="nav-text" >Blogs</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" variant="white">
          <Navbar.Text variant="white" className="nav-text" onClick={()=>{onLogOUt();}}>
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Home />
        </div>
    )
}
export default Menu;
