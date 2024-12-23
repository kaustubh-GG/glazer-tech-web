import * as React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import {
	Container,
	Box,
	Stack,
	HStack,
	ButtonGroup,
	Button,
	Heading,
	Text,
	Wrap,
	Tag,
	VStack,
	useColorModeValue,
	SimpleGrid,
	useTheme,
	Spacer,
} from '@chakra-ui/react';
import {
	SiAmazonaws,
	SiDigitalocean,
	SiDocker,
	SiElasticsearch,
	SiFastapi,
	SiFigma,
	SiFlutter,
	SiGithub,
	SiGooglecloud,
	SiKubernetes,
	SiMicrosoftazure,
	SiMongodb,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiRazorpay,
	SiReact,
	SiRedis,
} from 'react-icons/si';
import { SEO } from 'components/seo/seo';

import { FallInPlace } from 'components/motion/fall-in-place';
import { Hero } from 'components/hero';
import { Br } from '@saas-ui/react';
import {
	FiArrowRight,
	FiBox,
	FiCode,
	FiCoffee,
	FiFlag,
	FiGrid,
	FiLock,
	FiSearch,
	FiSliders,
	FiSmile,
	FiTerminal,
	FiThumbsUp,
	FiToggleLeft,
	FiTrendingUp,
	FiUserPlus,
} from 'react-icons/fi';
import { Features } from 'components/features';
import { BackgroundGradient } from 'components/gradients/background-gradient';
import { Faq } from 'components/faq';
import { Pricing } from 'components/pricing/pricing';

import { Testimonial, Testimonials } from 'components/testimonials';

import faq from 'data/faq';
import testimonials from 'data/testimonials';
import pricing from 'data/pricing';

import { Highlights, HighlightsItem } from 'components/highlights';
import { Section, SectionTitle } from 'components/section';
import { transparentize } from '@chakra-ui/theme-tools';
import { COMPANY_NAME } from '../dynamicValues';

const Home: NextPage = () => {
	const theme = useTheme();

	return (
		<Box>
			<SEO
				title={COMPANY_NAME}
				description={`${COMPANY_NAME} is a platform for building your next big idea.`}
			/>
			<Box>
				<HeroSection />
				<HighlightsSection />
				<FeaturesSection />
				<TechnologySection />
				<TestimonialsSection />
				{/* <PricingSection /> */}
				<FaqSection />

				{/* <HStack px={12} py={24} bgGradient='linear(to-r, pink.200, purple.500)'>
					<Heading fontSize='4xl'>Get started with Atom X</Heading>
					<Text mt={2}>
						Atom X is a free and open source starter kit for building landing
					</Text>
				</HStack> */}
				<Box
					alignItems="flex-start"
					overflow="hidden"
					position="relative"
					p={12}
					maxW="1100px"
					m="auto"
					rounded="2xl"
				>
					<Box
						bgGradient={`linear(to-br, ${transparentize(
							'pink.200',
							0.8
						)(theme)}, ${transparentize(
							'purple.500',
							0.8
						)(theme)})`}
						opacity="1"
						position="absolute"
						inset="0px"
						pointerEvents="none"
						zIndex="0"
						_dark={{ opacity: 0.5, filter: 'blur(50px)' }}
					/>
					<HStack flexDirection={{ base: 'column', lg: 'row' }}>
						<Box>
							<Heading>Build Something Great</Heading>
							<Text
								mt={2}
								maxW="xl"
							>
								We help all entrepreneurs with their 1st version
								of tech at a very affordable rate so that they
								can launch their idea easily.
							</Text>
						</Box>
						<Spacer />
						<a
							href="https://in.bigin.online/org60035295032/forms/build-something-great"
							target="_blank"
						>
							<Button
								mt={{ base: 8, lg: 0 }}
								size="lg"
								colorScheme="purple"
								rightIcon={<FiArrowRight />}
							>
								Contact Us
							</Button>
						</a>
					</HStack>
				</Box>
			</Box>
		</Box>
	);
};

