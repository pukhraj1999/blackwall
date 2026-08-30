import type { Components, JSX } from "../types/components";

interface BwImg extends Components.BwImg, HTMLElement {}
export const BwImg: {
    prototype: BwImg;
    new (): BwImg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
