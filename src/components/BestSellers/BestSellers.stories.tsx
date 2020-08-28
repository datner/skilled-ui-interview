import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { BestSellers, BestSellersProps } from "./BestSellers";

export default {
	title: "Components/BestSellers",
	component: BestSellers,
	argTypes: {
		onClick: { action: "onClick" },
	},
} as Meta;

const Template: Story<BestSellersProps> = (args) => <BestSellers {...args} />;

export const Default = Template.bind({});
Default.args = {
	products: [
		{
			brand: "Nike",
			img:
				"https://s3-alpha-sig.figma.com/img/b744/8c8d/227cb7803cb86000746933f580388893?Expires=1599436800&Signature=K8dS6DcGRaYjzRZJLYV8o~~90hCDus15l9ubrOupk0V0lpTzbs82pEjVyehzRP8Jq47e7lnW8hUKS-tS4a5Rvs36IEotPbQVDA4PdUakG0xEKTp9zCbJ1t8ebHy9pqmf21JQVkbzyGKHxbJ2GbxjFxdyiZxO~EDEsx3G-yXA3FF~iCrAdP5v5FyeLonSJXWAvbWOwknuv3XGwWLH1TfQJyx6m4UE3mlydL7Jd8ezq9iS9oK7vL118m10hzaQlBJlauH1r3qEgTuxBd-M03Y2uyoJvXdsSFFyD-GL~7iKhloIm8bNY4zfhoksqP48xHygJNcvdBsEB3Zs1hDSm2AkGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Nike Air Max 270",
			price: 195.8,
		},
		{
			brand: "Nike",
			img:
				"https://s3-alpha-sig.figma.com/img/151e/4d2d/eec4e9c9a9ee5ab3ee80dd6a8f44fff4?Expires=1599436800&Signature=NnOBqkpK8fn06coEM2J1KHcH-CJfgW23V04861EGq7tCdot86KQ6wPFMd9cA~BpmPIdUjEhhUSEUtpBUCeergz057vsN8-aXgzCz4p46-MwLSY1Q6UonJG5IWiPb1VK2Vc6JDZ95YufzKuEo7kxFz-dMFJ3NfVw82y1-XPWhHIha4e9OLcgWNmrXCZ6R4N9u4j~2aLO~uFBvGztHJG2XoMRI-3Ge5D9WJu4ruKZePl4VfQZbGzg9Up3CdGdyMEQrnB6CnEtR8YHDiVMyasvnNEGjQ1eemPCPnkYFSG2CMPYuKwdGEi8iOzI58iketilCbD5~yBPtWkUP8UVCoIMTRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Nike Air Max 90",
			price: 195.8,
		},
		{
			brand: "Nike",
			img:
				"https://s3-alpha-sig.figma.com/img/c7e9/0f40/a3f1ea2ed4cc667afca12be7abccb86e?Expires=1599436800&Signature=dineMwehA-jlCwKTJ-SEGyMLiP6Yx6hwra5iuQJ4u4nCF-RRZfyr9h5Vnd9MPcyC2QpHPh6Px01sCxAWMW7YIoYVP-oVWkJZMEkQN42XlxxyQrRhTfhLtEL6OnUtNtfQzh4sL3KaVAPDC6iBqeuudFdYFOcE1Oqi7RDHLM5-MkSFPqT~aoXy9xESZDqb-VMqVWIWG6AFhuQotmaA4xOx89odsXLknwwISpVxR8uouiWcFIOsGTnVYsunl~LI6T0LjRn~VPmjnnQmI29yodRDvP~e8lfUjrmgU49JzKUp1~pmSxMrMj05t44SEEyAqWoFJwmvFmOwRL3wNbDH-WmwEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
			name: "Nike Air Max plus",
			price: 195.8,
		},
	],
};
