import React, { Component } from 'react';

import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  changeState = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // handleIncrementGood = event => {
  //   this.setState({
  //     good: this.state.good + 1,
  //     // total: this.state.total + 1,
  //   });
  // };

  // handleIncrementNeutral = () => {
  //   this.setState({
  //     neutral: this.state.neutral + 1,
  //     // total: this.state.total + 1,
  //   });
  // };

  // handleIncrementBad = () => {
  //   this.setState({
  //     bad: this.state.bad + 1,
  //     // total: this.state.total + 1,
  //   });
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good * 100) / totalFeedback)
      : 0;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.changeState}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

/* <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button> */
