import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/communications')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/communications"!</div>
}
