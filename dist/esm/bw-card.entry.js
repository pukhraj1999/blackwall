import { r as registerInstance, h } from './index-C2eNYrd9.js';

const bwCardCss = () => `:host{display:block}*{margin:0;padding:0;box-sizing:border-box}.card{margin:5px;border:3px solid black;background-color:#24293b;box-shadow:0 0 2px 2spx rgba(0, 0, 0, 0.5)}.card-content{padding:10px}.card-title{font-size:1.5rem;font-weight:bold;letter-spacing:1px;color:white}.card-description{font-size:1rem;color:white}.card-img{width:100%;height:250px}.card-btn-box{display:grid;margin-top:10px}.card-btn{background-color:transparent;color:white;font-size:1.25rem;font-weight:bold;padding:10px 20px;text-align:center;letter-spacing:1px;border:2px solid white;text-decoration:none}.card-btn:hover{background-color:white;color:black;transition:all 0.3s ease-in-out;border:2px solid black}.card-tags{display:flex;flex-wrap:wrap;row-gap:5px;column-gap:10px;margin-top:5px;margin-bottom:5px}.card-tag-title{color:white;padding-top:4px;font-weight:bold;letter-spacing:1px}.card-tag{background-color:rgb(191, 23, 221);padding:4px;color:white;font-weight:bold;letter-spacing:1px;border-radius:5px;border:2px solid black;font-size:0.875rem}`;

const BwCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    tagColors = ["rgb(193, 31, 63)", "rgb(34, 64, 183)", "rgb(203, 142, 10)", "rgb(25, 84, 33)", "rgb(191, 23, 221)"];
    imgSrc = 'https://images.pexels.com/photos/8162589/pexels-photo-8162589.jpeg?_gl=1*bpmwgc*_ga*OTY5NTU4NTMzLjE3ODc1MDcwMDk.*_ga_8JE65Q40S6*czE3ODc1MDcwMDkkbzEkZzEkdDE3ODc1MDcwNTkkajEwJGwwJGgw';
    imgAlt = 'Blackwall card image';
    name = 'Blackwall card';
    description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eos animi impedit natus, non corrupti iste, voluptas ut asperiores saepe architecto veritatis quos doloribus inventore laudantium suscipit sequi? Laudantium, repellat!
          Architecto ex modi, sed non voluptatum ut iusto quaerat quia deserunt quibusdam. Ad voluptas exercitationem voluptatum labore expedita inventore, ea voluptate ut incidunt! Natus sed debitis quos amet atque laboriosam.
          Mollitia impedit recusandae, optio reprehenderit voluptates quidem dolorem non omnis rem nostrum sint odio ullam sequi animi quis dolor id voluptatum minima. Eveniet, alias possimus ab neque iste animi totam!
          Quod distinctio deserunt porro error quisquam sint iusto facilis dolore enim earum labore aspernatur sunt voluptate perferendis vero provident dolores nemo animi obcaecati, dicta ipsa blanditiis! At quam in nostrum.
          Enim quod, saepe tempore dolor quaerat atque vel mollitia aliquid delectus animi ratione magnam. Accusantium numquam asperiores sunt quo amet obcaecati cumque, mollitia, id illo quod, ea nobis tempora sequi.s`;
    descriptionLength = 200;
    tagTitle = 'Tags:';
    tags = ['Fast', 'Junk', 'Heavy', 'Vegie Loaded'];
    Link = '#';
    componentWillLoad() {
        this.description = this.description.length > this.descriptionLength ? this.description.substring(0, this.descriptionLength) + '...' : this.description;
    }
    getColorForTag(index) {
        return this.tagColors[index % this.tagColors.length];
    }
    render() {
        return (h("div", { key: 'b7cd2d28eb41bc9cb8d0337a503a3491bfe3adfe', class: "card" }, h("img", { key: 'f4d7a796e19daf3b563fec6516bbe26ca1562bc6', src: this.imgSrc, alt: this.imgAlt, class: "card-img" }), h("div", { key: 'c416be572486fc37b7ecbf4ac1b9c4bcdbd089d9', class: "card-content" }, h("p", { key: 'a18ea00c82b304b64f9dcc4cfd3cc817b0cc52d3', class: "card-title" }, this.name), h("div", { key: 'e62c8b9f73bc549f8b8c4bac39b428c99d73c517', class: "card-tags" }, h("span", { key: '00ca676ce69b28d73c1beb0043ae97216f54718c', class: "card-tag-title" }, this.tagTitle), this.tags.map((tag, index) => (h("span", { class: "card-tag", style: { backgroundColor: this.getColorForTag(index) } }, tag)))), h("p", { key: '93e774445a0106e34018c13ff14ec38846d510f3', class: "card-description" }, this.description), h("div", { key: '93bd017c94e65d75495609e0770cc23e49c202a0', class: "card-btn-box" }, h("a", { key: '7b7a873aee2434f0b5147d557df22a3757a338b9', href: this.Link, class: "card-btn" }, "Learn More")))));
    }
};
BwCard.style = bwCardCss();

export { BwCard as bw_card };
