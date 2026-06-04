import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/member/classes")({
	component: MemberClassesPage,
});

function MemberClassesPage() {
	return (
		<AppShell
			variant="member"
			eyebrow="Member portal"
			title="My Classes"
			description="Preview page for booked classes, recommended classes, attendance, and family schedule visibility."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Class list</h2>
				<p>This route is wired and ready for member class scheduling.</p>
			</section>
		</AppShell>
	);
}
