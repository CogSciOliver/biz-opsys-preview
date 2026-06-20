import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create/create/client-membership")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/staff/create/membership"!</div>;
}
