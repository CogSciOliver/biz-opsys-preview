export const demoBusiness = {
	name: "Raw Body Essentials",
	location: "Long Island · NYC · Dallas · Austin",
	tagline: "Body care, sculpting, skin rituals, and wellness support.",
	heroTitle: "A modern operating system for a body treatment studio.",
	heroDescription:
		"Public website, consultation requests, client tools, appointment intake, product guidance, communications, and admin reporting in one branded Raw Body experience.",
};

export const serviceCategories = [
	{
		id: "body-treatment",
		name: "Body Treatment Studio",
		description:
			"Body sculpting, lymphatic care, massage, facials, consultations, and natural at-home care.",
	},
	{
		id: "consultation-first",
		name: "Consultation-First Booking",
		description:
			"Help clients choose the right service, location, and ritual before confirming care.",
	},
	{
		id: "product-care",
		name: "At-Home Product Support",
		description:
			"Natural body, hair, skin, nail, and tool recommendations connected to client goals.",
	},
];

export const servicePaths = [
	{
		id: "body-sculpting",
		title: "Body Sculpting",
		line: "Non-invasive support for shape, tone, and body goals.",
		href: "/website/services/body-sculpting",
	},
	{
		id: "lymphatic-sculpting",
		title: "Lymphatic Sculpting",
		line: "Hands-on care for flow, recovery, and a lighter body feel.",
		href: "/website/services/lymphatic-sculpting",
	},
	{
		id: "massage",
		title: "Massage",
		line: "Restorative bodywork for tension, calm, and release.",
		href: "/website/services/massage",
	},
	{
		id: "facials",
		title: "Facials",
		line: "Plant-forward skin rituals for glow, clarity, and care.",
		href: "/website/services/facials",
	},
];

export const consultationOptions = [
	{
		id: "phone",
		title: "Phone Consultation",
		description:
			"Talk through your body goals, schedule, location, and treatment questions before choosing a service.",
	},
	{
		id: "text",
		title: "Text Consultation",
		description:
			"Quick support for simple questions, product guidance, service fit, and next-step booking.",
	},
	{
		id: "zoom",
		title: "Zoom Consultation",
		description:
			"A face-to-face planning session for treatment goals, at-home care, and multi-service support.",
	},
	{
		id: "in-person",
		title: "In-Person Consultation",
		description:
			"Meet in studio or at a popup location to choose the right body-care path before treatment.",
	},
];

export const locations = [
	{
		id: "long-island",
		title: "Long Island",
		status: "Home base",
		description:
			"Body care, sculpting, lymphatic work, facials, consultations, and product support by appointment.",
	},
	{
		id: "nyc",
		title: "New York City",
		status: "Popup / mobile",
		description:
			"Rotating care days for consultations, treatments, and client follow-up when dates are open.",
	},
	{
		id: "dallas",
		title: "Dallas",
		status: "Popup / touring",
		description:
			"Texas-based booking windows for body goals consultations, sculpting, massage, and care planning.",
	},
	{
		id: "austin",
		title: "Austin",
		status: "Popup / touring",
		description:
			"Seasonal popup care for clients who want treatment planning, bodywork, and at-home ritual support.",
	},
];

export const productCategories = [
	{
		id: "body-oils",
		title: "Body Oils",
		kicker: "Daily ritual",
		description:
			"Plant-forward oils for body care, massage prep, glow, moisture, and between-session support.",
	},
	{
		id: "body-tools",
		title: "Body Tools",
		kicker: "At-home care",
		description:
			"Tools for simple daily rituals, body awareness, soft-tissue support, and maintenance between appointments.",
	},
	{
		id: "skin-care",
		title: "Skin Care",
		kicker: "Facial support",
		description:
			"Gentle skin-care products selected around hydration, glow, clarity, and ritual consistency.",
	},
	{
		id: "hair-care",
		title: "Hair Care",
		kicker: "Natural care",
		description:
			"Hair oils, scalp care, and plant-forward support for textured hair, protective styles, and daily moisture.",
	},
];

export const clientMessages = [
	{
		id: "welcome",
		title: "Welcome to Raw Body",
		body: "Your care path starts with your body goal, your location, and the support rhythm that fits your life.",
	},
	{
		id: "consult-first",
		title: "Consultation First",
		body: "Book a phone, text, Zoom, or in-person consultation before choosing sculpting, lymphatic care, massage, facials, or products.",
	},
	{
		id: "between-visits",
		title: "Care Between Visits",
		body: "At-home products and tools can help keep the ritual simple and repeatable between appointments.",
	},
];

export const adminMetrics = [
	{
		label: "Consult requests",
		value: "18",
		detail: "New requests this week",
	},
	{
		label: "Popup interest",
		value: "42",
		detail: "Across NYC, Dallas, and Austin",
	},
	{
		label: "Product follows",
		value: "27",
		detail: "Clients waiting for ritual sets",
	},
	{
		label: "Care plans",
		value: "11",
		detail: "Ready for follow-up",
	},
];

export const ownerMetrics = adminMetrics;

export const bookingQueue = [
	{
		client: "Maya R.",
		service: "Lymphatic Sculpting",
		location: "Long Island",
		status: "Needs confirmation",
	},
	{
		client: "Ana C.",
		service: "Body Goals Consultation",
		location: "Zoom",
		status: "Ready",
	},
	{
		client: "Janelle T.",
		service: "Facial + Product Guidance",
		location: "NYC Popup",
		status: "Popup interest",
	},
	{
		client: "Rosa M.",
		service: "Massage",
		location: "Dallas Popup",
		status: "Waitlist",
	},
];

export const adminTasks = [
	"Confirm Long Island appointment windows",
	"Review NYC popup interest list",
	"Prepare product recommendations for consultations",
	"Follow up with clients waiting on service fit",
];