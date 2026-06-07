import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/staff/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/staff/settings"!</div>;
}
