import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
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
		<Section padding="140px 0" sm-padding="40px 0" position="static">
			<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/ritu%20ji.jpeg?v=2021-01-30T06:51:05.642Z) center/cover">
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
			<Section color="--dark" background="linear-gradient(0deg,rgba(0,0,0,0) 100%,#ffffff 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/images%20(3).jpg?v=2021-01-28T08:22:42.895Z) 0% 0% /auto repeat scroll padding-box" opacity="0.7" />
			<Section
				padding="60px 0"
				sm-padding="40px 0"
				background="--color-light"
				display="flex"
				flex-direction="column"
			>
				<Box
					margin="36px 0 0 0"
					padding="0 0 0 54px"
					sm-padding="54px 0 0 0"
					position="relative"
					max-width="800px"
				>
					<Text as="p" font="--headline3" margin="10px 0" color="--orange">
						I love interacting with people of diverse ages and backgrounds, especially children and older people.{" "}
						<br />
						I'm also a traveller, trekker, cyclist and always looking for good company around.
					</Text>
				</Box>
			</Section>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
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
					<Button text-align="left">
						Contact Me
					</Button>
					<Input />
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Text font="16px " />
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