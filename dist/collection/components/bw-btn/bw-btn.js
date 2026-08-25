import { h } from "@stencil/core";
export class BwBtn {
    name = "Name";
    link = "#";
    Click;
    performAction = () => {
        this.Click.emit();
    };
    render() {
        return (h("div", { key: 'fc94608cf1bc84fbdd589ed2d4960abec3f75200', class: "btn-box" }, h("a", { key: '65de8d58ba767d43d1038c9f109b00fcfde24ad1', href: this.link, class: "btn", onClick: this.performAction }, this.name)));
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
            }
        };
    }
    static get events() {
        return [{
                "method": "Click",
                "name": "Click",
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
