import type { Components, JSX } from "../types/components";

interface BwBtn extends Components.BwBtn, HTMLElement {}
export const BwBtn: {
    prototype: BwBtn;
    new (): BwBtn;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
