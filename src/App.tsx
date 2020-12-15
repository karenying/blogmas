import Day from './components/Day';
import Three from './components/days/Three';
import { PostType } from './utils/PostType';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Day
        graphic={Three}
        title='Bash alias for ISO 8601 formatted time'
        type={PostType.FIX}
        day={1}
        link='%EF%B8%8F-121-bash-alias-for-iso-8601-formatted-time'
      />
    </div>
  );
}

export default App;
