import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { BillingSummary } from "../components/BillingSummary";
import { CheckInKiosk } from "../components/CheckInKiosk";
import { ClassScheduleList } from "../components/ClassScheduleList";
import { CommunicationPreview } from "../components/CommunicationPreview";
import { DashboardCard } from "../components/DashboardCard";
import { EventList } from "../components/EventList";
import { HeroStats } from "../components/HeroStats";
import { MemberList } from "../components/MemberList";
import { MemberStatusBadge } from "../components/MemberStatusBadge";
import { MetricCard } from "../components/MetricCard";
import { ThemeToggle } from "../components/ThemeToggle";
import { TrialLeadList } from "../components/TrialLeadList";
import {
	demoBusiness,
	demoClasses,
	demoEvents,
	demoMembers,
	demoMessages,
	demoPayments,
	demoTrialLeads,
	ownerMetrics,
} from "../data/demoBusiness";

export const Route = createFileRoute("/style-guide")({
	component: StyleGuidePage,
});

function StyleGuidePage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Design system"
			title="Heritage prototype style guide"
			description="A development-only inspection page for the real app components, button treatments, and visual QA."
		>
			<div className="hero-card">
				<div>
					<p className="card-kicker">Visual QA & Reference Guide</p>
					<h2>Check the system before polishing pages.</h2>
					<p>
						This page uses the same components and layout classes as the actual
						prototype pages. No style-guide-only layout system.
					</p>

					<div className="hero-actions">
						<Link to="/" className="button-inverse">
							Demo hub
						</Link>
						<Link to="/website" className="button-hollow">
							Public site
						</Link>
					</div>
				</div>

				<HeroStats stats={demoBusiness.stats} />
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Buttons"
					title="Button Styles"
					description="Buttons should have no radius, all-caps text, letter spacing, and stable text color on red buttons."
				>
					<div className="hero-actions">
						<Link to="/join" className="button-primary">
							Primary
						</Link>
						<Link to="/website" className="button-secondary">
							Secondary
						</Link>
						<Link to="/website/schedule" className="button-outline">
							Outline
						</Link>
						<Link to="/owner/overview" className="button-ghost">
							Ghost
						</Link>
						<Link to="/staff/check-in" className="button-destructive">
							Destructive
						</Link>
						<Link to="/website/events" className="button-link">
							Link treatment
						</Link>
						<Link to="/join" className="button-inverse">
							Inverse
						</Link>
						<Link to="/website" className="button-secondary">
							Hero secondary
						</Link>
						<Link to="/" className="button-hollow">
							Hollow
						</Link>
						<ThemeToggle />
					</div>
				</DashboardCard>

				<DashboardCard
					eyebrow="Badges"
					title="Status Treatments"
					description="Small status treatments used in cards, lists, billing, leads, and operational views."
				>
					<div className="hero-actions">
						<MemberStatusBadge status="Active" />
						<MemberStatusBadge status="Needs review" />
						<MemberStatusBadge status="Demo only" />
						<MemberStatusBadge status="Scheduled" />
					</div>
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<div className="hero-card">
					<div>
						<p className="card-kicker">Hero buttons</p>
						<h2>Buttons on red hero panels</h2>
						<p>
							These confirm contrast, hover behavior, and color stability on the
							red Heritage hero treatment.
						</p>

						<div className="hero-actions">
							<Link to="/join" className="button-inverse">
								Inverse
							</Link>

							<Link to="/" className="button-hollow">
								Hollow
							</Link>
						</div>
					</div>

					<HeroStats stats={demoBusiness.stats.slice(0, 2)} />
				</div>
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

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Form preview"
					title="Fill Out Form"
					description="These are display-only fields for the static prototype."
				>
					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Name</span>
							<div>Parent or student name</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Interested class</span>
							<div>Family Jiu Jitsu</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Best contact</span>
							<div>Phone or email</div>
						</div>
					</div>
				</DashboardCard>

				<DashboardCard eyebrow="Classes" title="Class Schedules">
					<ClassScheduleList classes={demoClasses} />
				</DashboardCard>
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard eyebrow="Trial leads" title="TrialLeadList">
					<TrialLeadList leads={demoTrialLeads} showNextStep />
				</DashboardCard>

				<DashboardCard eyebrow="Events" title="EventList">
					<EventList events={demoEvents} />
				</DashboardCard>
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard eyebrow="Members" title="MemberList">
					<MemberList members={demoMembers} showLastCheckIn />
				</DashboardCard>

				<DashboardCard eyebrow="Billing" title="BillingSummary">
					<BillingSummary payments={demoPayments} />
				</DashboardCard>
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard eyebrow="Messages" title="CommunicationPreview">
					<CommunicationPreview messages={demoMessages} />
				</DashboardCard>

				<CheckInKiosk activeClass={demoClasses[1]} checkedInCount={14} />
			</div>
		</AppShell>
	);
}
