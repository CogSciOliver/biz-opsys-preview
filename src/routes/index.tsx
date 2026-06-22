import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RawBodyPublicLanding,
});

const servicePaths = [
	{
		title: "Body Sculpting",
		line: "Non-invasive support for shape, tone, and body goals.",
		cta: "Explore sculpting",
		img: "/images/raw-body/body-sculpting.avif",
		serviceURL: "/website/services/body-sculpting",
	},
	{
		title: "Lymphatic Sculpting",
		line: "Hands-on care for flow, recovery, and a lighter body feel.",
		cta: "Explore lymphatic care",
		img: "/images/raw-body/lymphatic-sculpting.avif",
		serviceURL: "/website/services/lymphatic-sculpting",
	},
	{
		title: "Massage",
		line: "Restorative bodywork for tension, calm, and release.",
		cta: "Explore massage",
		img: "/images/raw-body/massage.avif",
		serviceURL: "/website/services/massage",
	},
	{
		title: "Facials",
		line: "Plant-forward skin rituals for glow, clarity, and care.",
		cta: "Explore facials",
		img: "/images/raw-body/facials.avif",
		serviceURL: "/website/services/facials",
	},
];

const clientJourneySteps = [
	{
		number: "01",
		title: "Choose your goal",
		line: "Sculpt, flow, recover, glow, or reset.",
	},
	{
		number: "02",
		title: "Book a consultation",
		line: "Phone, text, Zoom, or in-person.",
	},
	{
		number: "03",
		title: "Build your ritual",
		line: "Match treatments with at-home care.",
	},
	{
		number: "04",
		title: "Return supported",
		line: "Care continues between appointments.",
	},
];

const ritualPanels = [
	{
		title: "Plant-Based Care",
		img: "/images/raw-body/plant-based-care.avif",
	},
	{
		title: "Ancestral Wisdom",
		img: "/images/raw-body/ancestral-wisdom.avif",
	},
	{
		title: "Body Goals",
		img: "/images/raw-body/body-goals.avif",
	},
	{
		title: "Skin Rituals",
		img: "/images/raw-body/skin-rituals.avif",
	},
	{
		title: "At-Home Tools",
		img: "/images/raw-body/at-home-tools.avif",
	},
];

const heroImages = [
	{
		src: "/images/raw-body/hero-taino-arawaks.avif",
		alt: "Raw Body Essentials body care client in a slate and white spa setting",
	},
	{
		src: "/images/raw-body/hero-trinidad-tobago.avif",
		alt: "Raw Body Essentials client with natural body oil and botanical care",
	},
	{
		src: "/images/raw-body/hero-puerto-rico.avif",
		alt: "Raw Body Essentials lymphatic sculpting spa editorial",
	},
	{
		src: "/images/raw-body/hero-jamaica.avif",
		alt: "Raw Body Essentials modern Indigenous woman in body care studio",
	},
	{
		src: "/images/raw-body/hero-panama-mexico.avif",
		alt: "Raw Body Essentials plant based skin and body care ritual",
	},
	{
		src: "/images/raw-body/hero-products.avif",
		alt: "Raw Body Essentials natural body products and at home care tools",
	},
];

const consultationQuestions = [
	{
		question: "Not sure where to start?",
		answer:
			"Start with a body goals consultation. We can talk through sculpting, lymphatic care, massage, facials, products, and your at-home rhythm.",
		cta: "Book consultation",
		to: "/website/consultations",
	},
	{
		question: "Can I book by location?",
		answer:
			"Yes. Choose Long Island, NYC, Dallas, Austin, or a touring popup when dates are available.",
		cta: "See locations",
		to: "/website/locations",
	},
	{
		question: "Do you offer at-home care?",
		answer:
			"Yes. Natural body products, tools, and hair, skin, and nail care can support the ritual between appointments.",
		cta: "Shop care tools",
		to: "/website/products",
	},
	{
		question: "Is this medical treatment?",
		answer:
			"No. Raw Body Essentials offers body care, beauty, massage, sculpting, and wellness-support services. We keep the language honest and non-medical.",
		cta: "Explore treatments",
		to: "/website/services",
	},
];

