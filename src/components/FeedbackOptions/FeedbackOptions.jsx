import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
                <Button
                    key={option}
                    type="button"
                    name={option}
                    onClick={() => onLeaveFeedback(option)}>{option}
				</Button>
			))}
		</>
	);
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}