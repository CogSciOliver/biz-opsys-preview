import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/create/membership')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/create/membership"!</div>
}
