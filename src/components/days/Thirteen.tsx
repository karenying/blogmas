import clock from '../../assets/clock.svg';
import gatsby from '../../assets/gatsby.svg';

import '../../styles/days.scss';

const Thirteen = () => {
  return (
    <div className='days Thirteen'>
      <img src={gatsby} className='gatsby' />
      <img src={clock} className='clock' />
    </div>
  );
};

export default Thirteen;
