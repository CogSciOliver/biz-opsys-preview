import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { BillingSummary } from "../../components/BillingSummary";
import { CommunicationPreview } from "../../components/CommunicationPreview";
import { DashboardCard } from "../../components/DashboardCard";
import { MetricCard } from "../../components/MetricCard";
import { TrialLeadList } from "../../components/TrialLeadList";
import {
	demoMessages,
	demoPayments,
	demoTrialLeads,
	ownerMetrics,
} from "../../data/demoBusiness";

export const Route = createFileRoute("/owner/owner/overview")({
	component: OwnerOverviewPage,
});

function OwnerOverviewPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Business Health"
			description="See the business without digging through five systems. This page previews the executive layer: revenue, retention, consultation pipeline, billing flags, popup demand, and communication readiness."
		>
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{ownerMetrics.map((metric) => (
					<MetricCard
						key={metric.label}
						label={metric.label}
						value={metric.value}
						trend={metric.trend}
					/>
				))}
			</div>

			<div className="mt-4 grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Billing watchlist"
					title="Service revenue"
					footer={
						<Link to="/owner/owner/revenue" className="button-primary">
							View revenue
						</Link>
					}
				>
					<BillingSummary payments={demoPayments} />
				</DashboardCard>

				<DashboardCard eyebrow="Sales pipeline" title="Consultation leads">
					<TrialLeadList leads={demoTrialLeads} />
				</DashboardCard>
			</div>

			<div className="mt-4">
				<DashboardCard
					eyebrow="Communications"
					title="Messages ready for admin or owner approval"
				>
					<CommunicationPreview messages={demoMessages} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
