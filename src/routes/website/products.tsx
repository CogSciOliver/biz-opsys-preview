import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/website/products")({
	component: ProductsPage,
});

const productCategories = [
	{
		title: "Body Oils",
		kicker: "Daily ritual",
		description:
			"Plant-forward oils for body care, massage prep, glow, moisture, and between-session support.",
	},
	{
		title: "Body Tools",
		kicker: "At-home care",
		description:
			"Tools for simple daily rituals, body awareness, soft-tissue support, and maintenance between appointments.",
	},
	{
		title: "Skin Care",
		kicker: "Facial support",
		description:
			"Gentle skin-care products selected around hydration, glow, clarity, and ritual consistency.",
	},
	{
		title: "Hair Care",
		kicker: "Natural care",
		description:
			"Hair oils, scalp care, and plant-forward support for textured hair, protective styles, and daily moisture.",
	},
	{
		title: "Nail Care",
		kicker: "Hands & feet",
		description:
			"Simple care for cuticles, hands, feet, and the small details that complete the body-care ritual.",
	},
	{
		title: "Ritual Sets",
		kicker: "Bundled support",
		description:
			"Curated combinations for sculpting prep, lymphatic care, massage aftercare, skin rituals, and travel.",
	},
];

const productFlow = [
	{
		number: "01",
		title: "Choose the ritual",
		description:
			"Start with the care goal: body moisture, glow, massage support, scalp care, tools, or full routine.",
	},
	{
		number: "02",
		title: "Match the service",
		description:
			"Pair products with sculpting, lymphatic care, massage, facials, or at-home maintenance.",
	},
	{
		number: "03",
		title: "Use between visits",
		description:
			"Keep the ritual simple enough to repeat, track, and adjust as your body-care needs change.",
	},
];

function ProductsPage() {
	return (
		<main className="raw-body-page">
			<section className="raw-body-page-hero">
				<p className="raw-body-kicker">Products</p>
				<h1>Care continues after the appointment.</h1>
				<p>
					Explore natural body products, hair care, skin care, nail care, and
					at-home tools designed to support the ritual between sessions.
				</p>

				<div className="raw-body-page-actions">
					<Link
						to="/website/consultations"
						className="raw-body-button raw-body-button--primary"
					>
						Ask what fits
					</Link>
					<Link
						to="/website/services"
						className="raw-body-button raw-body-button--ghost"
					>
						Match to services
					</Link>
				</div>
			</section>

			<section className="raw-body-page-grid" aria-label="Product categories">
				{productCategories.map((category) => (
					<article key={category.title} className="raw-body-page-card">
						<p className="raw-body-card-kicker">{category.kicker}</p>
						<h2>{category.title}</h2>
						<p>{category.description}</p>
						<strong>Coming soon</strong>
					</article>
				))}
			</section>

			<section className="raw-body-page-band" aria-labelledby="product-flow">
				<div className="raw-body-section-heading-lite">
					<p className="raw-body-kicker-lite">At-home rhythm</p>
					<h2 id="product-flow">The product is part of the plan.</h2>
				</div>

				<div className="raw-body-step-grid">
					{productFlow.map((step) => (
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
