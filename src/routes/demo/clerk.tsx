import {
	Show,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/clerk")({
	component: ClerkDemoPage,
});

function ClerkDemoPage() {
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
					This page confirms that Clerk is connected and can respond to
					signed-in and signed-out states.
				</p>

				<div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
					<Show when="signed-out">
						<p className="mb-4 text-neutral-300">
							You are signed out. Use the buttons below to test Clerk.
						</p>

						<div className="flex flex-wrap gap-3">
							<SignInButton>
								<button
									type="button"
									className="rounded-full bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500"
								>
									Sign in
								</button>
							</SignInButton>

							<SignUpButton>
								<button
									type="button"
									className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
								>
									Create account
								</button>
							</SignUpButton>
						</div>
					</Show>

					<Show when="signed-in">
						<div className="flex items-center justify-between gap-4">
							<div>
								<p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
									Clerk status
								</p>
								<p className="mt-1 text-lg font-semibold">
									Signed in successfully.
								</p>
							</div>

							<UserButton />
						</div>
					</Show>
				</div>
			</section>
		</main>
	);
}
