import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/staff/dashboard")({
	component: StaffDashboardPage,
});

function StaffDashboardPage() {
	return (
		<AppShell
			variant="staff"
			eyebrow="Staff tools"
			title="Staff Dashboard"
			description="Preview page for today's classes, leads, attendance, member notes, and front-desk priorities."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Daily operations view</h2>
				<p>This route is wired and ready for staff dashboard cards.</p>
			</section>
		</AppShell>
	);
}
