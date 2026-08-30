import { EventEmitter } from '../../stencil-public-runtime';
export declare class BwBtn {
    name: string;
    link: string;
    borderWidth: string;
    radius: string;
    size: string;
    press: EventEmitter<void>;
    private performAction;
    render(): any;
}
