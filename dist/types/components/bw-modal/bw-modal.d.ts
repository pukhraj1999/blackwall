import { EventEmitter } from '../../stencil-public-runtime';
export declare class BwModal {
    isOpen: boolean;
    name: string;
    modalClosed: EventEmitter<void>;
    private closeModal;
    render(): any;
}
