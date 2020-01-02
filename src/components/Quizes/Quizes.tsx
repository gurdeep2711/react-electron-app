import React, { PureComponent } from 'react';
import Topics from '../Topics/Topics';
import { Topic } from '../../Models/Topics';
import { QUESTIONS } from '../../Models/Questions';
import Test from '../Test/Test';
import { ThemeContext } from '../../providers/theme';

export default class Quizes extends PureComponent {

  state = {
    STATE: 'topic'
  }
  testScore = {} as any;

  onTestStartEmit(selectedTopic: Topic): void {
    console.log(selectedTopic);
    this.setState({ STATE: 'test' });
  }

  onTestEndEmit(testScore: any): void {
    this.setState({ STATE: 'result' });
    this.testScore = testScore;
  }

  retake(): void {
    this.setState({ STATE: 'test' });
  }

  render() {
    return (
      <>
        {
          this.state.STATE === 'topic' ? (
            <Topics onTestStartEmit={(selectedTopic: Topic) => this.onTestStartEmit(selectedTopic)} />
          ) : null
        }
        {
          this.state.STATE === 'test' ? (
            <Test onTestEndEmit={(testScore: any) => this.onTestEndEmit(testScore)} questionsList={QUESTIONS} />
          ) : null
        }
        {
          this.state.STATE === 'result' ? (
            <ThemeContext.Consumer>
              {({ currentTheme }) => {
                return <>
                  <div className={`card-container ${currentTheme}`}>
                    <h1>Test Result:</h1>
                    <h3>Total Questions: {this.testScore.total}</h3>
                    <h3>Correct: {this.testScore.correct}</h3>
                    <h3>Wrong: {this.testScore.wrong}</h3>
                  </div>

                  <div className="btn-container center">
                    <button className={currentTheme} onClick={() => this.retake()}>
                      Retake Test
                    </button>
                  </div>
                </>
              }}
            </ThemeContext.Consumer>
          ) : null
        }
      </>
    )
  }
}