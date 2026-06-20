import { createFileRoute, Link, notFound } from "@tanstack/react-router";

type ServiceDetail = {
	title: string;
	kicker: string;
	description: string;
	image: string;
	bestFor: string[];
	ritual: string[];
	note: string;
};

const serviceDetails: Record<string, ServiceDetail> = {
	"body-sculpting": {
		title: "Body Sculpting",
		kicker: "Shape · Tone · Support",
		description:
			"Non-invasive body support designed around tone, shape, and visible body goals without medical overpromising.",
		image: "/images/raw-body/body-sculpting.avif",
		bestFor: [
			"Body goals planning",
			"Visible tone and contour support",
			"Pre-event body care",
			"Maintenance between lifestyle changes",
		],
		ritual: [
			"Start with a body goals consultation.",
			"Choose the focus area and session rhythm.",
			"Pair in-studio care with at-home support.",
			"Track comfort, consistency, and visible progress.",
		],
		note: "This is beauty and wellness-support care, not medical treatment or guaranteed fat removal.",
	},
	"lymphatic-sculpting": {
		title: "Lymphatic Sculpting",
		kicker: "Flow · Recovery · Comfort",
		description:
			"Lymphatic-focused bodywork that supports natural flow, recovery, comfort, and a lighter body feel.",
		image: "/images/raw-body/lymphatic-sculpting.avif",
		bestFor: [
			"Body comfort",
			"Post-treatment support",
			"Flow-focused bodywork",
			"Relaxation and ritual care",
		],
		ritual: [
			"Talk through your goal and comfort level.",
			"Choose gentle hands-on lymphatic support.",
			"Support the session with hydration and rest.",
			"Return as needed for maintenance care.",
		],
		note: "This does not treat lymphedema or disease. It is non-medical body care.",
	},
	massage: {
		title: "Massage",
		kicker: "Release · Restore · Calm",
		description:
			"Therapeutic bodywork for tension, calm, restoration, and nervous-system support.",
		image: "/images/raw-body/massage.avif",
		bestFor: [
			"Tension relief",
			"Stress recovery",
			"Body reset days",
			"Hands-on restorative care",
		],
		ritual: [
			"Choose the area that needs attention.",
			"Set pressure and comfort preferences.",
			"Use the session for release and restoration.",
			"Leave with simple aftercare guidance.",
		],
		note: "Massage supports comfort and relaxation. It is not a substitute for medical care.",
	},
	facials: {
		title: "Facials",
		kicker: "Glow · Skin · Ritual",
		description:
			"Plant-forward skin rituals selected around glow, clarity, hydration, and your skin goals.",
		image: "/images/raw-body/facials.avif",
		bestFor: [
			"Skin goals",
			"Hydration support",
			"Glow and texture care",
			"Plant-forward beauty rituals",
		],
		ritual: [
			"Start with your skin goal.",
			"Choose a gentle plant-forward treatment path.",
			"Support the ritual with at-home care.",
			"Adjust products as your skin changes.",
		],
		note: "Facials support beauty and skin care goals. They do not diagnose or treat skin disease.",
	},
};

export const Route = createFileRoute("/website/services/$serviceId")({
	loader: ({ params }) => {
		const service = serviceDetails[params.serviceId];

		if (!service) {
			throw notFound();
		}

		return service;
	},
	component: ServiceDetailPage,
});

function ServiceDetailPage() {
	const service = Route.useLoaderData();

	return (
		<main className="raw-body-page">
			<section className="raw-body-detail-hero">
				<div className="raw-body-detail-hero__copy">
					<p className="raw-body-kicker">{service.kicker}</p>
					<h1>{service.title}</h1>
					<p>{service.description}</p>

					<div className="raw-body-detail-actions">
						<Link
							to="/website/consultations"
							className="raw-body-button raw-body-button--primary"
						>
							Book consultation
						</Link>
						<Link
							to="/website/services"
							className="raw-body-button raw-body-button--ghost"
						>
							All services
						</Link>
					</div>
				</div>

				<div className="raw-body-detail-hero__media">
					<img src={service.image} alt="" />
				</div>
			</section>

			<section className="raw-body-detail-grid">
				<article className="raw-body-detail-card">
					<h2>Best for</h2>
					<ul>
						{service.bestFor.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</article>

				<article className="raw-body-detail-card">
					<h2>The ritual</h2>
					<ol>
						{service.ritual.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ol>
				</article>

				<article className="raw-body-detail-card raw-body-detail-card--wide">
					<h2>Care note</h2>
					<p>{service.note}</p>
				</article>
			</section>
		</main>
	);
}
