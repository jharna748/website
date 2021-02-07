import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Wellness with Yoga
			</title>
			<meta name={"description"} content={"Wellness with Yoga"} />
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
				<Image width="256px" height="256px" src="https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/wellness%20with%20yog%20(6).png?v=2021-02-02T10:46:09.250Z" />
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
						All-round fitness is about flexibility, speed, stamina, strength and power. It is also about motivation, focus, concentration and alertness. Yoga helps in achieving emotional, mental and physical stability and tranquility in life.
					</Text>
				</Box>
			</Section>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/images%20(5).jpg?v=2021-01-28T08:21:59.647Z)"
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
					<Text margin="0px" color="#de0ad6">
						makes you alert, calm & focused
						<br />
						adds willpower, balance and patience
						<br />
						builds{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							endurance
						</Em>
						{" "}and{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							flexibility.
						</Em>
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#f94a0f">
						makes you sturdy and strong,{" "}
						<br />
						corrects poor posture,{" "}
						<br />
						improves and maintains body image{" "}
						<br />
						through{" "}
						<Em>
							consistency.
						</Em>
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#de0ad6">
						treats anxiety & depression,
						<br />
						brings about{" "}
						<Em>
							oneness
						</Em>
						{" "}of body and mind.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#0a68ec">
						asanas improve concentration and relieve tensions of the body and mind.
						<br />
						doing asanas with awareness and patience is{" "}
						<Em>
							dynamic meditation
						</Em>
						.
						<br />
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
					<Text font="20px --fontFamily-mono" color="#0c83f9">
						Hi!{" "}
						<br />
						I'm Ritu, teaching and learning yoga for last 2 decades
						<br />
						<br />
						.. love interacting with people of diverse ages and backgrounds, especially children and older people
						<br />
						<br />
						.. also a traveller, trekker, cyclist and always looking for good company around.{"\n\n"}
					</Text>
					<Text font="20px mono" color="#0cbf4f">
						.. full-time yoga teacher at Mayo College Girls' School (MCGS).
						<br />
						.. completed my M.A. in Yoga Education years ago,
						<br />
						.. a diploma in naturopathy (NDDY) from Gandhi National Academy of Naturopathy, Delhi.
						<br />
						.. certified in{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							karate
						</Em>
						,{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							reiki
						</Em>
						,{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							pranic healing
						</Em>
						,{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							ayurveda
						</Em>
						{" "}and{" "}
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							panchkarma
						</Em>
						{" "}(School of Ayurveda & Panchakarma).
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1612626256147-08018dd22040?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/vlcsnap-error422.png?v=2021-02-07T08:25:15.668Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/6003de9bdaacc2001e8f7c59/images/vlcsnap-error859.png?v=2021-02-07T08:23:56.047Z) center/cover" />
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