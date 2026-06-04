import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/website/memberships")({
	component: WebsiteMembershipsPage,
});

function WebsiteMembershipsPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Memberships"
			description="Preview page for family, kids, adult, and unlimited training options."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Membership comparison cards</h2>
				<p>
					This route is wired. Next we can add plan cards, pricing language,
					trial conversion copy, and family membership positioning.
				</p>
			</section>
		</AppShell>
	);
}
