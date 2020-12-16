import clock from '../../assets/clock.svg';
import gatsby from '../../assets/gatsby.svg';

import '../../styles/days.scss';

const Thirteen = () => {
  return (
    <div className='days Thirteen'>
      <img src={gatsby} className='gatsby' alt='gatsby logo' />
      <img src={clock} className='clock' alt='clock' />
    </div>
  );
};

export default Thirteen;
