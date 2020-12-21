import Day from './components/Day';
import DaysData from './utils/DaysData';
import { DAYS_OF_WEEK } from './utils/constants';

import './App.scss';

const App = () => (
  <div className='App'>
    <a
      href='https://blog.karenying.com/posts/blogmas-2020'
      target='_blank'
      rel='noreferrer'
    >
      <div className='title'>
        bl
        <span className='dark-pink-text'>o</span>
        gm
        <span className='blue-text'>a</span>s{' '}
        <span className='title-year'>
          2<span className='light-pink-text'>0</span>2
          <span className='yellow-text'>0</span>
        </span>
      </div>
    </a>

    <div className='subtitle'>
      Miniposts every day of December until Christmas 🎊
    </div>

    <div className='message'>
      Long press over day to see details. Tap to see post.
    </div>

    <div className='calendar'>
      {DAYS_OF_WEEK.map((day) => (
        <div className='day-of-week'>{day}</div>
      ))}

      <div className='empty'></div>
      <div className='empty'></div>

      {DaysData.map((data, i) => (
        <Day {...data} day={i + 1} />
      ))}
    </div>
  </div>
);

export default App;
