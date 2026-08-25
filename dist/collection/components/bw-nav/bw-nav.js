import { h } from "@stencil/core";
import bar from "../../assets/bars-solid-full.svg";
export class BwNav {
    links;
    isModalOpen = false;
    mg = '0px';
    pd = '10px';
    homeLink = { name: 'Navbar', link: '#' };
    navLinks = [
        { name: 'Search', link: '#' },
        { name: 'Manage', link: '#' },
        { name: 'About', link: '#' },
        { name: 'Profile', link: '#' },
    ];
    componentWillLoad() {
        this.links = this.navLinks;
    }
    openModal = () => {
        this.isModalOpen = true;
    };
    render() {
        return (h("section", { key: '5ffe1ebfd323aeaee7f58fec41846c8cfb2d3172' }, h("nav", { key: '3f22d07e9d2ab1dd649d41ba27f920adbc593b99', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: '75dfd201f8cb4c21e91d63d8fb623980b861fe44', class: "left" }, h("a", { key: '3d8264e1859db7d64d6217d05668cb0d3c7be800', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: 'ab0359206623665e0548daf907bb5dc3612fd7ca', class: "mid" }), h("div", { key: '66dbadda7c0e1bf3e485fadd627b73fb7702f858', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: 'dcf1d076aee47ef8f9ffaaf5433af3531d79baae', class: "mobile-right" }, h("img", { key: '2d9e39eb42d9f072d55855dbe9f6f3ec8cee963e', onClick: this.openModal, class: "burger-icon", src: bar, alt: "" }))), h("bw-modal", { key: 'ae2f12535b1eb7b58730f3d861f1d78cbc2e1e7a', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: 'd8b8acf3c5d718d05f127bcb47ec882a047705d8', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onClick: () => this.isModalOpen = false })))))));
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
                "defaultValue": "{ name: 'Navbar', link: '#' }"
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
                "defaultValue": "[\n    { name: 'Search', link: '#' },\n    { name: 'Manage', link: '#' },\n    { name: 'About', link: '#' },\n    { name: 'Profile', link: '#' },\n  ]"
            }
        };
    }
    static get states() {
        return {
            "links": {},
            "isModalOpen": {}
        };
    }
}
