import type { Components, JSX } from "../types/components";

interface BwNav extends Components.BwNav, HTMLElement {}
export const BwNav: {
    prototype: BwNav;
    new (): BwNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
