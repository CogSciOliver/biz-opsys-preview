import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { BillingSummary } from "../components/BillingSummary";
import { DashboardCard } from "../components/DashboardCard";
import { MemberStatusBadge } from "../components/MemberStatusBadge";
import { demoMembers, demoPayments } from "../data/demoBusiness";

export const Route = createFileRoute("/member/billing")({
	component: MemberBillingPage,
});

function MemberBillingPage() {
	const member = demoMembers[0];

	return (
		<AppShell
			variant="member"
			eyebrow="Member portal"
			title="Billing"
			description="A member-facing billing view that makes plan status, payment history, and account health clear."
		>
			<div className="genesis-grid">
				<DashboardCard
					eyebrow="Current plan"
					title={member.plan}
					description={`${member.name} • Last check-in: ${member.lastCheckIn}`}
				>
					<MemberStatusBadge status={member.status} />
				</DashboardCard>

				<DashboardCard
					eyebrow="Next payment"
					title="$219"
					description="Upcoming family membership renewal preview."
				>
					<MemberStatusBadge status="Scheduled" />
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard eyebrow="Payment history" title="Recent payments">
					<BillingSummary payments={demoPayments.slice(0, 2)} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
