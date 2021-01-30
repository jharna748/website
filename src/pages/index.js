import React from "react";
import theme from "theme";
import { Theme, Link, Em, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
					text-decoration-line="underline"
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
		<Section padding="140px 0" sm-padding="40px 0" position="static" background="#ffffff">
			<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-11%20at%204.47.34%20PM.jpeg?v=2021-01-18T05:25:36.346Z) center/cover">
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
					<Text as="h2" font="--headline2" margin="0 0 12px 0" color="#f218bc">
						Yoga to attain excellence
					</Text>
					<Text font="--base" color="#1175da">
						All-round fitness is about flexibility, speed, stamina, strength and power. It is also about motivation, focus, concentration and alertness. Yoga helps in achieveing emotional, mental and physical stability and tranquility in life.
					</Text>
				</Box>
			</Section>
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
				asanas and pranayama
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--green"
				max-width="850px"
			>
				build mindfulness
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						makes you alert, calm & focused
						<br />
						add willpower, balance and patience
						<br />
						build endurance and strenth
						<br />
						make you sturdy and strong
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						make you sturdy and strong, correcting poor posture, helping improve body image through weight loss or weight gain, build flexibility.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						treat anxiety & depression
						<br />
						bring about oneness of body and mind.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						"What does containment and freedom look like in asana?  What patterns and sequence of patterns lead to silence? How can the pairing of opposites weave together into the seat of meditation? When the dialogue retracts towards center and the observer is consumed by listening what remains is great space and peace. Come join us in looking at the asana and pranayama practice from these vantage points. "

- https://www.yeeyoga.com/
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Override slot="SectionContent" background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box" />
			<Stack>
				<StackItem width="50%" lg-width="100%" background="#64b8b2">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						yoga and more...
					</Text>
					<Text
						as="h2"
						margin="12px 0"
						font="--headline2"
						md-font="--headline3"
						color="#831183"
					>
						asanas with mindfulness
					</Text>
					<Text font="28px --fontFamily-mono">
						Hi!{" "}
						<br />
						I'm Ritu, teaching and learning yoga for last 2 decades.
						<br />
						{"\n"}I love interacting with people of diverse ages and backgrounds, especially children and older people.{" "}
						<br />
						I'm also a traveller, trekker, cyclist and always looking for good company around.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-11%20at%204.58.43%20PM.jpeg?v=2021-01-17T07:26:15.986Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/ritu%20ji.jpeg?v=2021-01-30T06:51:05.642Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/WhatsApp%20Image%202021-01-11%20at%205.14.43%20PM.jpeg?v=2021-01-30T07:08:06.868Z) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="#ffffff">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--purple" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index">
					home
				</Override>
				<Override slot="link-therapies">
					therapies
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