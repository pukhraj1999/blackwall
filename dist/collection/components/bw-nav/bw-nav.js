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
        return (h("section", { key: '570b9af558e94729087ac120c273a4982158dd08' }, h("nav", { key: '4c6845a5e1690fb629d14be918e453782b31f552', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: 'a125ebee4a74071f7f1f897cf161f64558236688', class: "left" }, h("a", { key: 'e9a9b94d6e3cf9b61ec464d7eaafcf7a321fe515', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: '9b38028805ed3063ab0cd64f70ec8b7f33405e23', class: "mid" }), h("div", { key: 'f0d630696069c279b3f47abf1c7e83409f88c9f9', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: 'a848dcab0b27b985a0c617da3f16cdb43f0ad4de', class: "mobile-right" }, h("img", { key: 'c6b9ba4951ba3ed55ec9692f48935009018d2573', onClick: this.openModal, class: "burger-icon", src: bar, alt: "" }))), h("bw-modal", { key: 'fac4d4e9460df5b7606bc09c11251b50cc598be6', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: '3e2d2ebfbb1a636e0ee3b4ba2e1704866e4afed3', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onClick: () => this.isModalOpen = false })))))));
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
