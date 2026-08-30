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
        return (h("section", { key: '1812ecf40897b716c676ed8d5602c21a27d31440' }, h("nav", { key: 'dd22e272fe0d8a4a088a9e75ebc2cc3fa55f4ab2', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: 'f1d9bfaa99706f6d57791e7735ca1631848f8851', class: "left" }, h("a", { key: '6332d3434ba22a038041abc74f91291f110936f0', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: 'ff9d084127178afb375624cea145e6b74b7fd804', class: "mid" }), h("div", { key: 'bf9ea6b1f88e1ecf11a007ac8fafc9647358f378', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: '0e11c55f87aa20407584620e6c3a5f68654be851', class: "mobile-right" }, h("img", { key: '7f4f71b3d16c9f3001349c72ef254197e4c62d33', onClick: this.openModal, class: "burger-icon", src: bar, alt: "" }))), h("bw-modal", { key: 'bbf0c5ffe4fe9992803e7b5e8b5f2c5ca5e7ce16', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: '5f8f79a687abb8a92a43dffa19e083ad7a80877a', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onPress: () => this.isModalOpen = false })))))));
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
