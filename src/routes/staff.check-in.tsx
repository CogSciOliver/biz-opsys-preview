import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { CheckInKiosk } from "../components/CheckInKiosk";
import { DashboardCard } from "../components/DashboardCard";
import { MemberList } from "../components/MemberList";
import { TrialLeadList } from "../components/TrialLeadList";
import { demoClasses, demoMembers, demoTrialLeads } from "../data/demoBusiness";

export const Route = createFileRoute("/staff/check-in")({
	component: StaffCheckInPage,
});

function StaffCheckInPage() {
	const activeClass = demoClasses[1];

	return (
		<AppShell
			variant="staff"
			eyebrow="Staff kiosk"
			title="Check students in fast."
			description="A front-desk and mat-side preview for attendance, trial visitors, member status, and class capacity."
		>
			<div className="grid">
				<CheckInKiosk activeClass={activeClass} checkedInCount={14} />

				<DashboardCard eyebrow="Member lookup" title="Recent check-ins">
					<MemberList members={demoMembers} />
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Trial visitors"
					title="People staff should greet intentionally"
				>
					<TrialLeadList leads={demoTrialLeads} showNextStep />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
