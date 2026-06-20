import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/website/book")({
	component: BookPage,
});

const bookingServices = [
	"Body Sculpting",
	"Lymphatic Sculpting",
	"Massage",
	"Facials",
	"Body Goals Consultation",
	"Product Guidance",
];

const bookingLocations = [
	"Long Island",
	"New York City Popup",
	"Dallas Popup",
	"Austin Popup",
	"Phone",
	"Text",
	"Zoom",
];

const bookingSteps = [
	{
		number: "01",
		title: "Choose support",
		description:
			"Start with the service, product question, or body goal you want help planning.",
	},
	{
		number: "02",
		title: "Choose location",
		description:
			"Pick studio care, popup care, or remote consultation depending on what is available.",
	},
	{
		number: "03",
		title: "Confirm next step",
		description:
			"Submit the request so the care path can be confirmed before the appointment.",
	},
];

function BookPage() {
	return (
		<main className="raw-body-page">
			<section className="raw-body-page-hero">
				<p className="raw-body-kicker">Book</p>
				<h1>Start your care request.</h1>
				<p>
					This demo booking flow helps clients choose a service, location, and
					consultation path before confirming treatment details.
				</p>

				<div className="raw-body-page-actions">
					<Link
						to="/website/services"
						className="raw-body-button raw-body-button--ghost"
					>
						Review services
					</Link>
					<Link
						to="/website/consultations"
						className="raw-body-button raw-body-button--ghost"
					>
						Consult first
					</Link>
				</div>
			</section>

			<section className="raw-body-booking-shell" aria-label="Booking request">
				<form className="raw-body-booking-form">
					<div className="raw-body-booking-form__header">
						<p className="raw-body-card-kicker">Request form</p>
						<h2>Tell us what care you need.</h2>
						<p>
							This is a prototype form. In the full platform, this would connect
							to client intake, availability, service rules, and admin review.
						</p>
					</div>

					<div className="raw-body-field-grid">
						<label className="raw-body-field">
							<span>Name</span>
							<input type="text" name="name" placeholder="Client name" />
						</label>

						<label className="raw-body-field">
							<span>Email</span>
							<input type="email" name="email" placeholder="client@email.com" />
						</label>

						<label className="raw-body-field">
							<span>Service interest</span>
							<select name="service">
								<option value="">Choose service</option>
								{bookingServices.map((service) => (
									<option key={service} value={service}>
										{service}
									</option>
								))}
							</select>
						</label>

						<label className="raw-body-field">
							<span>Location</span>
							<select name="location">
								<option value="">Choose location</option>
								{bookingLocations.map((location) => (
									<option key={location} value={location}>
										{location}
									</option>
								))}
							</select>
						</label>

						<label className="raw-body-field raw-body-field--wide">
							<span>Body goal or care question</span>
							<textarea
								name="goal"
								placeholder="Tell us what you want support with..."
								rows={6}
							/>
						</label>
					</div>

					<button
						type="button"
						className="raw-body-button raw-body-button--primary"
					>
						Submit request
					</button>
				</form>
			</section>

			<section className="raw-body-page-band" aria-labelledby="booking-flow">
				<div className="raw-body-section-heading-lite">
					<p className="raw-body-kicker-lite">Booking rhythm</p>
					<h2 id="booking-flow">Request first. Confirm with care.</h2>
				</div>

				<div className="raw-body-step-grid">
					{bookingSteps.map((step) => (
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
