import { ReactNode } from 'react';

import { Container, LoadingAnimation } from './styles';

interface LoadingProps {
  children?: ReactNode;
}

function Loading({ children }: LoadingProps) {
  return (
    <Container>
        <LoadingAnimation>
            Loading
        </LoadingAnimation>
    </Container>
  );
};

export default Loading;
