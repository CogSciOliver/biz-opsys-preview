import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/website/consultations")({
	component: ConsultationsPage,
});

const consultationOptions = [
	{
		title: "Phone Consultation",
		description:
			"Talk through your body goals, schedule, location, and treatment questions before choosing a service.",
	},
	{
		title: "Text Consultation",
		description:
			"Quick support for simple questions, product guidance, service fit, and next-step booking.",
	},
	{
		title: "Zoom Consultation",
		description:
			"A face-to-face planning session for treatment goals, at-home care, and multi-service support.",
	},
	{
		title: "In-Person Consultation",
		description:
			"Meet in studio or at a popup location to choose the right body-care path before treatment.",
	},
];

const consultationSteps = [
	{
		number: "01",
		title: "Share the goal",
		description:
			"Tell us what you want support with: sculpting, lymphatic care, massage, facials, products, or a full ritual plan.",
	},
	{
		number: "02",
		title: "Choose the setting",
		description:
			"Pick phone, text, Zoom, or in-person based on how much support you need before booking.",
	},
	{
		number: "03",
		title: "Plan the ritual",
		description:
			"We match the service path, location, and at-home care rhythm to your real life.",
	},
];

function ConsultationsPage() {
	return (
		<main className="raw-body-page">
			<section className="raw-body-page-hero">
				<p className="raw-body-kicker">Consultations</p>
				<h1>Start with your body goals.</h1>
				<br/>
				<p>
					Before booking a treatment, choose the consultation style that helps
					you feel understood. Phone, text, Zoom, or in-person planning can help
					match your goals to the right service path.
				</p>

				<div className="raw-body-page-actions">
					<Link
						to="/website/services"
						className="raw-body-button raw-body-button--primary"
					>
						Explore services
					</Link>
					<Link
						to="/website/locations"
						className="raw-body-button raw-body-button--ghost"
					>
						See locations
					</Link>
				</div>
			</section>

			<section className="raw-body-page-grid" aria-label="Consultation options">
				{consultationOptions.map((option) => (
					<article key={option.title} className="raw-body-page-card">
						<h2>{option.title}</h2>
						<p>{option.description}</p>
						<strong>Plan first</strong>
					</article>
				))}
			</section>

			<section
				className="raw-body-page-band"
				aria-labelledby="consultation-flow"
			>
				<div className="raw-body-section-heading-lite">
					<p className="raw-body-kicker-lite">How it works</p>
					<h2 id="consultation-flow">Simple planning before care.</h2>
				</div>

				<div className="raw-body-step-grid">
					{consultationSteps.map((step) => (
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
