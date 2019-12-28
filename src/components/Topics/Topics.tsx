import React, { PureComponent } from 'react';
import './Topics.css';
import { TOPIC_LIST } from '../../Models/Topics';

interface topic {
  id: number;
  heading: string;
  desc: string;
}

export default class Topics extends PureComponent {
  state = {
    selectedTopic: null
  }
  TOPIC_LIST = TOPIC_LIST;

  onTopicClick(topic: topic): void {
    console.log(topic);
    this.setState({ selectedTopic: topic.id })
  }

  render() {
    return (
      <div className="table">
        <div className="table-header">
          <div className="table-cell" style={{ maxWidth: '80px' }}>S NO.</div>
          <div className="table-cell">Topic Name</div>
          <div className="table-cell">Description</div>
        </div>
        {
          this.TOPIC_LIST.map((topic: topic) => {
            return (
              <div className={`table-body boder-bottom ${this.state.selectedTopic === topic.id ? `topic-selected` : ''}`} key={topic.id} onClick={() => this.onTopicClick(topic)}>
                <div className="table-cell" style={{ maxWidth: '80px' }}> {topic.id}. </div>
                <div className="table-cell"> {topic.heading} </div>
                <div className="table-cell"> {topic.desc} </div>
              </div>
            )
          })
        }
      </div>
    );
  };
}