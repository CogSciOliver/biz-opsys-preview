import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/website/schedule")({
	component: WebsiteSchedulePage,
});

function WebsiteSchedulePage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Class Schedule"
			description="Preview page for weekly class times, age groups, belt levels, and trial-friendly class slots."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Schedule grid</h2>
				<p>
					This route is wired. Next we can turn the demo class data into a clean
					weekly schedule view.
				</p>
			</section>
		</AppShell>
	);
}
