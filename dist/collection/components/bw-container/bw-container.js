import { h } from "@stencil/core";
import Theme from "../../models/themes";
export class BwContainer {
    center = false;
    spaceBetween = false;
    mg = '';
    pd = '';
    mgV = '';
    mgH = '';
    pdH = '';
    pdV = '';
    border = '';
    radiusTop = '';
    radiusBottom = '';
    radius = '';
    // Default container is secondary
    primary = false;
    grid = false;
    flex = false;
    split = false;
    render() {
        return (h("main", { key: '30cef91be286cb86e7ee1c4e42b1b3fb4041728f', style: {
                margin: this.mg || '0px',
                marginTop: this.mgV || this.mg,
                marginBottom: this.mgV || this.mg,
                marginLeft: this.mgH || this.mg,
                marginRight: this.mgH || this.mg,
                padding: this.pd || "0px",
                paddingTop: this.pdV || this.pd,
                paddingBottom: this.pdV || this.pd,
                paddingLeft: this.pdH || this.pd,
                paddingRight: this.pdH || this.pd,
                borderColor: Theme.color,
                border: this.border || "none",
                borderRadius: this.radius || "0x",
                borderTopLeftRadius: this.radiusTop || this.radius,
                borderTopRightRadius: this.radiusTop || this.radius,
                borderBottomLeftRadius: this.radiusBottom || this.radius,
                borderBottomRightRadius: this.radiusBottom || this.radius,
                // apply theme
                color: Theme.color,
                backgroundColor: this.primary ? Theme.primary : Theme.secondary,
            }, class: { "container-grid": this.grid, "container-center": this.center, "container-space-between": this.spaceBetween, 'container-flex': this.flex, 'container-split': this.split } }, h("slot", { key: '8f3e0982627ccf872fca288b73e0f6f263977929' })));
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
            "center": {
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
                "attribute": "center",
                "defaultValue": "false"
            },
            "spaceBetween": {
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
                "attribute": "space-between",
                "defaultValue": "false"
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
                "defaultValue": "''"
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
                "defaultValue": "''"
            },
            "mgV": {
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
                "attribute": "mg-v",
                "defaultValue": "''"
            },
            "mgH": {
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
                "attribute": "mg-h",
                "defaultValue": "''"
            },
            "pdH": {
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
                "attribute": "pd-h",
                "defaultValue": "''"
            },
            "pdV": {
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
                "attribute": "pd-v",
                "defaultValue": "''"
            },
            "border": {
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
                "attribute": "border",
                "defaultValue": "''"
            },
            "radiusTop": {
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
                "attribute": "radius-top",
                "defaultValue": "''"
            },
            "radiusBottom": {
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
                "attribute": "radius-bottom",
                "defaultValue": "''"
            },
            "radius": {
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
                "attribute": "radius",
                "defaultValue": "''"
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
            },
            "flex": {
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
                "attribute": "flex",
                "defaultValue": "false"
            },
            "split": {
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
                "attribute": "split",
                "defaultValue": "false"
            }
        };
    }
}
