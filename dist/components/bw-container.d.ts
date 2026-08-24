import type { Components, JSX } from "../types/components";

interface BwContainer extends Components.BwContainer, HTMLElement {}
export const BwContainer: {
    prototype: BwContainer;
    new (): BwContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
