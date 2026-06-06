import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/create/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/create/schedule"!</div>
}
