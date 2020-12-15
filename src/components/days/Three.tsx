import scissors from '../../assets/scissors.svg';
import vscode from '../../assets/vscode.svg';

import '../../styles/days.scss';

const Three = () => {
  return (
    <div className='days Three'>
      <img src={vscode} className='vscode' />
      <img src={scissors} className='scissors' />
    </div>
  );
};

export default Three;
