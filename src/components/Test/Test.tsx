import React, { PureComponent } from 'react';
import './Test.css';
import { Question } from '../../Models/Questions';
import { ThemeContext } from '../../providers/theme';

interface TestProp {
  questionsList: any,
  onTestEndEmit: Function
}

export default class Test extends PureComponent<TestProp> {
  QUESTIONS_LIST = this.props.questionsList;
  state = {
    currQuestion: {} as Question,
    currQuesCounter: 0,
    timer: 0,
    selectedAnswer: [] as any
  }
  testScore = {
    correct: 0,
    wrong: 0,
    total: this.props.questionsList.length
  };
  private _SET_INTERVAL: any;

  componentDidMount() {
    this._getSingleQuestion();
    this._SET_INTERVAL = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    if (this._SET_INTERVAL) {
      clearInterval(this._SET_INTERVAL);
    }
  }

  onOptionClick(optionIndex: any): void {
    if (this.state.selectedAnswer.indexOf(optionIndex) !== -1) return;
    this.setState({
      selectedAnswer: [...this.state.selectedAnswer, optionIndex]
    });
  }

  private submitAnswer(): void {
    if (this.state.selectedAnswer.length === this.state.currQuestion.correct.length) {
      let isCorrect = false;
      this.state.currQuestion.correct.map((correctAnsIndex: any) => {
        if (this.state.selectedAnswer.includes(this.state.currQuestion.options[correctAnsIndex])) {
          isCorrect = true;
        } else {
          isCorrect = false;
        }
        return correctAnsIndex;
      });
      if (isCorrect) {
        this.testScore.correct++;
      } else {
        this.testScore.wrong++;
      }
    } else {
      this.testScore.wrong++;
    }
    this._getSingleQuestion();
  }

  private _getSingleQuestion(): void {
    if (this.state.currQuesCounter >= this.QUESTIONS_LIST.length) {
      this.props.onTestEndEmit(this.testScore);
    } else {
      const currQues = this.QUESTIONS_LIST[this.state.currQuesCounter];
      this.setState({
        currQuestion: currQues,
        selectedAnswer: []
      }, () => {
        this.setState({ currQuesCounter: this.state.currQuesCounter + 1 });
      });
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ currentTheme }) => {
          return <>
            <div className={`test-container ${currentTheme}`}>
              <div className="test-timer-counter-container">
                <div>Questions: {this.state.currQuesCounter}/{this.QUESTIONS_LIST.length}</div>
                <div>Timer: {this.state.timer}s</div>
              </div>
              <div className={`card-container ${currentTheme}`}>
                <h2>{this.state.currQuestion.caption}</h2>
                <h4>{this.state.currQuestion.question}</h4>
                {this.state.currQuestion.options ?
                  (
                    <div className={`test-option-container ${currentTheme}`}>
                      {
                        this.state.currQuestion.options.map((option) => {
                          return (
                            <div className={`test-option ${this.state.selectedAnswer.indexOf(option) !== -1 ? 'selected' : ''}`}
                              key={option}
                              onClick={() => this.onOptionClick(option)}>
                              {option}
                            </div>
                          )
                        })
                      }
                    </div>
                  ) : null}
              </div>
            </div>

            <div className="btn-container center">
              <button className={currentTheme} disabled={!this.state.selectedAnswer.length ? true : false}
                onClick={() => this.submitAnswer()}>
                Submit
          </button>
            </div>
          </>
        }}
      </ThemeContext.Consumer>
    );
  };
}