import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/owner/retention')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/owner/retention"!</div>
}
