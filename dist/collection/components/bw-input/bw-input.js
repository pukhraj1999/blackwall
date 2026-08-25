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
    placeholder = 'Type Something';
    render() {
        return (h("div", { key: '15313d6745e29e93823685713dc0d8294a1e7f65', class: "input-box", style: {
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
            } }, h("p", { key: '978a1faed388671ccd65b4e29666027d21547b88', class: {
                'label-bold': this.labelBold,
            }, style: {
                fontSize: this.labelSize,
            } }, this.label), h("input", { key: '63f1380ca877655ed738fe3772a410a8d06b1203', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, type: "text", placeholder: this.placeholder, disabled: this.isDisabled, required: this.isRequired }), this.isError && (h("p", { key: 'e8104eab175a633cb33ce8e906b4dd5fab677c7d', class: {
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
}
