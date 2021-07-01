import { ReactNode } from 'react';

import { Container } from './styles';

interface SearchBoxProps {
  children: ReactNode;
}

function SearchBox({ children }: SearchBoxProps) {
  return (
    <Container>
      <h1>SearchBox</h1>
      {children}
    </Container>
  );
};

export default SearchBox;
