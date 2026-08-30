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
        return (h("section", { key: '04cd53f0a426091f8e6dca98e6c7d13a075799b8' }, h("nav", { key: '4ce4c29b178fa558ba168462964968ff0293e3af', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: '7f72c09b88ea8d692b48e19d23e38e1b20f6db2c', class: "left" }, h("a", { key: '12bdd6473af7fb2f8de23da2d81b9d3267e702c1', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: '520d67a0edb4bc31cf932caac1e8ac7823567fdf', class: "mid" }), h("div", { key: '42ad1a686c8914b502c6048a1a95fb2fe89b9b5c', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: 'dd0d1c23c90e33396ec8a2283bc0ea552a4f132c', class: "mobile-right" }, h("img", { key: 'caff587efa11448833f41485424a536d69a69a6b', onClick: this.openModal, class: "burger-icon", src: bar, alt: "" }))), h("bw-modal", { key: '527952965369602a07ac1f8c970c5827252ec1e5', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: '79d3db13429ace2db1ece3b9461a2983aa73024b', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onPress: () => this.isModalOpen = false })))))));
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
