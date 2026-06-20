import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create/create/booking")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/staff/create/classes"!</div>;
}
