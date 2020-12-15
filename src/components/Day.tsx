import { FC } from 'react';
import { PostType } from '../utils/PostType';

import '../styles/Day.scss';

interface Props {
  graphic: FC;
  type: PostType;
  title: string;
  day: number;
  link: string;
}

const baseURL = 'https://blog.karenying.com/posts/blogmas-2020#';

const Day: FC<Props> = (props) => {
  const { graphic: Comp, type, title, day, link } = props;
  return (
    <a href={baseURL + link} target='_blank'>
      <div className='Day'>
        <div className='Day-preview'>
          <Comp />
        </div>
        <div className='Day-details'>
          <div className='Day-details-day'>{day}</div>
          <div className='Day-details-title'>{title}</div>
          <div className='Day-details-type'>{type}</div>
        </div>
      </div>
    </a>
  );
};

export default Day;
