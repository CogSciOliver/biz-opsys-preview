import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/staff/members")({
	component: StaffMembersPage,
});

function StaffMembersPage() {
	return (
		<AppShell
			variant="staff"
			eyebrow="Staff tools"
			title="Members"
			description="Preview page for member search, student profiles, plan status, and attendance notes."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Member directory</h2>
				<p>This route is wired and ready for member profile previews.</p>
			</section>
		</AppShell>
	);
}
