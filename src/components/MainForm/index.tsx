import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';

export function MainForm() {
  return (
    <form className='form'>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='red' />
      </div>
    </form>
  );
}
