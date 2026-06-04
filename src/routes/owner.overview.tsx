import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import {
	demoMessages,
	demoPayments,
	demoTrialLeads,
	ownerMetrics,
} from "../data/demoBusiness";

export const Route = createFileRoute("/owner/overview")({
	component: OwnerOverviewPage,
});

function OwnerOverviewPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="See the business without digging through five systems."
			description="This page previews the executive layer: revenue, retention, trial pipeline, billing flags, and communication readiness."
		>
			<div className="genesis-grid-3">
				{ownerMetrics.map((metric) => (
					<section className="genesis-card" key={metric.label}>
						<p className="card-kicker">{metric.label}</p>
						<h2>{metric.value}</h2>
						<p>{metric.trend}</p>
					</section>
				))}
			</div>

			<div className="genesis-grid" style={{ marginTop: "1rem" }}>
				<section className="genesis-card">
					<p className="card-kicker">Billing watchlist</p>
					<h2>Membership revenue</h2>
					<ul className="genesis-list">
						{demoPayments.map((payment) => (
							<li key={payment.id}>
								<div>
									<strong>{payment.member}</strong>
									<br />
									<span>
										{payment.plan} • {payment.date}
									</span>
								</div>
								<span>{payment.status}</span>
							</li>
						))}
					</ul>
					<div className="hero-actions">
						<Link to="/owner/revenue" className="button-primary">
							View revenue
						</Link>
					</div>
				</section>

				<section className="genesis-card">
					<p className="card-kicker">Sales pipeline</p>
					<h2>Trial leads</h2>
					<ul className="genesis-list">
						{demoTrialLeads.map((lead) => (
							<li key={lead.id}>
								<div>
									<strong>{lead.name}</strong>
									<br />
									<span>{lead.interest}</span>
								</div>
								<span>{lead.status}</span>
							</li>
						))}
					</ul>
				</section>
			</div>

			<section className="genesis-card" style={{ marginTop: "1rem" }}>
				<p className="card-kicker">Communications</p>
				<h2>Messages ready for staff or owner approval</h2>
				<ul className="genesis-list">
					{demoMessages.map((message) => (
						<li key={message.id}>
							<div>
								<strong>{message.title}</strong>
								<br />
								<span>{message.audience}</span>
							</div>
							<span>{message.status}</span>
						</li>
					))}
				</ul>
			</section>
		</AppShell>
	);
}
