import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/staff/create/classes")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/staff/create/classes"!</div>;
}
