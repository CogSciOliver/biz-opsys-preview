import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/member/billing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/member/billing"!</div>
}
