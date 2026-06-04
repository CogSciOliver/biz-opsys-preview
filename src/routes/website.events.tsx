import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/website/events')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/website/events"!</div>
}
