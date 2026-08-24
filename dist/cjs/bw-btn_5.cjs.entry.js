'use strict';

var index = require('./index-HhUyBnhQ.js');

const bwBtnCss = () => `:host {   *{     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; } .btn-box{   display: grid;   margin-top: 5px; } .btn{   background-color: transparent;   color: white;   font-size: 1.25rem;   font-weight: bold;   padding: 10px 20px;   text-align: center;   letter-spacing: 1px;   border: 2px solid white;   text-decoration: none; } .btn:hover{   background-color: white;   color: #24293b;   transition: all 0.3s ease-in-out;   border: 2px solid #24293b; }`;

const BwBtn = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    name = "Name";
    link = "#";
    render() {
        return (index.h("div", { key: '1b94c399148d42ea853d9080dccd97b4a12c0f74', class: "btn-box" }, index.h("a", { key: '594cbf420c7a17ccbecd1d0a0394711a40465199', href: this.link, class: "btn" }, this.name)));
    }
};
BwBtn.style = bwBtnCss();

const bwCardCss = () => `:host{display:block}*{margin:0;padding:0;box-sizing:border-box}.card{margin:5px;border:3px solid black;background-color:#24293b;box-shadow:0 0 2px 2spx rgba(0, 0, 0, 0.5)}.card-content{padding:10px}.card-title{font-size:1.5rem;font-weight:bold;letter-spacing:1px;color:white}.card-description{font-size:1rem;color:white}.card-img{width:100%;height:250px}.card-tags{display:flex;flex-wrap:wrap;row-gap:5px;column-gap:10px;margin-top:5px;margin-bottom:5px}.card-tag-title{color:white;padding-top:4px;font-weight:bold;letter-spacing:1px}.card-tag{background-color:rgb(191, 23, 221);padding:4px;color:white;font-weight:bold;letter-spacing:1px;border-radius:5px;border:2px solid black;font-size:0.875rem}`;

const BwCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    link = '#';
    componentWillLoad() {
        this.description = this.description.length > this.descriptionLength ? this.description.substring(0, this.descriptionLength) + '...' : this.description;
    }
    getColorForTag(index) {
        return this.tagColors[index % this.tagColors.length];
    }
    render() {
        return (index.h("div", { key: '313fc750cc1880cc00eafaaa46f430ec75ea9f06', class: "card" }, index.h("img", { key: 'd0b31edd97a8a74bd4dfe2b482d79497a87b93ea', src: this.imgSrc, alt: this.imgAlt, class: "card-img" }), index.h("div", { key: 'fff7131427e858e462e496fd62612e67ea6c2df0', class: "card-content" }, index.h("p", { key: 'a32b8d7edf2a8abdb5332d0917e7040aacf4dd50', class: "card-title" }, this.name), index.h("div", { key: 'b674a280a7aba68c57ebb5bae44ab0a67bdc889c', class: "card-tags" }, index.h("span", { key: 'fefdf23868393f4a8e799757ba49d1ae95e17f68', class: "card-tag-title" }, this.tagTitle), this.tags.map((tag, index$1) => (index.h("span", { class: "card-tag", style: { backgroundColor: this.getColorForTag(index$1) } }, tag)))), index.h("p", { key: '185ee9baac5bf3255eab8825c1a4abaa59217303', class: "card-description" }, this.description), index.h("bw-btn", { key: '1511aaaab4611142ce7dff6f4795379c76b2f031', name: "Learn More", link: this.link }))));
    }
};
BwCard.style = bwCardCss();

const bwContainerCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .container {   background-color: #151723; }  .container-grid {   display: grid;   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); } `;

const BwContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    mg = "0px";
    pd = "10px";
    grid = false;
    render() {
        return (index.h("main", { key: '8ccf8498d22724a33d2a2fafaba006ed9abaa534', class: { "container": true, "container-grid": this.grid }, style: { margin: this.mg, padding: this.pd } }, index.h("slot", { key: '23b8bd38885e3067f8d69e465685c13cefbf7730' })));
    }
};
BwContainer.style = bwContainerCss();

const bwModalCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .modal-container {   position: fixed;   inset: 0;   display: grid;   place-items: center;   background: rgb(0 0 0 / 60%);   z-index: 1000; }  .modal-box {   width: min(80vw, 500px);   background: #151723;;   box-shadow: 0 12px 40px rgb(0 0 0 / 30%);   border: 2px solid white; }  .modal-header {   display: flex;   align-items: center;   justify-content: space-between;   padding: 8px;   padding-left:16px;   padding-right: 16px;   color: white; }  .modal-header h2 {   margin: 0; }  .close-button {   border: 0;   background: transparent;   font-size: 30px;   cursor: pointer;   color: white; }  .modal-body {   padding: 16px; } `;

const BwModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed");
    }
    isOpen = false;
    name = '';
    modalClosed;
    closeModal = () => {
        this.modalClosed.emit();
    };
    render() {
        if (!this.isOpen) {
            return null;
        }
        return (index.h("section", { class: "modal-container", role: "dialog", "aria-modal": "true" }, index.h("main", { class: "modal-box" }, index.h("header", { class: "modal-header" }, index.h("p", { style: { fontSize: "1.5rem" } }, this.name), index.h("button", { type: "button", class: "close-button", "aria-label": "Close modal", onClick: this.closeModal }, "\u00D7")), index.h("div", { class: "modal-body" }, index.h("slot", null)))));
    }
};
BwModal.style = bwModalCss();

const barsSolidFullSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMy4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTk2IDE2MEM5NiAxNDIuMyAxMTAuMyAxMjggMTI4IDEyOEw1MTIgMTI4QzUyOS43IDEyOCA1NDQgMTQyLjMgNTQ0IDE2MEM1NDQgMTc3LjcgNTI5LjcgMTkyIDUxMiAxOTJMMTI4IDE5MkMxMTAuMyAxOTIgOTYgMTc3LjcgOTYgMTYwek05NiAzMjBDOTYgMzAyLjMgMTEwLjMgMjg4IDEyOCAyODhMNTEyIDI4OEM1MjkuNyAyODggNTQ0IDMwMi4zIDU0NCAzMjBDNTQ0IDMzNy43IDUyOS43IDM1MiA1MTIgMzUyTDEyOCAzNTJDMTEwLjMgMzUyIDk2IDMzNy43IDk2IDMyMHpNNTQ0IDQ4MEM1NDQgNDk3LjcgNTI5LjcgNTEyIDUxMiA1MTJMMTI4IDUxMkMxMTAuMyA1MTIgOTYgNDk3LjcgOTYgNDgwQzk2IDQ2Mi4zIDExMC4zIDQ0OCAxMjggNDQ4TDUxMiA0NDhDNTI5LjcgNDQ4IDU0NCA0NjIuMyA1NDQgNDgweiIvPjwvc3ZnPg==';

const bwNavCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  a{   text-decoration: none; }  .nav-container{   display: flex;   align-items: center;   justify-content: space-between;   flex-wrap: wrap;   background-color: #24293b;   color: white; }  .left-header{   font-size: 1.5rem;   font-weight: bold;   letter-spacing: 1px;   color: white; }  .right-link{   padding: 5px;   margin: 5px;   font-size: 1.25rem;   color: white;   letter-spacing: 1px;   border: 4px solid transparent; } .right-link:hovers{   border: 4px solid #151723; } .mobile-right{   display: none; } .burger-icon{   height: 35px;   filter: brightness(0) invert(1);   cursor: pointer;   margin-right: 5px; }  .mobile-link-box{   display: grid;   gap: 10px; }  @media (max-width: 600px) {   .right{     display: none;   }   .mobile-right{     display:block;   } }`;

const BwNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h("section", { key: '570b9af558e94729087ac120c273a4982158dd08' }, index.h("nav", { key: '4c6845a5e1690fb629d14be918e453782b31f552', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, index.h("div", { key: 'a125ebee4a74071f7f1f897cf161f64558236688', class: "left" }, index.h("a", { key: 'e9a9b94d6e3cf9b61ec464d7eaafcf7a321fe515', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), index.h("div", { key: '9b38028805ed3063ab0cd64f70ec8b7f33405e23', class: "mid" }), index.h("div", { key: 'f0d630696069c279b3f47abf1c7e83409f88c9f9', class: "right" }, this.links.map(({ name, link }) => (index.h("a", { class: "right-link", href: link }, name)))), index.h("div", { key: 'a848dcab0b27b985a0c617da3f16cdb43f0ad4de', class: "mobile-right" }, index.h("img", { key: 'c6b9ba4951ba3ed55ec9692f48935009018d2573', onClick: this.openModal, class: "burger-icon", src: barsSolidFullSvg, alt: "" }))), index.h("bw-modal", { key: 'fac4d4e9460df5b7606bc09c11251b50cc598be6', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, index.h("div", { key: '3e2d2ebfbb1a636e0ee3b4ba2e1704866e4afed3', class: "mobile-link-box" }, this.links.map(({ name, link }) => (index.h("bw-btn", { name: name, link: link })))))));
    }
};
BwNav.style = bwNavCss();

exports.bw_btn = BwBtn;
exports.bw_card = BwCard;
exports.bw_container = BwContainer;
exports.bw_modal = BwModal;
exports.bw_nav = BwNav;
