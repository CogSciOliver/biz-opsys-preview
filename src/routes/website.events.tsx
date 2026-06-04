import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { EventList } from "../components/EventList";
import { demoEvents } from "../data/demoBusiness";

export const Route = createFileRoute("/website/events")({
	component: WebsiteEventsPage,
});

function WebsiteEventsPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Events"
			description="A public events page for open mats, family intro days, belt testing, and community moments."
		>
			<DashboardCard
				eyebrow="Upcoming events"
				title="Give the gym a living calendar"
				description="Events become part of the sales and retention system instead of being scattered across posts, texts, and memory."
				footer={
					<Link to="/join" className="button-primary">
						Ask about visiting
					</Link>
				}
			>
				<EventList events={demoEvents} />
			</DashboardCard>
		</AppShell>
	);
}
