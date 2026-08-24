import type { Components, JSX } from "../types/components";

interface BwCard extends Components.BwCard, HTMLElement {}
export const BwCard: {
    prototype: BwCard;
    new (): BwCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
