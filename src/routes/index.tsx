import { createFileRoute, Link } from "@tanstack/react-router";
import "../styles/index.css";

export const Route = createFileRoute("/")({
	component: HeritagePublicLanding,
});

const audiencePaths = [
	{
		title: "Kids",
		line: "Confidence, focus, and courage built one class at a time.",
		cta: "Find kids classes",
		img: "/images/classes/kids-class.avif",
		classURL: "/website/classes/kids",
	},
	{
		title: "Adults",
		line: "Get stronger, calmer, and harder to shake.",
		cta: "See adult training",
		img: "/images/classes/adult-class.avif",
		classURL: "/website/classes/adults",
	},
	{
		title: "Homeschoolers",
		line: "A real-world mat for movement, discipline, and connection.",
		cta: "Explore homeschool paths",
		img: "/images/classes/homeschool-class.avif",
		classURL: "/website/classes/homeschool",
	},
	{
		title: "Female Only",
		line: "Train with confidence, control, and room to grow.",
		cta: "Book a first visit",
		img: "/images/classes/female-class.avif",
		classURL: "/website/classes/female-only",
	},
];

const firstWinSteps = [
	{
		number: "01",
		title: "Walk in",
		line: "You belong here.",
	},
	{
		number: "02",
		title: "Learn the basics",
		line: "Safe. Simple. Solid.",
	},
	{
		number: "03",
		title: "Feel progress",
		line: "Confidence grows fast.",
	},
	{
		number: "04",
		title: "Keep showing up",
		line: "The mat changes you.",
	},
];

const culturePanels = [
	{
		title: "Discipline",
		img: "/images/classes/discipline.avif",
	},
	{
		title: "Respect",
		img: "/images/classes/respect.avif",
	},
	{
		title: "Community",
		img: "/images/classes/community.avif",
	},
	{
		title: "Courage",
		img: "/images/classes/courage.avif",
	},
	{
		title: "Growth",
		img: "/images/classes/growth.avif",
	},
];

const heroImages = [
	{
		src: "/images/hero/bjj-kid.webp",
		alt: "bjj kids",
	},
	{
		src: "/images/hero/bjj-man.webp",
		alt: "bjj men",
	},
	{
		src: "/images/hero/bjj-woman.webp",
		alt: "bjj moms",
	},
	{
		src: "/images/hero/bjj-dad.webp",
		alt: "bjj dads",
	},
	{
		src: "/images/hero/bjj-teen.webp",
		alt: "bjj teens",
	},
	{
		src: "/images/hero/bjj-teach.webp",
		alt: "bjj teachers",
	},
];

const beginnerQuestions = [
	{
		question: "Is this beginner friendly?",
		answer:
			"Yes. You can start without knowing the moves, the rules, or the language of jiu jitsu.",
		cta: "Book a trial",
		to: "/website/trial-class",
	},
	{
		question: "Can my child try first?",
		answer:
			"Yes. A trial class lets your child feel the room, meet the coach, and step on the mat before joining.",
		cta: "Start with kids",
		to: "/website/memberships",
	},
	{
		question: "What should we wear?",
		answer:
			"Comfortable athletic clothes are enough for a first visit. The team can guide you from there.",
		cta: "See first class",
		to: "/website/trial-class",
	},
	{
		question: "Can families train here?",
		answer:
			"Yes. Kids, adults, teens, and parents can each find a starting point without feeling lost.",
		cta: "Find classes",
		to: "/website/schedule",
	},
];

