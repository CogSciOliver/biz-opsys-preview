import { useEffect, useState } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardKicker,
	CardTitle,
} from "@/components/ui/card";

type CheckInKioskProps = {
	activeClass: {
		name: string;
		audience: string;
		time: string;
		level: string;
		spots: number;
	};
	checkedInCount: number;
};

function KioskStat({
	value,
	label,
}: {
	value: number;
	label: string;
}) {
	return (
		<div className="bg-background/10 p-4 ring-1 ring-background/15">
			<strong className="block text-3xl font-bold leading-none text-background">
				{value}
			</strong>
			<span className="mt-3 block text-sm text-background/70">{label}</span>
		</div>
	);
}

export function CheckInKiosk({
	activeClass,
	checkedInCount,
}: CheckInKioskProps) {
	const [openSpots, setOpenSpots] = useState(activeClass.spots);
	const [checkedInTotal, setCheckedInTotal] = useState(checkedInCount);

	useEffect(() => {
		setOpenSpots(activeClass.spots);
		setCheckedInTotal(checkedInCount);
	}, [activeClass, checkedInCount]);

	const isClassFull = openSpots <= 0;

	function handleCheckIn() {
		if (isClassFull) return;

		setOpenSpots((current) => current - 1);
		setCheckedInTotal((current) => current + 1);
	}

	return (
		<Card variant="inverse">
			<CardHeader>
				<CardKicker>Now checking in</CardKicker>

				<CardTitle className="text-3xl normal-case tracking-normal text-background">
					{activeClass.name}
				</CardTitle>

				<CardDescription>
					{activeClass.audience} • {activeClass.time} • {activeClass.level}
				</CardDescription>
			</CardHeader>

			<CardContent className="mt-6 space-y-4">
				<div className="grid gap-4 sm:grid-cols-2">
					<KioskStat value={openSpots} label="Open spots remaining" />
					<KioskStat value={checkedInTotal} label="Students checked in" />
				</div>

				<button
					type="button"
					onClick={handleCheckIn}
					disabled={isClassFull}
					className="w-full bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{isClassFull ? "Class full" : "Check in member"}
				</button>
			</CardContent>
		</Card>
	);
}