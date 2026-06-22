import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberList } from "../../components/MemberList";
import { MetricCard } from "../../components/MetricCard";
import { TrialLeadList } from "../../components/TrialLeadList";
import {
	demoClasses,
	demoMembers,
	demoTrialLeads,
} from "../../data/demoBusiness";

const adminStats = [
	{
		label: "Appointments today",
		value: "6",
		trend: "Consults, lymphatic care, sculpting, and facial windows",
	},
	{ label: "Consults today", value: "3", trend: "All need prep notes" },
	{
		label: "Check-ins",
		value: "14",
		trend: "Across studio and popup appointment windows",
	},
];

export const Route = createFileRoute("/admin/dashboard")({
	component: AdminDashboardPage,
});

function AdminDashboardPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Admin tools"
			title="Admin Dashboard"
			description="A daily operations view for appointment windows, consultation leads, client notes, and care priorities."
		>
			<div className="grid gap-4 md:grid-cols-3">
				{adminStats.map((metric) => (
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
					eyebrow="Next appointment window"
					title={demoClasses[0].name}
					description={`${demoClasses[0].audience} • ${demoClasses[0].time}`}
					footer={
						<Link to="/admin/check-in" className="button-primary">
							Open check-in
						</Link>
					}
				/>

				<DashboardCard eyebrow="Consultation follow-up" title="Lead queue">
					<TrialLeadList leads={demoTrialLeads} showNextStep />
				</DashboardCard>
			</div>

			<div className="mt-4">
				<DashboardCard eyebrow="Client attention" title="Accounts to review">
					<MemberList members={demoMembers} showLastCheckIn />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
