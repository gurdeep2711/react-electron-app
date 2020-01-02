import React, { PureComponent } from 'react';
import './VideoPlayer.css';
import { ThemeContext } from '../../providers/theme';

interface VideoPlayerProps {
  url: any;
  title: string,
  description: string
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
      <ThemeContext.Consumer>
        {({ currentTheme }) => {
          return <>
            <div className={`video-container ${currentTheme}`}>
              <h2>{this.props.title}</h2>
              <h4>{this.props.description}</h4>
              <video ref={(ref) => this.videoRef = ref} className="video" onEnded={() => this.setState({ isPlaying: false })}>
                <source src={this.props.url} type="video/mp4" />
              </video>
              <div className="btn-container center">
                <button className={currentTheme} onClick={() => this.onClick()}>{btnText}</button>
              </div>
            </div>
          </>
        }}
      </ThemeContext.Consumer>
    );
  };
}