const HeroSection: React.FC = () => {
	return (
		<Box
			position="relative"
			overflow="hidden"
		>
			<BackgroundGradient height="100%" />
			<Container
				maxW="container.xl"
				pt={{ base: 40 }}
				pb="40"
			>
				<Stack
					direction={{ base: 'column', lg: 'row' }}
					alignItems="center"
				>
					<Hero
						id="home"
						justifyContent="flex-start"
						px="0"
						title={
							<FallInPlace>
								Build Beautiful
								<Br /> Software Faster
							</FallInPlace>
						}
						description={
							<FallInPlace
								delay={0.4}
								fontWeight="medium"
							>
								Easily build your apps / websites in weeks
								instead of months and scale to million users.
							</FallInPlace>
						}
					>
						<FallInPlace
							delay={0.8}
							mt={4}
						>
							<ButtonGroup
								spacing={4}
								alignItems="center"
							>
								<a
									href="https://in.bigin.online/org60035295032/forms/build-something-great"
									target="_blank"
								>
									<Button
										colorScheme="primary"
										size="lg"
									>
										Contact Us
									</Button>
								</a>
								{/* <ButtonLink
									size='lg'
									href='https://demo.saas-ui.dev'
									variant='outline'
									rightIcon={
										<Icon
											as={FiArrowRight}
											sx={{
												transitionProperty: 'common',
												transitionDuration: 'normal',
												'.chakra-button:hover &': {
													transform: 'translate(5px)',
												},
											}}
										/>
									}
								>
									View demo
								</ButtonLink> */}
							</ButtonGroup>
						</FallInPlace>
					</Hero>
					<Box
						height="600px"
						position="absolute"
						display={{ base: 'none', lg: 'block' }}
						left={{ lg: '60%', xl: '55%' }}
						width="80vw"
						maxW="1100px"
						margin="0 auto"
					>
						<FallInPlace delay={1}>
							<Box
								overflow="hidden"
								height="100%"
							>
								<Image
									src="/static/screenshots/list.png"
									layout="fixed"
									width={1200}
									height={762}
									alt="Screenshot of a ListPage in Saas UI Pro"
									quality="75"
									priority
								/>
							</Box>
						</FallInPlace>
					</Box>
				</Stack>
			</Container>

			<Features
				id="features"
				columns={[1, 2, 4]}
				iconSize={4}
				innerWidth="container.xl"
				pt="20"
				title="Features"
				features={[
					{
						title: 'Less development time',
						icon: FiSmile,
						description: 'Get your product to market faster.',
						iconPosition: 'left',
						delay: 0.6,
					},
					{
						title: 'Affordable pricing',
						icon: FiSliders,
						description: 'Reduce your development costs by 70%.',
						iconPosition: 'left',
						delay: 0.8,
					},
					{
						title: 'Highly scalable',
						icon: FiGrid,
						description: 'Scale to millions of users with ease.',
						iconPosition: 'left',
						delay: 1,
					},
					{
						title: 'Highly customisable',
						icon: FiThumbsUp,
						description: 'Customise your product to your needs.',
						iconPosition: 'left',
						delay: 1.1,
					},
					{
						title: 'Clean Code',
						icon: FiThumbsUp,
						description:
							'Clean code that is easy to understand and maintain.',
						iconPosition: 'left',
						delay: 1.2,
					},
					{
						title: 'Well Maintained',
						icon: FiThumbsUp,
						description:
							'Well maintained code that is easy to understand.',
						iconPosition: 'left',
						delay: 1.2,
					},
					{
						title: 'Fully Responsive',
						icon: FiThumbsUp,
						description:
							'Responsive code that works on all devices.',
						iconPosition: 'left',
						delay: 1.2,
					},
					{
						title: 'Support',
						icon: FiThumbsUp,
						description: 'Support for all your needs.',
						iconPosition: 'left',
						delay: 1.2,
					},
				]}
				reveal={FallInPlace}
			/>
		</Box>
	);
};

