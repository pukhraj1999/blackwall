import { h } from "@stencil/core";
export class BwContainer {
    mg = "0px";
    pd = "10px";
    grid = false;
    render() {
        return (h("main", { key: 'b19ad5eda922a81c1ad9be94ae2f69c978e4a99a', class: { "container": true, "container-grid": this.grid }, style: { margin: this.mg, padding: this.pd } }, h("slot", { key: '9b2c309104c22181aabd035d8dc7899b448c2b01' })));
    }
    static get is() { return "bw-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bw-container.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bw-container.css"]
        };
    }
    static get properties() {
        return {
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
                "defaultValue": "\"0px\""
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
                "defaultValue": "\"10px\""
            },
            "grid": {
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
                "attribute": "grid",
                "defaultValue": "false"
            }
        };
    }
}
