/**
 * @param {import('react').AllHTMLAttributes} props
 * @returns {import('react').ReactElement}
 */
export default function Cta({ children, ...rest }) {
	return (
		<button type="button" {...rest}>
			{children}
		</button>
	);
}