const HighlightsSection = () => {
	// const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react');

	return (
		<Highlights id="about-us">
			<HighlightsItem
				colSpan={[1, null, 3]}
				title="About us"
			>
				<VStack
					alignItems="flex-start"
					spacing="8"
				>
					<Text
						color="muted"
						fontSize="xl"
					>
						Data shows that almost ~95% of the entrepreneurs are not
						able to launch their 1st version of the idea due to the
						lack of technical knowledge or high amount of money
						needed to build the 1st version of their app/website.
						<p>
							{COMPANY_NAME} is a tech company with the aim to
							solve above problem.
						</p>
						<p>
							Our mission is to democratize software development,
							achieving 10x speed at almost 25% of the cost.
						</p>
						<p>
							We have developed a proprietary technology which can
							be used to deploy applications at much lower
							cost/time.
						</p>
						<p>
							Using our backend, you can easily build apps /
							websites in weeks instead of months and scale to
							million users.
						</p>
					</Text>

					{/* <Flex
						rounded='full'
						borderWidth='1px'
						flexDirection='row'
						alignItems='center'
						py='1'
						ps='8'
						pe='2'
						bg='primary.900'
						_dark={{ bg: 'gray.900' }}
					>
						<Box>
							<Text color='yellow.400' display='inline'>
								yarn add
							</Text>{' '}
							<Text color='cyan.300' display='inline'>
								@saas-ui/react
							</Text>
						</Box>
						<IconButton
							icon={hasCopied ? <FiCheck /> : <FiCopy />}
							aria-label='Copy install command'
							onClick={onCopy}
							variant='ghost'
							ms='4'
							isRound
							color='white'
						/>
					</Flex> */}
				</VStack>
			</HighlightsItem>
			{/* <HighlightsItem colSpan={[1, null, 3]} title='How we are doing it?'>
				<VStack alignItems='flex-start' spacing='8'>
					<Text color='muted' fontSize='xl'></Text>
				</VStack>
			</HighlightsItem> */}
			<HighlightsItem
				colSpan={[1, null, 3]}
				title="Start your next idea two steps ahead"
			>
				<Text
					color="muted"
					fontSize="lg"
				>
					With our inbuilt libraries, you will get access to many
					pre-built modules from day one. This will help you to reduce
					your development time significantly.
				</Text>
				<Wrap mt="8">
					{[
						'apis',
						'android app',
						'ios app',
						'website',
						'authentication',
						'settings',
						'documentation',
						'responsiveness',
						'analytics',
						'admin panel',
						'caching',
						'monitoring',
					]
						.sort()
						.map((value) => (
							<Tag
								key={value}
								variant="subtle"
								colorScheme="purple"
								rounded="full"
								px="3"
							>
								{value}
							</Tag>
						))}
				</Wrap>
			</HighlightsItem>
			{/* <HighlightsItem title='Solid foundations'>
				<Text color='muted' fontSize='lg'>
					We have selected the most productive tool in the market and build your
					idea on top of it. We use the latest technologies and best practices
					to make sure your product is fast, reliable and easy to maintain.
				</Text>
			</HighlightsItem> */}
			{/* <HighlightsTestimonialItem
				name='Renata Alink'
				description='Founder'
				avatar='/static/images/avatar.jpg'
				gradient={['pink.200', 'purple.500']}
			>
				“Saas UI helped us set up a beautiful modern UI in no time. It saved us
				hundreds of hours in development time and allowed us to focus on
				business logic for our specific use-case from the start.”
			</HighlightsTestimonialItem> */}
		</Highlights>
	);
};

const FeaturesSection = () => {
	return (
		<Features
			id="services"
			title={
				<Heading
					lineHeight="short"
					fontSize={['2xl', null, '4xl']}
					textAlign="left"
					as="p"
				>
					Our Services
				</Heading>
			}
			description={
				<>
					Software development is tough as its involve multiple steps
					and each step involves expertise in terms of technology and
					expertise. We understand that you being an entrepreneur,
					your core focus is on the business side. So, our solution
					includes full stack development with Infrastructure to
					innovate and scale with ease.
				</>
			}
			align="left"
			columns={[1, 2, 3]}
			iconSize={4}
			features={[
				{
					title: 'UI/UX Development',
					icon: FiBox,
					description:
						'Attractive and responsive design development.',
					variant: 'inline',
				},
				{
					title: 'Backend Development',
					icon: FiLock,
					description: 'Secure and scalable backend development.',
					variant: 'inline',
				},
				{
					title: 'Website Development',
					icon: FiSearch,
					description: 'Website development with SEO and analytics.',
					variant: 'inline',
				},
				{
					title: 'App Development',
					icon: FiUserPlus,
					description: 'App development for Android and iOS.',
					variant: 'inline',
				},
				{
					title: 'Admin Panel',
					icon: FiFlag,
					description: 'Manage your app with admin panel.',
					variant: 'inline',
				},
				{
					title: 'Cloud Infrastructure',
					icon: FiTrendingUp,
					description: 'Easy to scale cloud infrastructure setup.',
					variant: 'inline',
				},
				{
					title: 'Testing',
					icon: FiToggleLeft,
					description:
						'No compromise on quality. We test your app thoroughly.',
					variant: 'inline',
				},
				{
					title: 'Monitoring',
					icon: FiTerminal,
					description:
						'Always keep an eye on your app. We setup it for you.',
					variant: 'inline',
				},
				{
					title: 'Support',
					icon: FiCode,
					description: 'We are always there to help you.',
					variant: 'inline',
				},
			]}
		/>
	);
};

