import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"therapies"} />
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
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
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
			</Section>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						panchkarma
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						panchkarma is for cleansing.
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
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						reiki
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						reiki is for healing.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#1bbbf3"
			>
				asana & pranayama
			</Text>
			<Text as="p" font="--headline3" margin="20px 0 0 0" color="#bc01ff">
				correct poor posture,
				<br />
				build your strength
				<br />
				build focus & motivation,
				<br />
				treat anxiety & depression,
				<br />
				build a better body-image.
				<br />
				<br />
				{"    "}...relax and meditate...
			</Text>
			<Button font="--lead" margin="20px">
				Contact me to know more.
			</Button>
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