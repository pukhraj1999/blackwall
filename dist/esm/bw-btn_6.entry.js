import { r as registerInstance, c as createEvent, h } from './index-D7grKXBN.js';

const bwBtnCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }    display: block; }  .btn-box {   display: grid;   margin-top: 5px; }  .btn {   background-color: transparent;   color: white;   font-weight: bold;   padding: 10px 20px;   text-align: center;   letter-spacing: 1px;   border-style: solids;   text-decoration: none; }  .btn:hover {   background-color: white;   color: #131b2e;   transition: all 0.3s ease-in-out;   border-color: #131b2e; }`;

const BwBtn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.press = createEvent(this, "press");
    }
    name = "Name";
    link = "#";
    borderWidth = "1px";
    radius = "0px";
    size = "1.25rem";
    press;
    performAction = () => {
        this.press.emit();
    };
    render() {
        return (h("div", { key: 'fd77f7463e000565eb8380c21a1dbfb0fff2a09f', class: "btn-box" }, h("a", { key: '32cb0cd8a914e8615179b6f1e380e6a6cd67431c', href: this.link, style: {
                fontSize: this.size,
                borderWidth: this.borderWidth,
                borderRadius: this.radius
            }, class: "btn", onClick: this.performAction }, this.name)));
    }
};
BwBtn.style = bwBtnCss();

const bwCardCss = () => `:host{display:block}*{margin:0;padding:0;box-sizing:border-box}.card{background-color:#131b2e;cursor:pointer;transition:transform 0.2s ease,   border-color 0.2s ease}.card:hover{transform:translateY(-4px);border-color:rgba(96, 165, 250, 0.4)}.card_shadow{box-shadow:0 0 2px 2spx rgba(0, 0, 0, 0.5)}.card-content{padding:10px}.card-title{font-size:1.5rem;font-weight:bold;letter-spacing:1px;color:white}.card-description{font-size:1rem;color:white}.card-tags{display:flex;flex-wrap:wrap;row-gap:5px;column-gap:10px;margin-top:5px;margin-bottom:5px}.card-tag-title{color:white;padding-top:4px;font-weight:bold;letter-spacing:1px}.card-tag{background-color:rgb(191, 23, 221);padding:4px;color:white;font-weight:bold;letter-spacing:1px;border-radius:5px;border:2px solid black;font-size:0.875rem}`;

const BwCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
BwCard.style = bwCardCss();

const ThemeOptions = {
    skyLight: {
        color: "#ffffff",
        primary: "#131b2e",
        secondary: "#0b0f19"}
};
var Theme = ThemeOptions.skyLight;

const bwContainerCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .container-grid {   display: grid;   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }  .container-split {   display: grid;   grid-template-columns: 1fr 1fr; }  .container-flex{   display: flex;   align-items: center;   flex-wrap: wrap; }  .container-center {   display: flex;   justify-content: center;   align-items: center;   flex-wrap: wrap; } .container-space-between {   display: flex;   justify-content: space-between;   align-items: center;   flex-wrap: wrap; } `;

const BwContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    center = false;
    spaceBetween = false;
    mg = '';
    pd = '';
    mgV = '';
    mgH = '';
    pdH = '';
    pdV = '';
    border = '';
    radiusTop = '';
    radiusBottom = '';
    radius = '';
    // Default container is secondary
    primary = false;
    grid = false;
    flex = false;
    split = false;
    render() {
        return (h("main", { key: '8677dfb51a4778c2bd7958986eb3bb7f3e1341da', style: {
                margin: this.mg || '0px',
                marginTop: this.mgV || this.mg,
                marginBottom: this.mgV || this.mg,
                marginLeft: this.mgH || this.mg,
                marginRight: this.mgH || this.mg,
                padding: this.pd || "0px",
                paddingTop: this.pdV || this.pd,
                paddingBottom: this.pdV || this.pd,
                paddingLeft: this.pdH || this.pd,
                paddingRight: this.pdH || this.pd,
                borderColor: Theme.color,
                border: this.border || "none",
                borderRadius: this.radius || "0x",
                borderTopLeftRadius: this.radiusTop || this.radius,
                borderTopRightRadius: this.radiusTop || this.radius,
                borderBottomLeftRadius: this.radiusBottom || this.radius,
                borderBottomRightRadius: this.radiusBottom || this.radius,
                // apply theme
                color: Theme.color,
                backgroundColor: this.primary ? Theme.primary : Theme.secondary,
            }, class: { "container-grid": this.grid, "container-center": this.center, "container-space-between": this.spaceBetween, 'container-flex': this.flex, 'container-split': this.split } }, h("slot", { key: '16930a8d98eb2c58ad3df2d2d1d614fb1576fd7a' })));
    }
};
BwContainer.style = bwContainerCss();

const bwImgCss = () => `:host {   *{     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; } `;

const BwImg = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    imgSrc;
    imgAlt;
    width = "100%";
    height = "250px";
    border = '';
    radiusTop = '';
    radiusBottom = '';
    radius = '';
    render() {
        return (h("img", { key: '8d72a03827c4212944df7359d3ded884294bf86d', style: {
                width: this.width,
                height: this.height,
                borderColor: Theme.color,
                border: this.border || "none",
                borderRadius: this.radius || "0x",
                borderTopLeftRadius: this.radiusTop || this.radius,
                borderTopRightRadius: this.radiusTop || this.radius,
                borderBottomLeftRadius: this.radiusBottom || this.radius,
                borderBottomRightRadius: this.radiusBottom || this.radius
            }, src: this.imgSrc || '', alt: this.imgAlt, class: "card-img" }));
    }
};
BwImg.style = bwImgCss();

const bwModalCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }    display: block; }  .modal-container {   position: fixed;   inset: 0;   display: grid;   place-items: center;   background: rgb(0 0 0 / 60%);   z-index: 1000; }  .modal-box {   width: min(80vw, 500px);   background: #131b2e;   box-shadow: 0 12px 40px rgb(0 0 0 / 30%);   border: 2px solid white; }  .modal-header {   display: flex;   align-items: center;   justify-content: space-between;   padding: 8px;   padding-left: 16px;   padding-right: 16px;   color: white; }  .modal-header h2 {   margin: 0; }  .close-button {   border: 0;   background: transparent;   font-size: 30px;   cursor: pointer;   color: white; }  .modal-body {   padding: 16px; }`;

const BwModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.modalClosed = createEvent(this, "modalClosed");
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
        return (h("section", { class: "modal-container", role: "dialog", "aria-modal": "true" }, h("main", { class: "modal-box" }, h("header", { class: "modal-header" }, h("p", { style: { fontSize: "1.5rem" } }, this.name), h("button", { type: "button", class: "close-button", "aria-label": "Close modal", onClick: this.closeModal }, "\u00D7")), h("div", { class: "modal-body" }, h("slot", null)))));
    }
};
BwModal.style = bwModalCss();

const barsSolidFullSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMy4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTk2IDE2MEM5NiAxNDIuMyAxMTAuMyAxMjggMTI4IDEyOEw1MTIgMTI4QzUyOS43IDEyOCA1NDQgMTQyLjMgNTQ0IDE2MEM1NDQgMTc3LjcgNTI5LjcgMTkyIDUxMiAxOTJMMTI4IDE5MkMxMTAuMyAxOTIgOTYgMTc3LjcgOTYgMTYwek05NiAzMjBDOTYgMzAyLjMgMTEwLjMgMjg4IDEyOCAyODhMNTEyIDI4OEM1MjkuNyAyODggNTQ0IDMwMi4zIDU0NCAzMjBDNTQ0IDMzNy43IDUyOS43IDM1MiA1MTIgMzUyTDEyOCAzNTJDMTEwLjMgMzUyIDk2IDMzNy43IDk2IDMyMHpNNTQ0IDQ4MEM1NDQgNDk3LjcgNTI5LjcgNTEyIDUxMiA1MTJMMTI4IDUxMkMxMTAuMyA1MTIgOTYgNDk3LjcgOTYgNDgwQzk2IDQ2Mi4zIDExMC4zIDQ0OCAxMjggNDQ4TDUxMiA0NDhDNTI5LjcgNDQ4IDU0NCA0NjIuMyA1NDQgNDgweiIvPjwvc3ZnPg==';

const bwNavCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  a{   text-decoration: none; }  .nav-container{   display: flex;   align-items: center;   justify-content: space-between;   flex-wrap: wrap;   background-color: #131b2e;   color: white; }  .left-header{   font-size: 1.5rem;   font-weight: bold;   letter-spacing: 1px;   color: white; }  .right-link{   padding: 5px;   margin: 5px;   font-size: 1.25rem;   color: white;   letter-spacing: 1px;   border: 4px solid transparent; } .right-link:hover{   color: #131b2e;;   background-color: white;   border: 4px solid #131b2e;;   font-weight: bold;   transition: 0.3s all ease-in-out; } .mobile-right{   display: none; } .burger-icon{   height: 35px;   filter: brightness(0) invert(1);   cursor: pointer;   margin-right: 5px; }  .mobile-link-box{   display: grid;   gap: 10px; }  @media (max-width: 600px) {   .right{     display: none;   }   .mobile-right{     display:block;   } }`;

const BwNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("section", { key: '04cd53f0a426091f8e6dca98e6c7d13a075799b8' }, h("nav", { key: '4ce4c29b178fa558ba168462964968ff0293e3af', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: '7f72c09b88ea8d692b48e19d23e38e1b20f6db2c', class: "left" }, h("a", { key: '12bdd6473af7fb2f8de23da2d81b9d3267e702c1', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: '520d67a0edb4bc31cf932caac1e8ac7823567fdf', class: "mid" }), h("div", { key: '42ad1a686c8914b502c6048a1a95fb2fe89b9b5c', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: 'dd0d1c23c90e33396ec8a2283bc0ea552a4f132c', class: "mobile-right" }, h("img", { key: 'caff587efa11448833f41485424a536d69a69a6b', onClick: this.openModal, class: "burger-icon", src: barsSolidFullSvg, alt: "" }))), h("bw-modal", { key: '527952965369602a07ac1f8c970c5827252ec1e5', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: '79d3db13429ace2db1ece3b9461a2983aa73024b', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onPress: () => this.isModalOpen = false })))))));
    }
};
BwNav.style = bwNavCss();

export { BwBtn as bw_btn, BwCard as bw_card, BwContainer as bw_container, BwImg as bw_img, BwModal as bw_modal, BwNav as bw_nav };
