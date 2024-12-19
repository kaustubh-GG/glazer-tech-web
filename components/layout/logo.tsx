import * as React from 'react';
import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react';
import { Link } from '@saas-ui/react';
import techlogo from '../../public/techlogo.png'

export interface LogoProps {
	href?: string;
	onClick?: () => void;
}

import siteConfig from 'data/config';
import Image from 'next/image';

export const Logo = ({ href = '/', onClick }: LogoProps) => {
	let logo;
	if (siteConfig.logo) {
		logo = (
			<Box
				as={siteConfig.logo}
				height="32px"
				mt="-4px"
			/>
		);
	} else {
		logo = (
			<Heading
				as="h1"
				size="md"
			>
				{siteConfig.seo?.title}
			</Heading>
		);
	}

	return (
		<Flex
			h="8"
			flexShrink="0"
			alignItems="center"
			onClick={() => {
				if (onClick) onClick();
			}}
		>
			<Link href={href} display='flex' p='1' borderRadius='sm'>
				{/* {logo} */}
				<VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
			</Link>
			<div>
				<Link
					href="/"
					// onClick={onCloseButtonClick}
				>
					<Image
						height={10}
						width={160}
						src={techlogo}
						alt="Tech Logo"
						className=" "
					/>
					{/* <div className="bg-[url('/techlogo.png')] mt-1  bg-contain bg-no-repeat w-40 h-9"></div> */}
				</Link>
			</div>
			{/* <Heading>Glazer Tech</Heading> */}
		</Flex>
	);
};
