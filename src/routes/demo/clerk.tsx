import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo/clerk')({
  component: ClerkDemoPage,
})

function ClerkDemoPage() {
  const { user } = useUser()

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
          Clerk Smoke Test
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Interactive Business Operating System Prototype
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-300">
          This page confirms that Clerk is connected, the publishable key is
          loading, and the app can respond to signed-in and signed-out states.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <SignedOut>
            <p className="mb-4 text-neutral-300">
              You are signed out. Click below to test Clerk sign in.
            </p>
            <SignInButton mode="modal">
              <button className="rounded-full bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500">
                Sign in with Clerk
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Signed in as
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {user?.fullName ?? user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </section>
    </main>
  )
}