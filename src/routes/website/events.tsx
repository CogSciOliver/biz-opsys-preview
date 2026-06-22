import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";
import { EventList } from "../../components/EventList";
import { demoEvents } from "../../data/demoBusiness";

export const Route = createFileRoute("/website/events")({
	component: WebsiteEventsPage,
});

function WebsiteEventsPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Popups and care events"
			description="A public events page for touring popups, at-home care workshops, consultation windows, and community care moments."
		>
			<DashboardCard
				eyebrow="Upcoming popups"
				title="Give the care business a living calendar"
				description="Events become part of the sales and retention system instead of being scattered across posts, texts, and memory."
				footer={
					<Link to="/website/join" className="button-primary">
						Ask about visiting
					</Link>
				}
			>
				<EventList events={demoEvents} />
			</DashboardCard>
		</AppShell>
	);
}
