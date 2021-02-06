import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Testimonials
			</title>
			<meta name={"description"} content={"Yoga Teacher's website"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/images%20(5).jpg?v=2021-01-28T08:21:59.647Z"} />
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
				<Image
					width="64px"
					height="64px"
					src="https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/wellness%20with%20yog%20(6).png?v=2021-02-02T10:46:09.250Z"
					min-width="256px"
					min-height="256px"
				/>
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
					<Override slot="link-index">
						home
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-11%20at%205.13.22%20PM.jpeg?v=2021-01-17T07:15:03.710Z) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					dr. achala arya
				</Text>
				<Text as="h2" font="--headline3" margin="0 0 12px 0" color="#107eec">
					Perseverant
Confident{"\n"}
					<br />
					Down-to- earth
Unconditionally supportive{"\n"}
					<br />
					Loyal
				</Text>
				<Text font="--base" />
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				manu chhabra, ajmer
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline3"
				md-font="--headline2"
				color="--green"
				max-width="850px"
			>
				Hi, my name is Manu Chhabra. I joined Ritu Ma'am's yoga class two months back. I'm a Rheumatoid Arthritis patient. I have undergone three replacement surgeries. Although I could move around without difficulty, yet there were many things I was scared of even trying out. Ritu Ma'am's positive words, motivation and yoga has instilled much needed optimism in me. I'm extremely satisfied and happy with her work.{"\n\n"}
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				sasha mosky, canada
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline3"
				md-font="--headline2"
				color="--primary"
				max-width="850px"
			>
				Ritu's approach to teaching is rooted in compassion, kindness, and exploration. Through yoga sessions with Ritu, I have developed both physical and mental confidence, strength, and flexibility. Ritu approaches teaching with patience, humour, and encourages her students to try new things while also respecting limits and boundaries. She is thoughtful, dedicated to her practice, and I have learned a lot from her since we first met in 2017. Thank you Ritu!{"\n\n"}
			</Text>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			color="#ffffff"
			background="#ffffff"
		>
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--green" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-therapies">
					therapies
				</Override>
				<Override slot="link-index">
					home
				</Override>
			</Menu>
			<Link
				href="mailto:rituyoga08@gmail.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				rituyoga08@gmail.com
			</Link>
		</Section>
		<Section />
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