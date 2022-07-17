import { useState } from "react";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const leaveFeedback = option => {
		switch (option) {
			case 'good':
				setGood(state => state + 1);
				break;
			case 'neutral':
				setNeutral(state => state + 1);
				break;
			case 'bad':
				setBad(state => state + 1);
				break;
			default:
				break;
		}
	};

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};
	
	const total = countTotalFeedback();

	const countPositiveFeedbackPercentage = () => {
		return (Math.round( good / total * 100));
	};

	const positivePercentage = countPositiveFeedbackPercentage();
		
	return (
		<>
			<Section title="Please leave feedback">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={leaveFeedback} />
			</Section>

			{total === 0 ? (
				<Notification>
					There is no feedback
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
};

