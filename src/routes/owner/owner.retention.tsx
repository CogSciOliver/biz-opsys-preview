import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberList } from "../../components/MemberList";
import { MetricCard } from "../../components/MetricCard";
import { demoMembers } from "../../data/demoBusiness";

const retentionMetrics = [
	{
		label: "Retention",
		value: "86%",
		trend: "Clients with a next care step or follow-up",
	},
	{
		label: "Care-plan risk",
		value: "6",
		trend: "Clients without a next appointment or product path",
	},
	{
		label: "Follow-ups",
		value: "18",
		trend: "Consults needing next-step decisions",
	},
];

export const Route = createFileRoute("/owner/owner/retention")({
	component: OwnerRetentionPage,
});

function OwnerRetentionPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Retention"
			description="A retention view for care-plan signals, follow-up risk, popup interest, product support, and clients who need attention."
		>
			<div className="grid gap-4 md:grid-cols-3">
				{retentionMetrics.map((metric) => (
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
					eyebrow="Client signals"
					title="Who needs attention?"
					description="A future version could flag missed follow-ups, billing friction, popup waitlist demand, product gaps, or clients without a next care step."
				>
					<MemberList members={demoMembers} showLastCheckIn />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
