import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, Icon } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavBarProps {
  children?: ReactNode;
}

function NavBar({ children }: NavBarProps) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
    <Container>
        <Logo to="/"> <strong>imd</strong>b </Logo>

        <Menu open={mobileMenuOpen}>
            <Icon  onClick={()=>openMobileMenu()}>
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </Icon>
            <ul>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/">TV Shows</Link></li>
                <li><Link to="/">News</Link></li>
            </ul>
        </Menu>
    </Container>
  );
};

export default NavBar;
