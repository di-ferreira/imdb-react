import { ReactNode } from 'react';
import NavBar from '../../components/NavBar';
import { Container } from './styles';

interface MainProps {
  children?: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <Container>
      <NavBar/>
      <h1>Main</h1>
    </Container>
  );
};

export default Main;
