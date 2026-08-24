import { h } from "@stencil/core";
export class BwBtn {
    name = "Name";
    link = "#";
    render() {
        return (h("div", { key: '1b94c399148d42ea853d9080dccd97b4a12c0f74', class: "btn-box" }, h("a", { key: '594cbf420c7a17ccbecd1d0a0394711a40465199', href: this.link, class: "btn" }, this.name)));
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
}
