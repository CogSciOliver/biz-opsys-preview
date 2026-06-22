import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberList } from "../../components/MemberList";
import { demoMembers } from "../../data/demoBusiness";

export const Route = createFileRoute("/admin/view-members")({
	component: AdminClientsPage,
});

function AdminClientsPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Admin tools"
			title="Clients"
			description="An admin client directory preview for client lookup, care-plan status, body goals, latest notes, and appointment context."
		>
			<p className="mb-4 border border-primary bg-primary px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground">
				DEV CREATE: client search by name, sort by care plan, filter by status,
				location, service interest, and latest note.
			</p>

			<DashboardCard
				eyebrow="Directory"
				title="Client profiles"
				description="In the real system, this would become searchable and filterable. For the prototype, it shows the shape of the admin workflow."
			>
				<MemberList members={demoMembers} showLastCheckIn />
			</DashboardCard>
		</AppShell>
	);
}
