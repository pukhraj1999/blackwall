import type { Components, JSX } from "../types/components";

interface BwInput extends Components.BwInput, HTMLElement {}
export const BwInput: {
    prototype: BwInput;
    new (): BwInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