function HeritagePublicLanding() {
	return (
		<main className="heritage-public">
			<header className="heritage-public__header">
				<Link
					to="/"
					className="heritage-public__brand"
					aria-label="Heritage Jiu Jitsu home"
				>
					<span className="heritage-public__mark">H</span>
					<span>
						<strong>Heritage</strong>
						<small>Jiu Jitsu · Burleson, Texas</small>
					</span>
				</Link>

				<nav
					className="heritage-public__nav"
					aria-label="Public website navigation"
				>
					<Link to="/" hash="classes">
						Classes
					</Link>
					<Link to="/" hash="about">
						About
					</Link>
					<Link to="/website/schedule" hash="classes">
						Schedule
					</Link>
					<Link to="/website/schedule" hash="events">
						Events
					</Link>
				</nav>

				<Link to="/website/trial-class" className="heritage-public__trial-link">
					Book a trial
				</Link>
			</header>

			<section className="heritage-hero" aria-labelledby="heritage-hero-title">
				<div className="heritage-hero__reel" aria-hidden="true">
					{heroImages.map((image, index) => (
						<img
							key={image.src}
							src={image.src}
							alt={image.alt}
							className={`heritage-hero__frame heritage-hero__frame--${index + 1}`}
						/>
					))}
				</div>

				<div className="heritage-hero__shade" aria-hidden="true" />

				<div className="heritage-hero__copy">
					<h1 id="heritage-hero-title" className="heritage-hero-title">
						<span className="heritage-hero-title__top">Step</span>
						<span className="heritage-hero-title__middle">onto the</span>
						<span className="heritage-hero-title__bottom">mat.</span>
					</h1>
					<p className="heritage-hero__line">
						Confidence. Discipline. Family. <br />
						Built together.
					</p>
					<p className="heritage-kicker">Family jiu jitsu starts here</p>
					<div className="heritage-hero__actions">
						<Link
							to="/website/trial-class"
							className="heritage-button heritage-button--primary"
						>
							Book a trial class
						</Link>
						<Link
							to="/website/schedule"
							className="heritage-button heritage-button--ghost"
						>
							Find your first class
						</Link>
					</div>

					<div className="heritage-hero__story">
						<span className="heritage-play" aria-hidden="true" />
						<span>Watch their first step</span>
					</div>
				</div>
			</section>

			<section
				id="classes"
				className="heritage-section heritage-section--paths"
				aria-labelledby="paths-title"
			>
				<div className="heritage-section-heading">
					<p className="heritage-kicker">Choose your path</p>
					<h2 id="paths-title">One mat. <br/>Many starting points.</h2>
				</div>

				<div className="heritage-path-grid">
					{audiencePaths.map((path) => (
						<Link
							key={path.title}
							to={path.classURL}
							className="heritage-path-card"
							aria-label={`${path.title}: ${path.line}`}
						>
							<div className="heritage-path-card__media">
								<img
									src={path.img}
									alt=""
									className="heritage-path-card__image"
									loading="lazy"
								/>
							</div>
							<div className="heritage-path-card__body">
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
				className="heritage-first-win"
				aria-labelledby="first-win-title"
			>
				<div className="heritage-section-heading-lite">
					<p className="heritage-kicker">Your first win</p>
					<h2 id="first-win-title">
						Every journey starts before you feel ready.
					</h2>
				</div>

				<div className="heritage-step-grid">
					{firstWinSteps.map((step) => (
						<article key={step.number} className="heritage-step">
							<span>{step.number}</span>
							<h3>{step.title}</h3>
							<p>{step.line}</p>
						</article>
					))}
				</div>
			</section>

			<section className="heritage-beginner" aria-labelledby="beginner-title">
				<div className="heritage-beginner__copy">
					<p className="heritage-kicker-lite">Before you walk in</p>
					<h2 id="beginner-title">Start before you feel ready.</h2>
					<p>
						New to jiu jitsu? Good. Most people start here before they feel
						ready. You do not need to know the moves, be in shape, or have the
						gear figured out. You need one first class and a place that knows
						how to help beginners begin.
					</p>
				</div>

				<div className="heritage-beginner-grid">
					{beginnerQuestions.map((item) => (
						<article key={item.question} className="heritage-beginner-card">
							<h3>{item.question}</h3>
							<p>{item.answer}</p>
							<Link to={item.to} className="heritage-beginner-card__link">
								{item.cta}
							</Link>
						</article>
					))}
				</div>
			</section>

			<section className="heritage-culture" aria-labelledby="culture-title">
				<div className="heritage-section-heading">
					<p className="heritage-kicker">Our culture</p>
					<h2 id="culture-title">More than a gym.</h2>
				</div>

				<div className="heritage-culture-strip">
					{culturePanels.map((panel) => (
						<article key={panel.title} className="heritage-culture-panel">
							<div className="heritage-culture-panel__media">
								<img
									src={panel.img}
									alt=""
									className="heritage-culture-panel__image"
									loading="lazy"
								/>
							</div>
							<h3>{panel.title}</h3>
						</article>
					))}
				</div>
			</section>

			<section
				className="heritage-system-bridge"
				aria-labelledby="system-title"
			>
				<div>
					<p className="heritage-kicker">
						Demo what's Built behind the journey &rarr;
					</p>
					<h2 id="system-title">This software keeps the culture moving.</h2>
					<p>
						Trial requests, class schedules, check-ins, billing views, member
						journeys, announcements, and owner clarity — all connected behind
						the scenes.
					</p>
				</div>

				<div className="heritage-system-actions">
					<Link
						to="/check-in"
						className="heritage-button heritage-button--primary"
					>
						View check-in flow
					</Link>
					<Link to="/owner" className="heritage-button heritage-button--dark">
						View owner dashboard
					</Link>
				</div>
			</section>
		</main>
	);
}
