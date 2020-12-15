import spell_check from '../../assets/spell_check.svg';
import vscode from '../../assets/vscode.svg';

import '../../styles/days.scss';

const Sixteen = () => {
  return (
    <div className='days Sixteen'>
      <img src={vscode} className='vscode' />
      <img src={spell_check} className='spell_check' />
    </div>
  );
};

export default Sixteen;
