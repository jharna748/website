import React from "react";
import theme from "theme";
import { Theme, Link, Em, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"therapies"} />
		<Helmet>
			<title>
				Ritu Bhandari
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
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					color="#de0ad6"
				>
					<Em>
						yog with ritu bhandari
					</Em>
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
					<Override slot="link-index">
						home
					</Override>
					<Override slot="link-404">
						testimonials
					</Override>
					<Override slot="link-therapies">
						therapies
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section
			background="--color-lightD1 url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/images%20(3).jpg?v=2021-01-28T08:22:42.895Z) center/cover no-repeat"
			padding="64px 0"
			sm-padding="40px 0"
			color="--primary"
			font="--base"
		>
			<Section
				padding="60px 0"
				sm-padding="40px 0"
				min-height="600px"
				sm-min-height="auto"
				background="--color-light"
				display="flex"
				flex-direction="column"
			>
				<Section padding="100px 0" sm-padding="40px 0">
					<Override slot="SectionContent" align-items="center" />
					<Text
						as="h2"
						font="--headline2"
						md-font="--headline2"
						margin="20px 0 0 0"
						color="#1bbbf3"
					>
						asanas & pranayama
					</Text>
					<Text as="p" font="--headline3" margin="20px 0 0 0" color="#bc01ff">
						corrects poor posture,
						<br />
						builds your strength
						<br />
						builds focus & motivation,
						<br />
						treats anxiety & depression,
						<br />
						builds a better body-image.
					</Text>
				</Section>
				<Section
					background="--color-darkL2 url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-11%20at%204.58.43%20PM.jpeg?v=2021-01-17T07:26:15.986Z) center/cover"
					padding="64px 0"
					sm-padding="40px 0"
					color="--light"
					font="--base"
				>
					<Stack>
						<StackItem width="75%" lg-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
								therapies
							</Text>
							<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
								yoga is for everybody
								<br />
								and everything.
							</Text>
						</StackItem>
					</Stack>
				</Section>
				<Stack>
					<StackItem width="75%" lg-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							panchkarma
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							panchkarma is for cleansing, detox and purification.
						</Text>
						<Text>
							Ayurveda and{" "}
							<Em>
								panchkarma{" "}
							</Em>
							teach that the balance of three subtle energies,{" "}
							<Em>
								vata
							</Em>
							,{" "}
							<Em>
								pitta
							</Em>
							, and{" "}
							<Em>
								kapha
							</Em>
							, maintain health. These energies account for all forms of matter (
							<Em>
								kapha
							</Em>
							), the force and direction they move (
							<Em>
								vata
							</Em>
							), and the transformations they go through (
							<Em>
								pita
							</Em>
							).{"\n"}
							<Em>
								ayurveda
							</Em>
							{" "}brings these forces into harmony to promote physical, emotional and spiritual growth.
							<br />
							<br />
							<br />
							<Em>
								panchkarma
							</Em>
							{" "}is based on the theory that the whole universe is composed of the five elements - air, water, earth, fire and ether (sky). It is a detox and purification method for the fleshing out of the stagnant and abnormally accumulated metabolites and endotoxins, thereby making the system clean and fresh.
						</Text>
					</StackItem>
				</Stack>
			</Section>
			<Section
				background="--color-darkL2 url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-11%20at%204.47.34%20PM.jpeg?v=2021-01-18T05:25:36.346Z) center/cover"
				padding="64px 0"
				sm-padding="40px 0"
				color="--light"
				font="--base"
			>
				<Stack>
					<StackItem width="75%" lg-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							reiki is for healing.
						</Text>
					</StackItem>
				</Stack>
			</Section>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			color="#000000"
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
				color="#b03030"
			>
				<Override slot="link" text-decoration="none" color="--primary" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" color="#130303" />
				<Override slot="link-index">
					home
				</Override>
				<Override slot="link-therapies">
					therapies
				</Override>
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				rituyoga08@gmail.com
			</Link>
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