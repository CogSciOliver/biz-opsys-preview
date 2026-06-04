import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/owner/settings")({
	component: OwnerSettingsPage,
});

function OwnerSettingsPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Settings"
			description="Preview page for business profile, class rules, trial flow, staff permissions, and branding."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Business controls</h2>
				<p>This route is wired and ready for owner settings previews.</p>
			</section>
		</AppShell>
	);
}
