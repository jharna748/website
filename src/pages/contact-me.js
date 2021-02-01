import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Icon, Text, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact-me"} />
		<Helmet>
			<title>
				Contact
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
				<Image width="256px" height="256px" src="https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/wellness%20with%20yog%20(3).png?v=2021-02-01T15:08:30.635Z" />
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
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/images%20(5).jpg?v=2021-01-28T08:21:59.647Z)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
							color="#037bf2"
						/>
						<Text as="h4" margin="6px 0" font="--base" color="#037bf2">
							My hometown and city where I live
						</Text>
						<Text as="p" margin="6px 0" font="--headline3" color="#ed0ab4">
							Ajmer, Rajasthan
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
							color="#037bf2"
						/>
						<Text as="h4" margin="6px 0" font="--base" color="#037bf2">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--green">
								rituyoga08@gmail.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
							color="#037bf2"
						/>
						<Text as="h4" margin="6px 0" font="--base" color="#037bf2">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3" color="#f00df0">
							+91 9828253871
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-purple"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							leave us a message:
						</Text>
						<Formspree endpoint="https://formspree.io/f/xgepqwbl" completeText="Thank you. Your message has been received." errorMessage="Something went wrong. Please try again.">
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-primary">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
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