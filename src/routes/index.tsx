import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { HeroStats } from "../components/HeroStats";
import { MetricCard } from "../components/MetricCard";
import { demoBusiness, ownerMetrics } from "../data/demoBusiness";

export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Interactive Business Operating System Prototype"
			title="Genesis Jiu Jitsu demo hub"
			description="A static click-through preview of what a custom business operating system could feel like for the gym, members, staff, and owner."
		>
			<div className="hero-card">
				<div>
					<p className="card-kicker">Prototype map</p>
					<h2>{demoBusiness.heroTitle}</h2>
					<p>
						This demo connects the public website, trial class signup, member
						portal, staff tools, check-in flow, billing visibility,
						communications, and owner reporting into one branded Genesis system.
					</p>

					<div className="hero-actions">
						<Link to="/website" className="button-inverse">
							Start with public site
						</Link>
						<Link to="/owner/overview" className="button-inverse">
							View owner dashboard
						</Link>
					</div>
				</div>

				<HeroStats stats={demoBusiness.stats} />
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Public experience"
					title="Website, memberships, schedule, and events"
					description="A polished public-facing experience designed to help families understand the gym and book a first class."
					footer={
						<Link to="/website" className="button-primary">
							Open website preview
						</Link>
					}
				/>

				<DashboardCard
					eyebrow="Lead capture"
					title="Trial class signup"
					description="A guided first-class request flow that gives staff clear next steps instead of scattered inquiries."
					footer={
						<Link to="/join" className="button-primary">
							Open trial flow
						</Link>
					}
				/>

				<DashboardCard
					eyebrow="Member portal"
					title="Classes, billing, and announcements"
					description="A member-facing dashboard for family schedule visibility, membership status, and gym communication."
					footer={
						<Link to="/member/dashboard" className="button-primary">
							Open member view
						</Link>
					}
				/>

				<DashboardCard
					eyebrow="Staff operations"
					title="Daily dashboard and check-in tools"
					description="A front-desk and mat-side workflow for class check-in, trial visitors, members, and communications."
					footer={
						<Link to="/staff/dashboard" className="button-primary">
							Open staff tools
						</Link>
					}
				/>
			</div>

			<div className="grid-3" style={{ marginTop: "1rem" }}>
				{ownerMetrics.slice(0, 3).map((metric) => (
					<MetricCard
						key={metric.label}
						label={metric.label}
						value={metric.value}
						trend={metric.trend}
					/>
				))}
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Owner layer"
					title="Revenue, retention, and settings"
					description="The owner view turns the system into a business dashboard instead of just a website or member portal."
					footer={
						<Link to="/owner/overview" className="button-primary">
							Open owner overview
						</Link>
					}
				/>
			</div>
		</AppShell>
	);
}
