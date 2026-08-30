import { h } from "@stencil/core";
export class BwInput {
    isError = false;
    value = '';
    isRequired = false;
    isDisabled = false;
    boxMg = '0px';
    boxMgH;
    boxMgV;
    boxPd = '0px';
    boxPdH;
    boxPdV;
    mg = '0px';
    pd = '5px';
    size = '1rem';
    labelSize = '1.5rem';
    labelBold = false;
    label = 'Name';
    type = 'type';
    placeholder = 'Type Something';
    // For Text Area
    textarea = false;
    row = 5;
    col = 5;
    changedValue;
    valueChanged(newValue, oldValue) {
        // react to the change
        this.changedValue.emit({ oldValue, newValue });
    }
    render() {
        return (h("div", { key: '0161e6dcfe6278f054a12beb69c515381f4f8d53', class: "input-box", style: {
                margin: this.boxMg,
                marginTop: this.boxMgV || this.boxMg,
                marginBottom: this.boxMgV || this.boxMg,
                marginLeft: this.boxMgH || this.boxMg,
                marginRight: this.boxMgH || this.boxMg,
                padding: this.boxPd,
                paddingTop: this.boxPdV || this.boxPd,
                paddingBottom: this.boxPdV || this.boxPd,
                paddingLeft: this.boxPdH || this.boxPd,
                paddingRight: this.boxPdH || this.boxPd,
            } }, h("p", { key: 'e51d73e07df1a61d3a22243b9e581b1e1adbc721', class: {
                'label-bold': this.labelBold,
            }, style: {
                fontSize: this.labelSize,
            } }, this.label), !this.textarea && (h("input", { key: 'ceb0bd0061459f065f4d4111e300012e87ef710e', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, type: this.type, placeholder: this.placeholder, value: this.value, disabled: this.isDisabled, required: this.isRequired })), this.textarea && (h("textarea", { key: '08d540ff6319fd00923cebc79dbd0a2e6db19d27', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, rows: this.row, cols: this.col, placeholder: this.placeholder, value: this.value, disabled: this.isDisabled, required: this.isRequired })), this.isError && (h("p", { key: 'cbbe2285f1b2e42f4b165f5f3a8f2e30e87372d2', class: {
                'error-msg': true,
            } }, "This is error message"))));
    }
    static get is() { return "bw-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bw-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bw-input.css"]
        };
    }
    static get properties() {
        return {
            "boxMg": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "box-mg",
                "defaultValue": "'0px'"
            },
            "boxMgH": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "box-mg-h"
            },
            "boxMgV": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "box-mg-v"
            },
            "boxPd": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "box-pd",
                "defaultValue": "'0px'"
            },
            "boxPdH": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "box-pd-h"
            },
            "boxPdV": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "box-pd-v"
            },
            "mg": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mg",
                "defaultValue": "'0px'"
            },
            "pd": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pd",
                "defaultValue": "'5px'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'1rem'"
            },
            "labelSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label-size",
                "defaultValue": "'1.5rem'"
            },
            "labelBold": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label-bold",
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Name'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'type'"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'Type Something'"
            },
            "textarea": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "textarea",
                "defaultValue": "false"
            },
            "row": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "row",
                "defaultValue": "5"
            },
            "col": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "col",
                "defaultValue": "5"
            }
        };
    }
    static get states() {
        return {
            "isError": {},
            "value": {},
            "isRequired": {},
            "isDisabled": {}
        };
    }
    static get events() {
        return [{
                "method": "changedValue",
                "name": "changedValue",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ oldValue: string; newValue: string }",
                    "resolved": "{ oldValue: string; newValue: string; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
}
