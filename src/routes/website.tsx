import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { ClassScheduleList } from "../components/ClassScheduleList";
import { DashboardCard } from "../components/DashboardCard";
import { EventList } from "../components/EventList";
import { HeroStats } from "../components/HeroStats";
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
						<Link to="/join" className="button-inverse">
							Book a trial class
						</Link>
						<Link to="/website/schedule" className="button-hollow">
							View schedule
						</Link>
					</div>
				</div>

				<HeroStats stats={demoBusiness.stats} />
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Featured classes"
					title="Classes for the whole family"
				>
					<ClassScheduleList classes={demoClasses.slice(0, 3)} />
				</DashboardCard>

				<DashboardCard eyebrow="Community" title="Upcoming gym moments">
					<EventList events={demoEvents} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
