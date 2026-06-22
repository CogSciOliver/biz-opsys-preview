import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { HeroStats } from "../components/HeroStats";
import { MetricCard } from "../components/MetricCard";
import { demoBusiness, ownerMetrics } from "../data/demoBusiness";

export const Route = createFileRoute("/start-demo")({
	component: IndexPage,
});

function IndexPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Interactive Business Operating System Prototype"
			title="Raw Body Essentials demo hub"
			description="A static click-through preview of a custom business operating system for public booking, client care, admin operations, and owner reporting."
		>
			<div className="hero-card">
				<div>
					<p className="card-kicker">Prototype map</p>
					<h2>{demoBusiness.heroTitle}</h2>
					<p>{demoBusiness.heroDescription}</p>

					<div className="hero-actions">
						<Link to="/" className="button-inverse">
							Start with public site
						</Link>
						<Link to="/owner/owner/overview" className="button-inverse">
							View owner dashboard
						</Link>
					</div>
				</div>

				<HeroStats stats={demoBusiness.stats} />
			</div>

			<div className="mt-4 grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Public experience"
					title="Services, consultations, products, and locations"
					description="A polished public-facing experience designed to help clients understand treatments and choose the right starting point."
					footer={
						<Link to="/website/services" className="button-primary">
							Open website preview
						</Link>
					}
				/>

				<DashboardCard
					eyebrow="Lead capture"
					title="Consultation-first booking"
					description="A guided care request flow that gives admin a clear next step instead of scattered texts and DMs."
					footer={
						<Link to="/website/join" className="button-primary">
							Open consultation flow
						</Link>
					}
				/>

				<DashboardCard
					eyebrow="Client portal"
					title="Appointments, billing, and care plans"
					description="A client-facing dashboard for service planning, appointment visibility, product recommendations, and account status."
					footer={
						<Link to="/client/dashboard" className="button-primary">
							Open client view
						</Link>
					}
				/>

				<DashboardCard
					eyebrow="Admin operations"
					title="Check-in, clients, messages, and scheduling"
					description="A daily workflow for appointment check-in, consultation follow-up, client notes, messages, and service windows."
					footer={
						<Link to="/admin/dashboard" className="button-primary">
							Open admin tools
						</Link>
					}
				/>
			</div>

			<div className="mt-4 grid gap-4 md:grid-cols-3">
				{ownerMetrics.slice(0, 3).map((metric) => (
					<MetricCard
						key={metric.label}
						label={metric.label}
						value={metric.value}
						trend={metric.trend}
					/>
				))}
			</div>

			<div className="mt-4">
				<DashboardCard
					eyebrow="Owner layer"
					title="Revenue, retention, and settings"
					description="The owner view turns the system into a business dashboard instead of just a public site or client portal."
					footer={
						<Link to="/owner/owner/overview" className="button-primary">
							Open owner overview
						</Link>
					}
				/>
			</div>
		</AppShell>
	);
}
