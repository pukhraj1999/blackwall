import { h } from "@stencil/core";
export class BwBtn {
    name = "Name";
    link = "#";
    borderWidth = "2px";
    radius = "0px";
    size = "1.25rem";
    press;
    performAction = () => {
        this.press.emit();
    };
    render() {
        return (h("div", { key: 'fd77f7463e000565eb8380c21a1dbfb0fff2a09f', class: "btn-box" }, h("a", { key: '381ba1c983f63520b3adc20f0766f9457db6c4b8', href: this.link, style: {
                fontSize: this.size,
                border: this.borderWidth + " solid white",
                borderRadius: this.radius,
            }, class: "btn", onClick: this.performAction }, this.name)));
    }
    static get is() { return "bw-btn"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bw-btn.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bw-btn.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                "attribute": "name",
                "defaultValue": "\"Name\""
            },
            "link": {
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
                "attribute": "link",
                "defaultValue": "\"#\""
            },
            "borderWidth": {
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
                "attribute": "border-width",
                "defaultValue": "\"2px\""
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
                "defaultValue": "\"0px\""
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
                "defaultValue": "\"1.25rem\""
            }
        };
    }
    static get events() {
        return [{
                "method": "press",
                "name": "press",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
