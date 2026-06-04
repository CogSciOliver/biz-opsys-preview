import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/owner/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/owner/overview"!</div>
}
