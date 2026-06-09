import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "heritage-theme";

function getInitialTheme(): ThemeMode {
	if (typeof window === "undefined") {
		return "light";
	}

	const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

	if (savedTheme === "dark" || savedTheme === "light") {
		return savedTheme;
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

	useEffect(() => {
		const root = document.documentElement;

		root.classList.toggle("dark", theme === "dark");
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	function toggleTheme() {
		setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	}

	return (
		<button
			aria-label={
				theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
			}
			aria-pressed={theme === "dark"}
			className="theme-toggle"
			type="button"
			onClick={toggleTheme}
		>
			<Lightbulb
				aria-hidden="true"
				fill={theme === "dark" ? "currentColor" : "none"}
				size={18}
				strokeWidth={2}
			/>
		</button>
	);
}
