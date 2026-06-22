import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../../components/AppShell";
import { DashboardCard } from "../../../components/DashboardCard";
import { EventList } from "../../../components/EventList";
import { demoEvents } from "../../../data/demoBusiness";

export const Route = createFileRoute("/admin/create/create/event")({
	component: CreateEventPage,
});

function CreateEventPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Create workflow"
			title="Create popup or event"
			description="A future workflow for adding popup dates, product workshops, consultation days, and community care events to the public site and admin dashboard."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard eyebrow="Event details" title="Popup draft">
					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Event name</span>
							<div>NYC Popup Care Day</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Location</span>
							<div>City, studio, mobile, Zoom, or touring stop</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Visibility</span>
							<div>Public, interest list only, or client-only</div>
						</div>
					</div>
				</DashboardCard>

				<DashboardCard eyebrow="Existing events" title="Current popup calendar">
					<EventList events={demoEvents} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
