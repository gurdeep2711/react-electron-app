import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { VIDEO } from '../../Models/General';

const Videos = () => {
  return (
    <VideoPlayer title={VIDEO.title} description={VIDEO.description} url={VIDEO.url} />
  )
}

export default Videos;