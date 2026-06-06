import { createFileRoute, Link } from "@tanstack/react-router"
import "../styles/index.css"

export const Route = createFileRoute("/")({
	component: GenesisPublicLanding,
})

const audiencePaths = [
	{
		title: "Kids",
		line: "Confidence they carry home.",
		cta: "Find kids classes",
		visualBrief: "Black child beginner in gi, confident stance",
	},
	{
		title: "Adults",
		line: "Start where you are. Build from there.",
		cta: "See adult training",
		visualBrief: "Mexican adult beginner tying belt before class",
	},
	{
		title: "Families",
		line: "Train together. Grow together.",
		cta: "Explore family paths",
		visualBrief: "Indian family in gis on the mat together",
	},
	{
		title: "Wrestlers",
		line: "Pressure. Control. Win.",
		cta: "Book a first visit",
		visualBrief: "Black and white wrestlers drilling takedowns",
	},
]

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
]

const culturePanels = [
	{
		title: "Discipline",
		visualBrief: "Mexican and Black kids lined up before class",
	},
	{
		title: "Respect",
		visualBrief: "Indian child and white coach fist bumping",
	},
	{
		title: "Community",
		visualBrief: "Diverse family class group photo",
	},
	{
		title: "Courage",
		visualBrief: "Black adult beginner learning first grip",
	},
	{
		title: "Growth",
		visualBrief: "Mexican child smiling after class",
	},
]

function GenesisPublicLanding() {
	return (
		<main className="genesis-public">
			<header className="genesis-public__header">
				<Link to="/" className="genesis-public__brand" aria-label="Genesis Jiu Jitsu home">
					<span className="genesis-public__mark">G</span>
					<span>
						<strong>Genesis</strong>
						<small>Jiu Jitsu · Burleson, Texas</small>
					</span>
				</Link>

				<nav className="genesis-public__nav" aria-label="Public website navigation">
					<Link to="/website">About</Link>
					<Link to="/website/memberships">Classes</Link>
					<Link to="/website/schedule">Schedule</Link>
					<Link to="/website/events">Events</Link>
				</nav>

				<Link to="/website/trial-class" className="genesis-public__trial-link">
					Book a trial
				</Link>
			</header>

			<section className="genesis-hero" aria-labelledby="genesis-hero-title">
				<div className="genesis-hero__copy">
					<p className="genesis-kicker">Family jiu jitsu starts here</p>
					<h1 id="genesis-hero-title">
						Step onto
						<span>the mat.</span>
					</h1>
					<p className="genesis-hero__line">
						Confidence. Discipline. Family. Built together.
					</p>

					<div className="genesis-hero__actions">
						<Link to="/website/trial-class" className="genesis-button genesis-button--primary">
							Book a trial class
						</Link>
						<Link to="/website/schedule" className="genesis-button genesis-button--ghost">
							Find your first class
						</Link>
					</div>

					<div className="genesis-hero__story">
						<span className="genesis-play" aria-hidden="true" />
						<span>Watch their first step</span>
					</div>
				</div>

				<div className="genesis-hero__media" aria-label="Graphic novel style hero image placeholder">
					<div className="genesis-media-card genesis-media-card--hero">
						<p>Hero visual slot</p>
						<strong>Black coach · Mexican child · Indian parent · White parent</strong>
						<span>
							Graphic-novel BJJ scene, mat-level, black/white/red, cinematic first-class
							moment.
						</span>
					</div>
				</div>
			</section>

			<section className="genesis-section genesis-section--paths" aria-labelledby="paths-title">
				<div className="genesis-section__heading">
					<p className="genesis-kicker">Choose your path</p>
					<h2 id="paths-title">One mat. Every starting point.</h2>
				</div>

				<div className="genesis-path-grid">
					{audiencePaths.map((path) => (
						<Link
							key={path.title}
							to="/website/memberships"
							className="genesis-path-card"
							aria-label={`${path.title}: ${path.line}`}
						>
							<div className="genesis-path-card__media">
								<span>{path.visualBrief}</span>
							</div>
							<div className="genesis-path-card__body">
								<h3>{path.title}</h3>
								<p>{path.line}</p>
								<strong>{path.cta}</strong>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="genesis-first-win" aria-labelledby="first-win-title">
				<div className="genesis-section__heading">
					<p className="genesis-kicker">Your first win</p>
					<h2 id="first-win-title">Every journey starts before you feel ready.</h2>
				</div>

				<div className="genesis-step-grid">
					{firstWinSteps.map((step) => (
						<article key={step.number} className="genesis-step">
							<span>{step.number}</span>
							<h3>{step.title}</h3>
							<p>{step.line}</p>
						</article>
					))}
				</div>
			</section>

			<section className="genesis-culture" aria-labelledby="culture-title">
				<div className="genesis-section__heading genesis-section__heading--light">
					<p className="genesis-kicker">Our culture</p>
					<h2 id="culture-title">More than a gym.</h2>
				</div>

				<div className="genesis-culture-strip">
					{culturePanels.map((panel) => (
						<article key={panel.title} className="genesis-culture-panel">
							<div>
								<span>{panel.visualBrief}</span>
							</div>
							<h3>{panel.title}</h3>
						</article>
					))}
				</div>
			</section>

			<section className="genesis-system-bridge" aria-labelledby="system-title">
				<div>
					<p className="genesis-kicker">Built behind the journey</p>
					<h2 id="system-title">The software keeps the culture moving.</h2>
					<p>
						Trial requests, class schedules, check-ins, billing views, member journeys,
						announcements, and owner clarity — all connected behind the scenes.
					</p>
				</div>

				<div className="genesis-system-actions">
					<Link to="/check-in" className="genesis-button genesis-button--primary">
						View check-in flow
					</Link>
					<Link to="/owner" className="genesis-button genesis-button--dark">
						View owner dashboard
					</Link>
				</div>
			</section>
		</main>
	)
}