import home from '../../assets/home.svg';
import backtotop2 from '../../assets/backtotop2.svg';

import '../../styles/days.scss';

const Twelve = () => (
  <div className='days Twelve'>
    <img src={backtotop2} className='backtotop2' alt='back to top button' />
    <img src={home} className='home' alt='home' />
  </div>
);

export default Twelve;
