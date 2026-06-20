import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/website/services")({
	component: ServicesPage,
});

const services = [
	{
		title: "Body Sculpting",
		description:
			"Non-invasive body support designed around tone, shape, and visible body goals.",
		href: "/website/services/body-sculpting",
	},
	{
		title: "Lymphatic Sculpting",
		description:
			"Lymphatic-focused bodywork that supports flow, recovery, comfort, and a lighter body feel.",
		href: "/website/services/lymphatic-sculpting",
	},
	{
		title: "Massage",
		description:
			"Therapeutic bodywork for tension, restoration, calm, and nervous-system support.",
		href: "/website/services/massage",
	},
	{
		title: "Facials",
		description:
			"Plant-forward skin rituals selected around glow, clarity, hydration, and skin goals.",
		href: "/website/services/facials",
	},
	{
		title: "Body Goals Consultation",
		description:
			"Plan your treatment path by phone, text, Zoom, or in person before booking.",
		href: "/website/consultations",
	},
	{
		title: "At-Home Care",
		description:
			"Natural body products, hair care, skin care, nail care, and tools for between-session support.",
		href: "/website/products",
	},
];

function ServicesPage() {
	return (
		<main className="raw-body-page">
			<section className="raw-body-page-hero">
				<p className="raw-body-kicker">Treatments</p>
				<h1>Choose the support your body is asking for.</h1>
				<p>
					Explore sculpting, lymphatic care, massage, facials, consultations,
					and at-home care without medical overpromising or generic spa noise.
				</p>
			</section>

			<section className="raw-body-page-grid" aria-label="Raw Body services">
				{services.map((service) => (
					<Link
						key={service.title}
						to={service.href}
						className="raw-body-page-card"
					>
						<h2>{service.title}</h2>
						<p>{service.description}</p>
						<strong>Explore</strong>
					</Link>
				))}
			</section>
		</main>
	);
}
