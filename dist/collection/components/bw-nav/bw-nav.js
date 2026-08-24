import { h } from "@stencil/core";
export class BwNav {
    links;
    mg = '0px';
    pd = '10px';
    homeLink = { name: "Navbar", link: "#" };
    navLinks = [
        { name: "Search", link: "#" },
        { name: "Manage", link: "#" },
        { name: "About", link: "#" },
        { name: "Profile", link: "#" }
    ];
    componentWillLoad() {
        this.links = this.navLinks;
    }
    render() {
        return (h("nav", { key: 'efba128fdc10a09173d12db27911fbba86325fa7', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: '377dd897009c05ed43d8e07787096473848466c1', class: "left" }, h("a", { key: '33bdf2b09497ffecdbb80050c52824c3da92f443', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: '3894d5de28e5304c6cb87fabcc30b66e57b8b49e', class: "mid" }), h("div", { key: '6df53a2a2499dd7aed390555e7528d2f70f8b63a', class: "right" }, this.links.map(({ name, link }) => h("a", { class: "right-link", href: link }, name)))));
    }
    static get is() { return "bw-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bw-nav.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bw-nav.css"]
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
                "defaultValue": "'10px'"
            },
            "homeLink": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ILink",
                    "resolved": "ILink",
                    "references": {
                        "ILink": {
                            "location": "import",
                            "path": "../../models/ILink",
                            "id": "src/models/ILink.ts::ILink",
                            "isDefault": true
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{name:\"Navbar\", link:\"#\"}"
            },
            "navLinks": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Array<ILink>",
                    "resolved": "ILink[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "ILink": {
                            "location": "import",
                            "path": "../../models/ILink",
                            "id": "src/models/ILink.ts::ILink",
                            "isDefault": true
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    {name:\"Search\",link:\"#\"},\n    {name:\"Manage\",link:\"#\"},\n    {name:\"About\",link:\"#\"},\n    {name:\"Profile\",link:\"#\"}\n  ]"
            }
        };
    }
    static get states() {
        return {
            "links": {}
        };
    }
}
