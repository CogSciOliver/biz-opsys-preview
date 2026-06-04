import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/check-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/check-in"!</div>
}
