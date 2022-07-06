import React, { Component } from "react";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";

export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100 ));
  };

  render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		const objKey = Object.keys(this.state);
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification> There is no feedback
						</Notification>
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</>
		);
	}
}
