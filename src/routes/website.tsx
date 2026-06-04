import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { demoBusiness, demoClasses, demoEvents } from "../data/demoBusiness";

export const Route = createFileRoute("/website")({
	component: WebsitePage,
});

function WebsitePage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Genesis Jiu Jitsu"
			description="A polished public-facing site preview for families, new students, members, and staff."
		>
			<div className="hero-card">
				<div>
					<p className="card-kicker">Burleson family jiu jitsu</p>
					<h2>{demoBusiness.tagline}</h2>
					<p>{demoBusiness.heroText}</p>

					<div className="hero-actions">
						<Link to="/join" className="button-secondary">
							Book a trial class
						</Link>
						<Link to="/website/schedule" className="button-primary">
							View schedule
						</Link>
					</div>
				</div>

				<div className="stat-stack">
					{demoBusiness.stats.map((stat) => (
						<div className="stat-card" key={stat.label}>
							<strong>{stat.value}</strong>
							<span>{stat.label}</span>
						</div>
					))}
				</div>
			</div>

			<div className="genesis-grid" style={{ marginTop: "1rem" }}>
				<section className="genesis-card">
					<p className="card-kicker">Featured classes</p>
					<h2>Classes for the whole family</h2>
					<ul className="genesis-list">
						{demoClasses.slice(0, 3).map((classItem) => (
							<li key={classItem.id}>
								<div>
									<strong>{classItem.name}</strong>
									<br />
									<span>
										{classItem.audience} • {classItem.days} • {classItem.time}
									</span>
								</div>
								<span className="status-pill">{classItem.level}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="genesis-card">
					<p className="card-kicker">Community</p>
					<h2>Upcoming gym moments</h2>
					<ul className="genesis-list">
						{demoEvents.map((event) => (
							<li key={event.id}>
								<div>
									<strong>{event.name}</strong>
									<br />
									<span>
										{event.date} • {event.time}
									</span>
								</div>
								<span>{event.type}</span>
							</li>
						))}
					</ul>
				</section>
			</div>
		</AppShell>
	);
}
