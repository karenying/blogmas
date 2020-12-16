import { FC } from 'react';
import { PostType } from '../utils/PostType';

import '../styles/Day.scss';

export interface DaysProps {
  preview: FC;
  type: PostType;
  title: string;
  link: string;
  day?: number;
}

const baseURL = 'https://blog.karenying.com/posts/blogmas-2020#';

const Day: FC<DaysProps> = (props) => {
  const { preview: Graphic, type, title, day, link } = props;
  return (
    <div className='Day'>
      <div className='Day-preview'>
        <Graphic />
      </div>
      <a href={baseURL + link} target='_blank'>
        <div className='Day-details'>
          <div className='Day-details-day'>{day}</div>
          <div className='Day-details-title'>{title}</div>
          <div className='Day-details-type'>{type}</div>
        </div>
      </a>
    </div>
  );
};

export default Day;
