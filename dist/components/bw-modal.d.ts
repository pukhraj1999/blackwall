import type { Components, JSX } from "../types/components";

interface BwModal extends Components.BwModal, HTMLElement {}
export const BwModal: {
    prototype: BwModal;
    new (): BwModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
