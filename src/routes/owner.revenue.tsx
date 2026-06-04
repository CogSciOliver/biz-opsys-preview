import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/owner/revenue")({
	component: OwnerRevenuePage,
});

function OwnerRevenuePage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Revenue"
			description="Preview page for membership revenue, past-due accounts, plan mix, and growth trends."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Revenue reporting</h2>
				<p>This route is wired and ready for reporting cards.</p>
			</section>
		</AppShell>
	);
}
