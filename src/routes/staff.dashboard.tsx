import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { MemberList } from "../components/MemberList";
import { MetricCard } from "../components/MetricCard";
import { TrialLeadList } from "../components/TrialLeadList";
import { demoClasses, demoMembers, demoTrialLeads } from "../data/demoBusiness";

const staffMetrics = [
	{ label: "Classes today", value: "6", trend: "2 kids, 3 adults, 1 family" },
	{ label: "Trials today", value: "3", trend: "All need welcome follow-up" },
	{
		label: "Check-ins",
		value: "42",
		trend: "Across afternoon and evening classes",
	},
];

export const Route = createFileRoute("/staff/dashboard")({
	component: StaffDashboardPage,
});

function StaffDashboardPage() {
	return (
		<AppShell
			variant="staff"
			eyebrow="Staff tools"
			title="Staff Dashboard"
			description="A daily operations view for classes, leads, attendance, and front-desk priorities."
		>
			<div className="grid-3">
				{staffMetrics.map((metric) => (
					<MetricCard
						key={metric.label}
						label={metric.label}
						value={metric.value}
						trend={metric.trend}
					/>
				))}
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Next class"
					title={demoClasses[0].name}
					description={`${demoClasses[0].audience} • ${demoClasses[0].time}`}
					footer={
						<Link to="/staff/check-in" className="button-primary">
							Open check-in
						</Link>
					}
				/>

				<DashboardCard eyebrow="Trial follow-up" title="Lead queue">
					<TrialLeadList leads={demoTrialLeads} showNextStep />
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard eyebrow="Member attention" title="Accounts to review">
					<MemberList members={demoMembers} showLastCheckIn />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
