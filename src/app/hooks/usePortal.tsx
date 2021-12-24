import { useRef, useEffect } from "react";

function createRootElement(id: string): HTMLDivElement {
	const rootContainer = document.createElement("div");
	rootContainer.setAttribute("id", id);
	return rootContainer;
}

function addRootElement(rootElem: Element): void {
	document.body.insertBefore(
		rootElem,
		document?.body?.lastElementChild?.nextElementSibling as Node
	);
}

export default function usePortal(id: string): HTMLElement {
  const rootElementRef = useRef<HTMLElement | null>(null)

	useEffect(
		function setupElement(): () => void {
			const existingParent = document.querySelector(`#${id}`);
			const parentElem = existingParent || createRootElement(id);

			if (!existingParent) {
				addRootElement(parentElem);
			}

			parentElem.appendChild(rootElementRef.current as HTMLElement);

			return function removeElement(): void {
				rootElementRef?.current?.remove();
				if (!parentElem.childElementCount) {
					parentElem.remove();
				}
			};
		},
		[id]
	);

	function getRootElem(): HTMLElement {
		if (!rootElementRef.current) {
			rootElementRef.current = document.createElement("div");
		}

		return rootElementRef.current;
	}

	return getRootElem();
}
