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
        return (h("section", { key: '80bf52be09d632dd98ab5b0e0fbb66246b125f28' }, h("nav", { key: '76bc1ebad19cf5179d7cf144a8562ab669bbc04a', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: '225efb112697bb8e78eb4fdfc718bff5c3b7e429', class: "left" }, h("a", { key: '47aa13b98ad705f3e2c2819dadf92e4fca12ab76', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: 'c1534121ebb379d72735f797e83cff102a91a6bc', class: "mid" }), h("div", { key: '7239b131ad03d7ff018e17d7fadf2e1a16003bc7', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: 'e4ac812b1959dcb27e809248e22235dd1ba6cab0', class: "mobile-right" }, h("img", { key: '4f39a722ff3c212a81cbd80da55de7df8a5206f7', onClick: this.openModal, class: "burger-icon", src: bar, alt: "" }))), h("bw-modal", { key: 'f12abef3875b87a707bc52957226be0886971179', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: '87a096f8be7aa67c526370f7d64b2f0d4f376eb9', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onPress: () => this.isModalOpen = false })))))));
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
