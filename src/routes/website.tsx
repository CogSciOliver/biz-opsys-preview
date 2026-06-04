import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/website')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/website"!</div>
}
