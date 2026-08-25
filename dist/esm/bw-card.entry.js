import { r as registerInstance, h } from './index-D5JffzIW.js';

const bwCardCss = () => `:host{display:block}*{margin:0;padding:0;box-sizing:border-box}.card{margin:5px;border:3px solid black;background-color:#24293b;box-shadow:0 0 2px 2spx rgba(0, 0, 0, 0.5)}.card-content{padding:10px}.card-title{font-size:1.5rem;font-weight:bold;letter-spacing:1px;color:white}.card-description{font-size:1rem;color:white}.card-img{width:100%;height:250px}.card-tags{display:flex;flex-wrap:wrap;row-gap:5px;column-gap:10px;margin-top:5px;margin-bottom:5px}.card-tag-title{color:white;padding-top:4px;font-weight:bold;letter-spacing:1px}.card-tag{background-color:rgb(191, 23, 221);padding:4px;color:white;font-weight:bold;letter-spacing:1px;border-radius:5px;border:2px solid black;font-size:0.875rem}`;

const BwCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    setPopulate;
    setDescription;
    tagColors = ["rgb(193, 31, 63)", "rgb(34, 64, 183)", "rgb(203, 142, 10)", "rgb(25, 84, 33)", "rgb(191, 23, 221)"];
    populate = true;
    imgSrc;
    imgAlt;
    showBtn = true;
    name;
    description;
    descriptionLength = 200;
    tagTitle = 'Tags:';
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
            if (!this.tags) {
                this.tags = ['Fast', 'Junk', 'Heavy', 'Vegie Loaded'];
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
        return (h("div", { key: '4854c18f4781401ea343f29fe2d4ccffd763bd46', class: "card" }, h("img", { key: '149c32b9d932262ecc51f9c160ad160172696f19', src: this.imgSrc || '', alt: this.imgAlt || '', class: "card-img" }), h("div", { key: 'b224d68fa9b0f69fdf0561a2dc667aa2047ec669', class: "card-content" }, h("p", { key: '202bd12d24ae6d6d6808d359133efc6f03692cf8', class: "card-title" }, this.name || ""), h("div", { key: '5952a03c00b13b8448c4b6a2ad0f9f882f138d55', class: "card-tags" }, h("span", { key: 'f78fb685c3e93cf09bd429cbd5ff535efcb98273', class: "card-tag-title" }, this.tagTitle || ''), this.tags && this.tags.map((tag, index) => (h("span", { class: "card-tag", style: { backgroundColor: this.getColorForTag(index) } }, tag)))), h("p", { key: '5a5f6deac711cb7e7e0d2e84e1bc63e9b0ffa4d6', class: "card-description" }, this.setDescription || ''), this.showBtn && h("bw-btn", { key: 'e0e81ba2c17a16593b3b5c5eed92d1d92b6e0b20', name: "Learn More", link: this.link || '#' }))));
    }
};
BwCard.style = bwCardCss();

export { BwCard as bw_card };
