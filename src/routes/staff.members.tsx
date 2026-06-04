import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { MemberList } from "../components/MemberList";
import { demoMembers } from "../data/demoBusiness";

export const Route = createFileRoute("/staff/members")({
	component: StaffMembersPage,
});

function StaffMembersPage() {
	return (
		<AppShell
			variant="staff"
			eyebrow="Staff tools"
			title="Members"
			description="A staff member directory preview for student lookup, plan status, belt level, and attendance context."
		>
			<DashboardCard
				eyebrow="Directory"
				title="Member profiles"
				description="In the real system, this would become searchable and filterable. For the prototype, it shows the shape of the staff workflow."
			>
				<MemberList members={demoMembers} showLastCheckIn />
			</DashboardCard>
		</AppShell>
	);
}
