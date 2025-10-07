import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

export function App() {
  console.log('Oi');

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Logo</Heading>
      </Container>
    </>
  );
}
