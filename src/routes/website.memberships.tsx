import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/website/memberships')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/website/memberships"!</div>
}
