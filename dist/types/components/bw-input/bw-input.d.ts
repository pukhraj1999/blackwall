import { EventEmitter } from '../../stencil-public-runtime';
export declare class BwInput {
    isError: boolean;
    value: string;
    isRequired: boolean;
    isDisabled: boolean;
    boxMg: string;
    boxMgH: string;
    boxMgV: string;
    boxPd: string;
    boxPdH: string;
    boxPdV: string;
    mg: string;
    pd: string;
    size: string;
    labelSize: string;
    labelBold: boolean;
    label: string;
    type: string;
    placeholder: string;
    textarea: boolean;
    row: number;
    col: number;
    changedValue: EventEmitter<{
        oldValue: string;
        newValue: string;
    }>;
    valueChanged(newValue: string, oldValue: string): void;
    render(): any;
}