const TechnologySection = () => {
	const cardBg = useColorModeValue('gray.50', 'gray.700');
	return (
		<Section id="tech">
			<SectionTitle
				title="Focus on solving bigger problems"
				description={
					<>
						We don&apos;t like to re-invent the wheel, neither
						should you. We selected the most productive and
						established tech stack from the ecosystem and build on
						top of it so that you can launch your idea in the least
						time possible. Some of our key tech stack are -
					</>
				}
			></SectionTitle>

			<SimpleGrid
				columns={{ base: 2, lg: 4, xl: 6 }}
				spacing={4}
			>
				{[
					{
						title: 'Python',
						icon: SiPython,
						href: 'https://www.python.org/',
					},
					{
						title: 'FastAPI',
						icon: SiFastapi,
						href: 'https://fastapi.tiangolo.com/',
					},
					{
						title: 'React',
						icon: SiReact,
						href: 'https://reactjs.org/',
					},
					{
						title: 'Next.js',
						icon: SiNextdotjs,
						href: 'https://nextjs.org/',
					},
					{
						title: 'MongoDB',
						icon: SiMongodb,
						href: 'https://www.mongodb.com/',
					},
					{
						title: 'PostgreSQL',
						icon: SiPostgresql,
						href: 'https://www.postgresql.org/',
					},
					{
						title: 'Docker',
						icon: SiDocker,
						href: 'https://www.docker.com/',
					},
					{
						title: 'Flutter',
						icon: SiFlutter,
						href: 'https://flutter.dev/',
					},
					{
						title: 'AWS',
						icon: SiAmazonaws,
						href: 'https://aws.amazon.com/',
					},
					{
						title: 'GCP',
						icon: SiGooglecloud,
						href: 'https://cloud.google.com/',
					},
					{
						title: 'Azure',
						icon: SiMicrosoftazure,
						href: 'https://azure.microsoft.com/',
					},
					{
						title: 'DigitalOcean',
						icon: SiDigitalocean,
						href: 'https://www.digitalocean.com/',
					},
					{
						title: 'Github',
						icon: SiGithub,
						href: 'https://github.com/',
					},
					{
						title: 'Elaticsearch',
						icon: SiElasticsearch,
						href: 'https://www.elastic.co/elasticsearch/',
					},
					{
						title: 'Redis',
						icon: SiRedis,
						href: 'https://redis.io/',
					},
					{
						title: 'Retool',
						icon: FiCoffee,
						href: 'https://retool.com/',
					},
					{
						title: 'Razorpay',
						icon: SiRazorpay,
						href: 'https://razorpay.com/',
					},
					{
						title: 'Figma',
						icon: SiFigma,
						href: 'https://www.figma.com/',
					},
				].map((item, i) => {
					return (
						<a
							href={item.href}
							key={i}
							target="_blank"
							rel="noreferrer"
						>
							<VStack
								px={4}
								py={6}
								bg={cardBg}
								rounded="xl"
								spacing={4}
							>
								<Box>
									<item.icon size={40} />
								</Box>
								<Text size="md">{item.title}</Text>
							</VStack>
						</a>
					);
				})}
			</SimpleGrid>
		</Section>
	);
};

const TestimonialsSection = () => {
	const columns = React.useMemo(() => {
		return testimonials.items.reduce<Array<typeof testimonials.items>>(
			(columns, t, i) => {
				columns[i % 3].push(t);

				return columns;
			},
			[[], [], []]
		);
	}, []);

	return (
		<Testimonials
			title={testimonials.title}
			columns={[1, 2, 3]}
			innerWidth="container.xl"
		>
			<>
				{columns.map((column, i) => (
					<Stack
						key={i}
						spacing="8"
					>
						{column.map((t, i) => (
							<Testimonial
								key={i}
								role={''}
								avatar=""
								{...t}
							/>
						))}
					</Stack>
				))}
			</>
		</Testimonials>
	);
};

const PricingSection = () => {
	return (
		<Pricing {...pricing}>
			<Text
				p="8"
				textAlign="center"
				color="muted"
			>
				VAT may be applicable depending on your location.
			</Text>
		</Pricing>
	);
};

const FaqSection = () => {
	return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
	return {
		props: {
			announcement: {},
		},
	};
}
