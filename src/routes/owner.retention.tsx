import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { MemberList } from "../components/MemberList";
import { MetricCard } from "../components/MetricCard";
import { demoMembers } from "../data/demoBusiness";

const retentionMetrics = [
	{
		label: "Retention",
		value: "91%",
		trend: "Strong family membership continuity",
	},
	{
		label: "Attendance risk",
		value: "6",
		trend: "Members with reduced check-ins",
	},
	{
		label: "Milestones",
		value: "18",
		trend: "Students nearing testing readiness",
	},
];

export const Route = createFileRoute("/owner/retention")({
	component: OwnerRetentionPage,
});

function OwnerRetentionPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Retention"
			description="A retention view for attendance signals, churn risk, family engagement, and student milestones."
		>
			<div className="genesis-grid-3">
				{retentionMetrics.map((metric) => (
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
					eyebrow="Member signals"
					title="Who needs attention?"
					description="A future version could flag attendance drops, billing friction, missed milestones, or trial students who never converted."
				>
					<MemberList members={demoMembers} showLastCheckIn />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
