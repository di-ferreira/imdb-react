import { ReactNode } from 'react';

import { Container, LoadingAnimation } from './styles';

interface LoadingProps {
  children?: ReactNode;
  visible:boolean
}

function Loading({ children, visible }: LoadingProps) {
  return (
    <Container visible={visible}>
        <LoadingAnimation>
            Loading
        </LoadingAnimation>
    </Container>
  );
};

export default Loading;
