import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { BestSellers, BestSellersProps } from "./BestSellers";

export default {
	title: "Components/BestSellers",
	component: BestSellers,
} as Meta;

const Template: Story<BestSellersProps> = (args) => <BestSellers {...args} />;

export const Default = Template.bind({});
