import spell_check from '../../assets/spell_check.svg';
import vscode from '../../assets/vscode.png';

import '../../styles/days.scss';

const Sixteen = () => (
  <div className='days Sixteen'>
    <img src={vscode} className='vscode' alt='vscode logo' />
    <img src={spell_check} className='spell_check' alt='spell check' />
  </div>
);

export default Sixteen;
