import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';

import '../../styles/days.scss';

const Two = () => {
  return (
    <div className='days Two'>
      <img src={menu} className='menu' alt='menu' />
      <img src={close} className='close' alt='close' />
    </div>
  );
};

export default Two;
