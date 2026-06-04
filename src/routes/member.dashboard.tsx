import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/member/dashboard")({
	component: MemberDashboardPage,
});

function MemberDashboardPage() {
	return (
		<AppShell
			variant="member"
			eyebrow="Member portal"
			title="Member Dashboard"
			description="Preview page for attendance, next classes, family membership status, and announcements."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Member home screen</h2>
				<p>This route is wired and ready for member-facing content.</p>
			</section>
		</AppShell>
	);
}
