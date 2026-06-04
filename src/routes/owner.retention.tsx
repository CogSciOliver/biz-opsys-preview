import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/owner/retention")({
	component: OwnerRetentionPage,
});

function OwnerRetentionPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Retention"
			description="Preview page for attendance trends, churn risks, milestone tracking, and member engagement."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Retention view</h2>
				<p>This route is wired and ready for retention insights.</p>
			</section>
		</AppShell>
	);
}
