import Button from "./Button";

const config = {
	title: "Components/Button",
	component: Button,
};

export default config;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: <>Hello</>,
};
