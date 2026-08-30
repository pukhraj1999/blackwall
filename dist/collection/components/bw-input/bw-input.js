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
        return (h("div", { key: 'a215a94db9d87b40e0e24bc6ad9c6a565432091a', class: "input-box", style: {
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
            } }, h("p", { key: '5700f1fdc5ad9e41411aa53200e2375e23b7e25a', class: {
                'label-bold': this.labelBold,
            }, style: {
                fontSize: this.labelSize,
            } }, this.label), !this.textarea && (h("input", { key: '7aa2f6b07d11b68201f941f9cf0688ecfdcf35c2', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, type: this.type, placeholder: this.placeholder, value: this.value, disabled: this.isDisabled, required: this.isRequired })), this.textarea && (h("textarea", { key: 'd21b4e3bd25f93449857b71d51765921ace29d41', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, rows: this.row, cols: this.col, placeholder: this.placeholder, value: this.value, disabled: this.isDisabled, required: this.isRequired })), this.isError && (h("p", { key: 'dc96c2892b25e673ec54007c61c5d1e83fb48534', class: {
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
