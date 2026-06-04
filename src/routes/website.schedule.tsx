import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/website/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/website/schedule"!</div>
}
