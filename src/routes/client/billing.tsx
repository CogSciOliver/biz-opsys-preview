import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { BillingSummary } from "../../components/BillingSummary";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberStatusBadge } from "../../components/MemberStatusBadge";
import { demoMembers, demoPayments } from "../../data/demoBusiness";

export const Route = createFileRoute("/client/billing")({
	component: ClientBillingPage,
});

function ClientBillingPage() {
	const client = demoMembers[0];

	return (
		<AppShell
			variant="client"
			eyebrow="Client portal"
			title="Billing"
			description="A client-facing billing view that makes care-plan status, invoices, and account health clear."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Current care plan"
					title={client.plan}
					description={`${client.name} • Latest note: ${client.lastCheckIn}`}
				>
					<MemberStatusBadge status={client.status} />
				</DashboardCard>

				<DashboardCard
					eyebrow="Next payment"
					title="$275"
					description="Upcoming care-plan renewal preview."
				>
					<MemberStatusBadge status="Scheduled" />
				</DashboardCard>
			</div>

			<div className="mt-4">
				<DashboardCard eyebrow="Payment history" title="Recent invoices">
					<BillingSummary payments={demoPayments.slice(0, 2)} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
