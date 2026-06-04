import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/member/classes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/member/classes"!</div>
}
