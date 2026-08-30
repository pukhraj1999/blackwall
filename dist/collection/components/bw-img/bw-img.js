import { h } from "@stencil/core";
import Theme from "../../models/themes";
export class BwImg {
    imgSrc;
    imgAlt;
    width = "100%";
    height = "250px";
    border = '';
    radiusTop = '';
    radiusBottom = '';
    radius = '';
    render() {
        return (h("img", { key: '0ef752a0d3893b8a40712936fdad7026ea31c8b6', style: {
                width: this.width,
                height: this.height,
                borderColor: Theme.color,
                border: this.border || "none",
                borderRadius: this.radius || "0x",
                borderTopLeftRadius: this.radiusTop || this.radius,
                borderTopRightRadius: this.radiusTop || this.radius,
                borderBottomLeftRadius: this.radiusBottom || this.radius,
                borderBottomRightRadius: this.radiusBottom || this.radius
            }, src: this.imgSrc || '', alt: this.imgAlt, class: "card-img" }));
    }
    static get is() { return "bw-img"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bw-img.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bw-img.css"]
        };
    }
    static get properties() {
        return {
            "imgSrc": {
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
                "attribute": "img-src"
            },
            "imgAlt": {
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
                "attribute": "img-alt"
            },
            "width": {
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
                "attribute": "width",
                "defaultValue": "\"100%\""
            },
            "height": {
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
                "attribute": "height",
                "defaultValue": "\"250px\""
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
            }
        };
    }
}
