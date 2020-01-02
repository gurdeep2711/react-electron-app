import React, { PureComponent } from 'react';
import './Topics.css';
import { TOPIC_LIST, Topic } from '../../Models/Topics';
import { ThemeContext } from '../../providers/theme';

interface TopicsProps {
  onTestStartEmit: Function;
}

export default class Topics extends PureComponent<TopicsProps> {
  state = {
    selectedTopic: {} as Topic
  }
  TOPIC_LIST = TOPIC_LIST;

  onTopicClick(topic: Topic): void {
    this.setState({ selectedTopic: topic })
  }

  onTestStart(): void {
    this.props.onTestStartEmit(this.state.selectedTopic);
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ currentTheme }) => {
          return <>
            <div className={`table ${currentTheme}`}>
              <div className={`table-header ${currentTheme}`}>
                <div className="table-cell" style={{ maxWidth: '80px' }}>S NO.</div>
                <div className="table-cell">Topic Name</div>
                <div className="table-cell">Description</div>
              </div>
              {
                this.TOPIC_LIST.map((topic: Topic) => {
                  return (
                    <div className={`table-body boder-bottom ${this.state.selectedTopic.id === topic.id ? `topic-selected` : ''}`} key={topic.id} onClick={() => this.onTopicClick(topic)}>
                      <div className="table-cell" style={{ maxWidth: '80px' }}> {topic.id}. </div>
                      <div className="table-cell"> {topic.heading} </div>
                      <div className="table-cell"> {topic.desc} </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="btn-container center">
              <button className={currentTheme} disabled={!this.state.selectedTopic.id ? true : false} onClick={() => this.onTestStart()}>Start Test</button>
            </div>
          </>
        }}
      </ThemeContext.Consumer>

    );
  };
}