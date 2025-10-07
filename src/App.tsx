import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        officiis possimus vel laboriosam aperiam placeat perspiciatis pariatur
        quasi debitis nulla ducimus alias aliquid at, maxime quo, expedita qui
        nihil. Expedita!
      </p>
    </>
  );
}
