import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/website/events")({
	component: WebsiteEventsPage,
});

function WebsiteEventsPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Events"
			description="Preview page for open mats, family events, belt testing, seminars, and community days."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Event cards</h2>
				<p>
					This route is wired. Next we can show event registration previews and
					member-only event calls to action.
				</p>
			</section>
		</AppShell>
	);
}
