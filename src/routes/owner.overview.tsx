import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { BillingSummary } from "../components/BillingSummary";
import { CommunicationPreview } from "../components/CommunicationPreview";
import { DashboardCard } from "../components/DashboardCard";
import { MetricCard } from "../components/MetricCard";
import { TrialLeadList } from "../components/TrialLeadList";
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
					<MetricCard
						key={metric.label}
						label={metric.label}
						value={metric.value}
						trend={metric.trend}
					/>
				))}
			</div>

			<div className="genesis-grid" style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Billing watchlist"
					title="Membership revenue"
					footer={
						<Link to="/owner/revenue" className="button-primary">
							View revenue
						</Link>
					}
				>
					<BillingSummary payments={demoPayments} />
				</DashboardCard>

				<DashboardCard eyebrow="Sales pipeline" title="Trial leads">
					<TrialLeadList leads={demoTrialLeads} />
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Communications"
					title="Messages ready for staff or owner approval"
				>
					<CommunicationPreview messages={demoMessages} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
