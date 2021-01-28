import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					color="#de0ad6"
				>
					Ritu Bhandari
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-404">
						testimonials
					</Override>
					<Override slot="link-index">
						home
					</Override>
					<Override slot="link-therapies">
						therapies
					</Override>
					<Override slot="link-travels">
						travels
					</Override>
				</Menu>
			</Box>
		</Section>
		<Image width="64px" height="64px" />
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-17%20at%202.54.44%20PM.jpeg?v=2021-01-18T05:23:18.490Z) center/cover" position="static">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline3" margin="0 0 12px 0" color="#117eeb">
					yoga and more
				</Text>
				<Text font="--base">
					I'm a full-time yoga teacher at Mayo College Girls School (MCGS), Ajmer.
				</Text>
			</Box>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Q&A
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What are my educational qualifications?
				</Text>
				<Text as="p" font="--base" margin="10px 0" color="--green">
					M.A. in Yoga/ Master of Yoga Education; M.A. in Economics;{" "}
					<br />
					PG Diploma in Landscape and Gardening Architecture from MDS University, Ajmer (1997);
					<br />
					Diploma in Naturopathy (NDDY) from Gandhi National Academy of Naturopathy, Delhi;
					<br />
					{" "}All India Karate Championship (2000);{" "}
					<br />
					Certified Reiki Master; Pranic Healer;{" "}
					<br />
					Participation certificate of National Yoga Conference organized at The Doon School, Dehradun (2013);{" "}
					<br />
					Training from School of Ayurveda & Panchakarma (2012)
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Why should we connect?
				</Text>
				<Text as="p" font="--base" margin="10px 0" color="--indigo">
					It all begins with inspiration. I'm an avid learner and I love interacting with people of diverse ages and backgrounds, especially children and older people. Trust my testimonials to know more.
					<br />
					{" "}I'm a traveller, trekker, cyclist and always looking for good company around.
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					How can we connect?
				</Text>
				<Text as="p" font="--base" margin="10px 0" color="--primary">
					{" "}I am happy to meet you and see you for yoga everyday on Zoom. Please write to me at{" "}
					<Link
						href="#"
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						r
					</Link>
					ituyoga@gmail.com
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline2"
						md-font="--headline2"
						color="--indigo"
					>
						Perseverant
						<br />
						Confident
						<br />
						Down to earth
						<br />
						Unconditionally supportive
						<br />
						Loyal
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="260px">
						Dr. Achala Arya.
					</Text>
				</StackItem>
				<StackItem md-width="100%" />
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});