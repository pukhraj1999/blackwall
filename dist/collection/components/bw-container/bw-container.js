import { h } from "@stencil/core";
export class BwContainer {
    mg = "0px";
    pd = "10px";
    // Default container is secondary
    primary = false;
    grid = false;
    render() {
        return (h("main", { key: '0075b6950189321fd911a03cec91a7c43ed30580', class: { "container": true, "primary": this.primary, "container-grid": this.grid }, style: { margin: this.mg, padding: this.pd } }, h("slot", { key: '936f3bae96215570b0f44285ad71543a88959f3d' })));
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
            "primary": {
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
                "attribute": "primary",
                "defaultValue": "false"
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
