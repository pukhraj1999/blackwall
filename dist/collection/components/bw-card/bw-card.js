import { h } from "@stencil/core";
export class BwCard {
    setPopulate;
    setDescription;
    tagColors = ["rgba(59, 130, 246, 0.15)", "rgba(236, 72, 153, 0.15)", "rgba(16, 185, 129,0.15)", "rgba(245, 158, 11, 0.15)", "rgba(191, 23, 221,0.15)"];
    populate = true;
    imgSrc;
    imgAlt;
    cardRadius = "0px";
    border = "";
    showBtn = false;
    name;
    description;
    descriptionLength = 200;
    tagTitle;
    tags;
    link = '#';
    componentWillLoad() {
        // Updating the state
        this.setPopulate = this.populate;
        // Populating the props
        if (this.setPopulate) {
            if (!this.imgSrc) {
                this.imgSrc = 'https://images.pexels.com/photos/8162589/pexels-photo-8162589.jpeg?_gl=1*bpmwgc*_ga*OTY5NTU4NTMzLjE3ODc1MDcwMDk.*_ga_8JE65Q40S6*czE3ODc1MDcwMDkkbzEkZzEkdDE3ODc1MDcwNTkkajEwJGwwJGgw';
            }
            if (!this.imgAlt) {
                this.imgAlt = 'Blackwall card image';
            }
            if (!this.name) {
                this.name = 'Blackwall card';
            }
            if (!this.description) {
                this.description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eos animi impedit natus, non corrupti iste, voluptas ut asperiores saepe architecto veritatis quos doloribus inventore laudantium suscipit sequi? Laudantium, repellat!
          Architecto ex modi, sed non voluptatum ut iusto quaerat quia deserunt quibusdam. Ad voluptas exercitationem voluptatum labore expedita inventore, ea voluptate ut incidunt! Natus sed debitis quos amet atque laboriosam.
          Mollitia impedit recusandae, optio reprehenderit voluptates quidem dolorem non omnis rem nostrum sint odio ullam sequi animi quis dolor id voluptatum minima. Eveniet, alias possimus ab neque iste animi totam!
          Quod distinctio deserunt porro error quisquam sint iusto facilis dolore enim earum labore aspernatur sunt voluptate perferendis vero provident dolores nemo animi obcaecati, dicta ipsa blanditiis! At quam in nostrum.
          Enim quod, saepe tempore dolor quaerat atque vel mollitia aliquid delectus animi ratione magnam. Accusantium numquam asperiores sunt quo amet obcaecati cumque, mollitia, id illo quod, ea nobis tempora sequi.s`;
            }
            if (!this.tagTitle) {
                this.tagTitle = "Tags:";
            }
            if (!this.tags) {
                this.tags = ['Fast', 'Junk', 'Heavy', 'Vegie Loaded', 'Tasty'];
            }
        }
        if (this.description) {
            // Updating the state
            this.setDescription = this.description;
            // Adjusting the length
            this.setDescription = this.setDescription.length > this.descriptionLength ? this.setDescription.substring(0, this.descriptionLength) + '...' : this.setDescription;
        }
    }
    getColorForTag(index) {
        return this.tagColors[index % this.tagColors.length];
    }
    render() {
        return (h("div", { key: 'd68f5fdd757420b86865d80863a02c68740d7dcf', class: "card", style: {
                borderRadius: this.cardRadius,
                border: this.border
            } }, h("bw-img", { key: 'cafa524e48882a5aa4247ad29b235c05c94b8539', imgSrc: this.imgSrc || '', imgAlt: this.imgAlt || '', radiusTop: this.cardRadius }), h("div", { key: '46e0bf2061d901c96f678d388bdf7df5b98ae572', class: "card-content" }, h("p", { key: '1147a10e4a6ce09ab9a5aee9297c74b346e0bdb3', class: "card-title" }, this.name || ""), h("div", { key: '3eccd9ccf28678df3e86bc907195ae1484c4f922', class: "card-tags" }, h("span", { key: '56d0bde10adacb54ac0d770ec8ec66b928fa2e1e', class: "card-tag-title" }, this.tagTitle || ''), this.tags && this.tags.map((tag, index) => (h("span", { class: "card-tag", style: { backgroundColor: this.getColorForTag(index) } }, tag)))), h("p", { key: '2e93aa618b6452742a9e599d62436caefff38cef', class: "card-description" }, this.setDescription || ''), h("slot", { key: '6a5f816109005c1eb009cada7dee221a5a9e835c' }), this.showBtn && h("bw-btn", { key: 'ddd073c3ed0e52523df43115675059336599cf4a', name: "Learn More", link: this.link || '#' }))));
    }
    static get is() { return "bw-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bw-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bw-card.css"]
        };
    }
    static get properties() {
        return {
            "populate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "populate",
                "defaultValue": "true"
            },
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
            "cardRadius": {
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
                "attribute": "card-radius",
                "defaultValue": "\"0px\""
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
                "defaultValue": "\"\""
            },
            "showBtn": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "show-btn",
                "defaultValue": "false"
            },
            "name": {
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
                "attribute": "name"
            },
            "description": {
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
                "attribute": "description"
            },
            "descriptionLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "description-length",
                "defaultValue": "200"
            },
            "tagTitle": {
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
                "attribute": "tag-title"
            },
            "tags": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
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
                "defaultValue": "'#'"
            }
        };
    }
    static get states() {
        return {
            "setPopulate": {},
            "setDescription": {}
        };
    }
}
