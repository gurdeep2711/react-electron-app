import React, { PureComponent } from 'react';
import './VideoPlayer.css';

interface VideoPlayerProps {
  url: any;
}

export default class VideoPlayer extends PureComponent<VideoPlayerProps> {
  videoRef: any;
  state = {
    isPlaying: false
  }

  onClick(): void {
    let isPlaying = false;
    if (this.state.isPlaying) {
      this.videoRef.pause();
    } else {
      this.videoRef.play();
      isPlaying = true;
    }
    this.setState({ isPlaying });
  }

  render() {
    let btnText = 'Play'
    if (this.state.isPlaying) {
      btnText = 'Pause';
    }
    return (
      <div className="video-container">
        <video ref={(ref) => this.videoRef = ref} className="video" onEnded={() => this.setState({ isPlaying: false })}>
          <source src={this.props.url} type="video/mp4" />
        </video>
        <div className="video-btn-container">
          <button onClick={() => this.onClick()}>{btnText}</button>
        </div>
      </div >
    );
  };
}