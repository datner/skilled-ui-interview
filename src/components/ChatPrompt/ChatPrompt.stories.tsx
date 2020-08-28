import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ChatPrompt, ChatPromptProps } from "./ChatPrompt";

export default {
	title: "Components/ChatPrompt",
	component: ChatPrompt,
	argTypes: {
		onReply: { action: "onReply" },
		onClose: { action: "onClose" },
	},
} as Meta;

const Template: Story<ChatPromptProps> = (args) => <ChatPrompt {...args} />;

export const Default = Template.bind({});
Default.args = {
	img: "https://via.placeholder.com/48",
	name: "Emily Drouger",
	message: "Hi there.👋 We use Boards to share initial goals and ideas.",
	job: "Developer",
};
