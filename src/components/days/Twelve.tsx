import home from '../../assets/home.svg';
import backtotop2 from '../../assets/backtotop2.svg';

import '../../styles/days.scss';

const Twelve = () => {
  return (
    <div className='days Twelve'>
      <img src={backtotop2} className='backtotop2' />
      <img src={home} className='home' />
    </div>
  );
};

export default Twelve;
