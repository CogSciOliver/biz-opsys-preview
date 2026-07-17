import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/website/locations")({
	component: LocationsPage,
});

const locations = [
	{
		title: "Long Island",
		status: "Home base",
		description:
			"Body care, sculpting, lymphatic work, facials, consultations, and product support by appointment.",
	},
	{
		title: "New York City",
		status: "Popup / mobile",
		description:
			"Rotating care days for consultations, treatments, and client follow-up when dates are open.",
	},
	{
		title: "Dallas",
		status: "Popup / touring",
		description:
			"Texas-based booking windows for body goals consultations, sculpting, massage, and care planning.",
	},
	{
		title: "Austin",
		status: "Popup / touring",
		description:
			"Seasonal popup care for clients who want treatment planning, bodywork, and at-home ritual support.",
	},
];

const popupSteps = [
	{
		number: "01",
		title: "Choose city",
		description:
			"Start with the location that fits your schedule or join the interest list for future popup dates.",
	},
	{
		number: "02",
		title: "Book consult",
		description:
			"Talk through your goals before choosing sculpting, lymphatic care, massage, facials, or products.",
	},
	{
		number: "03",
		title: "Confirm care",
		description:
			"Once dates and service fit are clear, book the appointment path that supports your body care rhythm.",
	},
];

function LocationsPage() {
	return (
		<main className="raw-body-page">
			<section className="raw-body-page-hero">
				<p className="raw-body-kicker">Locations</p>
				<h1>Care where the body already lives.</h1>
				<p>
					Raw Body Aesthetics can support studio care, mobile care, and touring
					popup days across Long Island, NYC, Dallas, and Austin.
				</p>

				<div className="raw-body-page-actions">
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
						Explore services
					</Link>
				</div>
			</section>

			<section className="raw-body-page-grid" aria-label="Raw Body locations">
				{locations.map((location) => (
					<article key={location.title} className="raw-body-page-card">
						<p className="raw-body-card-kicker">{location.status}</p>
						<h2>{location.title}</h2>
						<p>{location.description}</p>
						<strong>Plan by consultation</strong>
					</article>
				))}
			</section>

			<section className="raw-body-page-band" aria-labelledby="popup-flow">
				<div className="raw-body-section-heading-lite">
					<p className="raw-body-kicker-lite">Popup rhythm</p>
					<h2 id="popup-flow">Location comes before booking.</h2>
				</div>

				<div className="raw-body-step-grid">
					{popupSteps.map((step) => (
						<article key={step.number} className="raw-body-step">
							<span>{step.number}</span>
							<h3>{step.title}</h3>
							<p>{step.description}</p>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
