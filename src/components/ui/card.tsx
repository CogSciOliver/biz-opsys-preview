import type * as React from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "inverse";
type CardSize = "default" | "sm";

type CardProps = React.ComponentProps<"section"> & {
	variant?: CardVariant;
	size?: CardSize;
};

function Card({
	className,
	variant = "default",
	size = "default",
	...props
}: CardProps) {
	return (
		<section
			data-slot="card"
			data-size={size}
			data-variant={variant}
			className={cn(
				"group/card border border-border p-5 text-sm shadow-[0_1px_10px_var(--shadow)] data-[size=sm]:p-4",
				variant === "default" && "bg-card text-card-foreground",
				variant === "inverse" && "bg-foreground text-background",
				className,
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="card-header" className={cn(className)} {...props} />;
}

function CardKicker({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="card-kicker"
			className={cn(
				"mb-3 mt-0 text-xs font-bold uppercase tracking-[0.08em] text-primary",
				className,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"h2">) {
	return (
		<h2
			data-slot="card-title"
			className={cn(
				"mb-[0.7rem] mt-0 text-lg font-semibold uppercase tracking-wider",
				className,
			)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="card-description"
			className={cn(
				"m-0 text-sm leading-relaxed text-muted-foreground group-data-[variant=inverse]/card:text-background/70",
				className,
			)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="card-action" className={cn(className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="card-content" className={cn(className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="card-footer" className={cn(className)} {...props} />;
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
	CardKicker,
};