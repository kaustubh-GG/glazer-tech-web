import { COMPANY_NAME } from '../dynamicValues';

export default {
	title: 'Loved by people',
	items: [
		{
			name: 'Pragya Mittal',
			description: 'Founder, Evify',
			avatar: 'https://pbs.twimg.com/profile_images/1470742164024008706/k-eXHtu0_normal.jpg',
			children: (
				<>
					Working with { COMPANY_NAME } helped us to produce high quality
					dashboard app and internal tools without a lot of design
					skills. The ROI is really amazing.
				</>
			),
		},
		{
			name: 'Puneet Mittal',
			description: 'Founder, Magicrete',
			children: (
				<>
					{ COMPANY_NAME } enabled us to build beautiful and functional UI super
					fast. The components are very well thought out and it saved
					us 100 hours of work.
				</>
			),
		},
		{
			name: 'Anand Mishra',
			description: 'Founder, Thryl',
			children: (
				<>
					{ COMPANY_NAME } gave us a perfect starting point for our project,
					having the storybooks already set up with beautifully
					crafted components and fully mocked pages was a treat.
				</>
			),
		},
	],
};
