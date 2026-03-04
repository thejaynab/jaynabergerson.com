import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
	nodes: {
		document: {
			...nodes.document, // Apply defaults for other options
			render: undefined, // default 'article'
		},
		heading: {
			attributes: {
				...nodes.heading.attributes, // Use the correct base attributes for a heading
				// Additional custom attributes if needed
				title: { type: String, render: "title" },
				level: { type: Number, render: "level" },
			},
			render: component("./src/components/primitives/Title.astro"),
		},
		link: {
			render: "a",
			attributes: {
				href: { type: String },
				target: { type: String, default: "_blank" },
				rel: { type: String, default: "noopener noreferrer" },
			},
		},
	},
	tags: {
		Container: {
			attributes: {
				class: { type: String, render: "class" },
			},
			children: ["*"],
			render: component("./src/components/primitives/Container.astro"),
		},
		ContainerFluid: {
			attributes: {
				class: { type: String, render: "class" },
			},
			children: ["*"],
			render: component("./src/components/primitives/ContainerFluid.astro"),
		},
		Prose: {
			attributes: {
				class: { type: String, render: "class" },
			},
			children: ["*"],
			render: component("./src/components/primitives/Prose.astro"),
		},
		Flex: {
			attributes: {
				class: { type: String, render: "class" },
				direction: { type: String, render: "direction" },
				verticalAlign: { type: String, render: "verticalAlign" },
				horizontalAlign: { type: String, render: "horizontalAlign" },
				itemsAlignment: { type: String, render: "itemsAlignment" },
				gap: { type: Number, render: "gap" },
				wrap: { type: Boolean, render: "wrap" },
			},
			children: ["*"],
			render: component("./src/components/primitives/Flex.astro"),
		},
		Hero: {
			attributes: {
				label: { type: String, render: "label" },
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				buttons: { type: Array, render: "buttons", required: true },
			},
			render: component("./src/components/sections/Hero.astro"),
		},
		BlogLatest: {
			attributes: {
				pretitle: { type: String, render: "pretitle" },
				title: { type: String, render: "title", required: true },
				buttons: { type: Array, render: "buttons" },
			},
			render: component("./src/components/sections/BlogLatest.astro"),
		},
		LogoCloud: {
			attributes: {
				title: { type: String, render: "title", required: true },
				logos: { type: Array, render: "logos", required: true },
			},
			render: component("./src/components/sections/LogoCloud.astro"),
		},
		Services: {
			attributes: {
				title: { type: String, render: "title", required: true },
				services: { type: Array, render: "services", required: true },
			},
			render: component("./src/components/sections/Services.astro"),
		},
		RecentWork: {
			attributes: {
				pretitle: { type: String, render: "pretitle" },
				title: { type: String, render: "title", required: true },
				buttons: { type: Array, render: "buttons", required: true },
			},
			render: component("./src/components/sections/RecentWork.astro"),
		},
		Recommendation: {
			attributes: {
				pretitle: { type: String, render: "pretitle" },
				title: { type: String, render: "title" },
				recommendations: { type: Array, render: "recommendations", required: true },
			},
			render: component("./src/components/sections/Recommendation.astro"),
		},
		Results: {
			attributes: {
				title: { type: String, render: "title", required: true },
				results: { type: Array, render: "results", required: true },
				buttonText: { type: String, render: "buttonText" },
				buttonHref: { type: String, render: "buttonHref" },
			},
			render: component("./src/components/sections/Results.astro"),
		},
		About: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				content: { type: String, render: "content", required: true },
			},
			render: component("./src/components/sections/About.astro"),
		},
		Works: {
			attributes: {},
			render: component("./src/components/sections/Works.astro"),
		},
		News: {
			attributes: {},
			render: component("./src/components/sections/News.astro"),
		},
		Contact: {
			attributes: {
				title: { type: String, render: "title", required: true },
				fields: { type: Array, render: "fields", required: true },
			},
			render: component("./src/components/sections/Contact.astro"),
		},
		Gallery: {
			attributes: {
				folder: { type: String, render: "folder", required: true },
				exclude: { type: String, render: "exclude" },
				layout: { type: String, render: "layout" },
				alts: { type: String, render: "alts" },
			},
			render: component("./src/components/sections/Gallery.astro"),
		},
		WorkTLDR: {
			attributes: {
				items: { type: Array, render: "items", required: true },
			},
			render: component("./src/components/sections/WorkTLDR.astro"),
		},
		PasswordGate: {
			children: ["*"],
			render: component("./src/components/sections/PasswordGate.astro"),
		},
	},
});
