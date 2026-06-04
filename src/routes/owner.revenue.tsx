import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { BillingSummary } from "../components/BillingSummary";
import { DashboardCard } from "../components/DashboardCard";
import { MetricCard } from "../components/MetricCard";
import { demoPayments, ownerMetrics } from "../data/demoBusiness";

export const Route = createFileRoute("/owner/revenue")({
	component: OwnerRevenuePage,
});

function OwnerRevenuePage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Revenue"
			description="A revenue view for membership performance, payment flags, recurring revenue, and plan health."
		>
			<div className="grid-3">
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
					eyebrow="Payments"
					title="Billing watchlist"
					description="The owner gets a clear view of paid, scheduled, and review-needed membership accounts."
				>
					<BillingSummary payments={demoPayments} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
