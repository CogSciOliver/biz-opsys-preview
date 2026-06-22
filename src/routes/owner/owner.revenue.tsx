import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { BillingSummary } from "../../components/BillingSummary";
import { DashboardCard } from "../../components/DashboardCard";
import { MetricCard } from "../../components/MetricCard";
import { demoPayments, ownerMetrics } from "../../data/demoBusiness";

export const Route = createFileRoute("/owner/owner/revenue")({
	component: OwnerRevenuePage,
});

function OwnerRevenuePage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Revenue"
			description="A revenue view for service performance, invoice flags, care-plan revenue, product interest, and popup demand."
		>
			<div className="grid gap-4 md:grid-cols-3">
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
					eyebrow="Payments"
					title="Billing watchlist"
					description="The owner gets a clear view of paid, scheduled, review-needed, and popup-related revenue."
				>
					<BillingSummary payments={demoPayments} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