function RawBodyPublicLanding() {
	return (
		<main className="raw-body-public">
			<header className="raw-body-public__header">
				<Link
					to="/"
					className="raw-body-public__brand"
					aria-label="Raw Body Essentials home"
				>
					<span className="raw-body-public__mark">R</span>
					<span>
						<strong>Raw Body Essentials</strong>
						<small>Body care · Sculpting · Skin rituals</small>
					</span>
				</Link>

				<nav
					className="raw-body-public__nav"
					aria-label="Public website navigation"
				>
					<Link to="/" hash="services">
						Services
					</Link>
					<Link to="/" hash="about">
						About
					</Link>
					<Link to="/website/consultations">Consultations</Link>
					<Link to="/website/locations">Locations</Link>
				</nav>

				<Link
					to="/website/consultations"
					className="raw-body-public__trial-link"
				>
					Book consultation
				</Link>
			</header>

			<section className="raw-body-hero" aria-labelledby="raw-body-hero-title">
				<div className="raw-body-hero__reel" aria-hidden="true">
					{heroImages.map((image, index) => (
						<img
							key={image.src}
							src={image.src}
							alt={image.alt}
							className={`raw-body-hero__frame raw-body-hero__frame--${index + 1}`}
						/>
					))}
				</div>

				<div className="raw-body-hero__shade" aria-hidden="true" />

				<div className="raw-body-hero__copy">
					<p className="raw-body-kicker">RAW. ANCESTRAL. MODERN</p>
					<h1 id="raw-body-hero-title" className="raw-body-hero-title">
						<span className="raw-body-hero-title__top">Modern Body Care</span>
						<span className="raw-body-hero-title__bottom">
							Rooted in Arawak Care
						</span>
					</h1>

					<p className="raw-body-hero__line">
						Body sculpting, lymphatic care, massage, facials, and natural
						at-home care. Crafted to support your body, elevate your rituals and
						honor where we come from. <br />
					</p>

					<div className="raw-body-hero__actions">
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
							Explore treatments
						</Link>
					</div>

					<div className="raw-body-hero__story">
						<span className="raw-body-play" aria-hidden="true" />
						<span>In studio. In home. In community.</span>
					</div>
				</div>
			</section>

			<section
				id="services"
				className="raw-body-section raw-body-section--paths"
				aria-labelledby="paths-title"
			>
				<div className="raw-body-section-heading">
					<p className="raw-body-kicker">Choose your ritual</p>
					<h2 id="paths-title">
						One body. <br />
						Many ways to support it.
					</h2>
				</div>

				<div className="raw-body-path-grid">
					{servicePaths.map((path) => (
						<Link
							key={path.title}
							to={path.serviceURL}
							className="raw-body-path-card"
							aria-label={`${path.title}: ${path.line}`}
						>
							<div className="raw-body-path-card__media">
								<img
									src={path.img}
									alt=""
									className="raw-body-path-card__image"
									loading="lazy"
								/>
							</div>
							<div className="raw-body-path-card__body">
								<h3>{path.title}</h3>
								<p>{path.line}</p>
								<strong>{path.cta}</strong>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section
				id="about"
				className="raw-body-care"
				aria-labelledby="your-care-path"
			>
				<div className="raw-body-section-heading-lite">
					<p className="raw-body-kicker">Your care path</p>
					<h2 id="your-care-path">Support starts before the appointment.</h2>
				</div>

				<div className="raw-body-step-grid">
					{clientJourneySteps.map((step) => (
						<article key={step.number} className="raw-body-step">
							<span>{step.number}</span>
							<h3>{step.title}</h3>
							<p>{step.line}</p>
						</article>
					))}
				</div>
			</section>

			<section className="raw-body-beginner" aria-labelledby="beginner-title">
				<div className="raw-body-beginner__copy">
					<p className="raw-body-kicker-lite">Before you book</p>
					<h2 id="beginner-title">Start with the body goal.</h2>
					<p>
						Whether you want sculpting, lymphatic support, massage, facials, or
						a natural at-home care plan, the first step is choosing the right
						ritual for your body, schedule, and location.
					</p>
				</div>

				<div className="raw-body-beginner-grid">
					{consultationQuestions.map((item) => (
						<article key={item.question} className="raw-body-beginner-card">
							<h3>{item.question}</h3>
							<p>{item.answer}</p>
							<Link to={item.to} className="raw-body-beginner-card__link">
								{item.cta}
							</Link>
						</article>
					))}
				</div>
			</section>

			<section className="raw-body-culture" aria-labelledby="culture-title">
				<div className="raw-body-section-heading">
					<p className="raw-body-kicker">Our ritual culture</p>
					<h2 id="culture-title">Plant-safe. Body-aware. Arawak-rooted.</h2>
				</div>

				<div className="raw-body-culture-strip">
					{ritualPanels.map((panel) => (
						<article key={panel.title} className="raw-body-culture-panel">
							<div className="raw-body-culture-panel__media">
								<img
									src={panel.img}
									alt="Raw Body Culture"
									className="raw-body-culture-panel__image"
									loading="lazy"
								/>
							</div>
							<h3>{panel.title}</h3>
						</article>
					))}
				</div>
			</section>

			<section
				className="raw-body-system-bridge"
				aria-labelledby="system-title"
			>
				<div>
					<p className="raw-body-kicker">
						Demo what's built behind the booking &rarr;
					</p>
					<h2 id="system-title">
						This software keeps the body-care business moving.
					</h2>
					<p>
						Consultations, service booking, client goals, treatment history,
						locations, popups, product recommendations, and owner clarity — all
						connected behind the scenes.
					</p>
				</div>

				<div className="raw-body-system-actions">
					<Link
						to="/client"
						className="raw-body-button raw-body-button--primary"
					>
						View client portal
					</Link>

					<Link to="/admin" className="raw-body-button raw-body-button--dark">
						View admin dashboard
					</Link>
				</div>
			</section>
		</main>
	);
}
