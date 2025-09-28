import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

function App() {
	return <div>Hello World</div>;
}

describe("App", () => {
	it("renders hello world", () => {
		render(<App />);
		expect(screen.getByText("Hello World")).toBeDefined();
	});
});
