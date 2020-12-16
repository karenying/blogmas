import scissors from '../../assets/scissors.png';
import vscode from '../../assets/vscode.png';

import '../../styles/days.scss';

const Three = () => (
  <div className='days Three'>
    <img src={vscode} className='vscode' alt='vscode logo' />
    <img src={scissors} className='scissors' alt='scissors' />
  </div>
);

export default Three;
