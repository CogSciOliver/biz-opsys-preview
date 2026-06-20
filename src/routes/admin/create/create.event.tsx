import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create/create/event")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/staff/create/event"!</div>;
}
