import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/owner/revenue')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/owner/revenue"!</div>
}
