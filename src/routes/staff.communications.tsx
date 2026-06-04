import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/staff/communications")({
	component: StaffCommunicationsPage,
});

function StaffCommunicationsPage() {
	return (
		<AppShell
			variant="staff"
			eyebrow="Staff tools"
			title="Communications"
			description="Preview page for announcements, trial follow-ups, reminders, and member messages."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Message center</h2>
				<p>This route is wired and ready for communication previews.</p>
			</section>
		</AppShell>
	);
}
