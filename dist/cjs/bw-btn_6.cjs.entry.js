'use strict';

var index = require('./index-DEP0cWTe.js');

const bwBtnCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }    display: block; }  .btn-box {   display: grid;   margin-top: 5px; }  .btn {   background-color: transparent;   color: white;   font-weight: bold;   padding: 10px 20px;   text-align: center;   letter-spacing: 1px;   border-style: solids;   text-decoration: none; }  .btn:hover {   background-color: white;   color: #131b2e;   transition: all 0.3s ease-in-out; }`;

const BwBtn = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.press = index.createEvent(this, "press");
    }
    name = "Name";
    link = "#";
    borderWidth = "2px";
    radius = "0px";
    size = "1.25rem";
    press;
    performAction = () => {
        this.press.emit();
    };
    render() {
        return (index.h("div", { key: 'fd77f7463e000565eb8380c21a1dbfb0fff2a09f', class: "btn-box" }, index.h("a", { key: '381ba1c983f63520b3adc20f0766f9457db6c4b8', href: this.link, style: {
                fontSize: this.size,
                border: this.borderWidth + " solid white",
                borderRadius: this.radius,
            }, class: "btn", onClick: this.performAction }, this.name)));
    }
};
BwBtn.style = bwBtnCss();

const bwCardCss = () => `:host{display:block}*{margin:0;padding:0;box-sizing:border-box}.card{background-color:#131b2e;cursor:pointer;transition:transform 0.2s ease,   border-color 0.2s ease}.card:hover{transform:translateY(-4px);border-color:rgba(96, 165, 250, 0.4)}.card_shadow{box-shadow:0 0 2px 2spx rgba(0, 0, 0, 0.5)}.card-content{padding:10px}.card-title{font-weight:bold;letter-spacing:1px;color:white}.card-description{font-size:1rem;color:white}.card-tags{display:flex;flex-wrap:wrap;row-gap:5px;column-gap:10px;margin-top:5px;margin-bottom:5px}.card-tag-title{color:white;padding-top:4px;font-weight:bold;letter-spacing:1px}.card-tag{background-color:rgb(191, 23, 221);padding:4px;color:white;font-weight:bold;letter-spacing:1px;border-radius:5px;border:2px solid black;font-size:0.875rem}`;

const BwCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    titleSize = "1.5rem";
    rating = "";
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
        return (index.h("div", { key: '087fe4d4278189b38b1f9731b9715e258e1c4f10', class: "card", style: {
                borderRadius: this.cardRadius,
                border: this.border
            } }, index.h("bw-img", { key: '8b538e0f1d83fd92d085ca09e72d0f0a349d1fba', imgSrc: this.imgSrc || '', imgAlt: this.imgAlt || '', radiusTop: this.cardRadius }), index.h("div", { key: 'd3a403029480c499402a770dc15cd7f754b9ae52', class: "card-content" }, index.h("bw-container", { key: '5c93e6ab3f114cccdab851100b941253d6dbbaa0', spaceBetween: true, primary: true }, index.h("p", { key: '5eeb0d23ffb88908d7e5e4e7dd960d88234f4687', class: "card-title", style: { fontSize: this.titleSize } }, this.name || ""), this.rating && index.h("p", { key: '0bef3bc7ae45367ea7494985beb2f0bdcc89a4db' }, "Rating: \u2B50 ", this.rating, " Star ")), index.h("div", { key: '7be96b42b51e9fceb29d622675d542ee47fda0af', class: "card-tags" }, index.h("span", { key: 'f0fe2ca3b323490b493af1b0a2856490151edbc5', class: "card-tag-title" }, this.tagTitle || ''), this.tags && this.tags.map((tag, index$1) => (index.h("span", { class: "card-tag", style: { backgroundColor: this.getColorForTag(index$1) } }, tag)))), index.h("p", { key: '817d2bbf5ac0277c3ec1cf4552517706dbde561c', class: "card-description" }, this.setDescription || ''), index.h("slot", { key: 'd60779f791d48d785b31e587b8558a6871b66eb7' }), this.showBtn && index.h("bw-btn", { key: 'ce97c4ece412f3c3fcfb425a07ecaa8a2264bbb7', name: "Learn More", link: this.link || '#' }))));
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
        index.registerInstance(this, hostRef);
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
        return (index.h("main", { key: '30cef91be286cb86e7ee1c4e42b1b3fb4041728f', style: {
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
            }, class: { "container-grid": this.grid, "container-center": this.center, "container-space-between": this.spaceBetween, 'container-flex': this.flex, 'container-split': this.split } }, index.h("slot", { key: '8f3e0982627ccf872fca288b73e0f6f263977929' })));
    }
};
BwContainer.style = bwContainerCss();

const bwImgCss = () => `:host {   *{     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; } `;

const BwImg = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("img", { key: 'ff8938abdc5615f98e590400a739cc381b256265', style: {
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

const bwNavCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  a{   text-decoration: none; }  .nav-container{   display: flex;   align-items: center;   justify-content: space-between;   flex-wrap: wrap;   background-color: #131b2e;   color: white; }  .left-header{   font-size: 1.5rem;   font-weight: bold;   letter-spacing: 1px;   color: white; }  .right-link{   padding: 5px;   margin: 5px;   font-size: 1.25rem;   color: white;   letter-spacing: 1px;   border: 4px solid transparent; } .right-link:hover{   color: #131b2e;;   background-color: white;   border: 4px solid #131b2e;;   font-weight: bold;   transition: 0.3s all ease-in-out; } .mobile-right{   display: none; } .burger-icon{   height: 35px;   filter: brightness(0) invert(1);   cursor: pointer;   margin-right: 5px; }  .mobile-link-box{   display: grid;   gap: 10px; }  @media (max-width: 600px) {   .right{     display: none;   }   .mobile-right{     display:block;   } }`;

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
        return (index.h("section", { key: '80bf52be09d632dd98ab5b0e0fbb66246b125f28' }, index.h("nav", { key: '76bc1ebad19cf5179d7cf144a8562ab669bbc04a', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, index.h("div", { key: '225efb112697bb8e78eb4fdfc718bff5c3b7e429', class: "left" }, index.h("a", { key: '47aa13b98ad705f3e2c2819dadf92e4fca12ab76', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), index.h("div", { key: 'c1534121ebb379d72735f797e83cff102a91a6bc', class: "mid" }), index.h("div", { key: '7239b131ad03d7ff018e17d7fadf2e1a16003bc7', class: "right" }, this.links.map(({ name, link }) => (index.h("a", { class: "right-link", href: link }, name)))), index.h("div", { key: 'e4ac812b1959dcb27e809248e22235dd1ba6cab0', class: "mobile-right" }, index.h("img", { key: '4f39a722ff3c212a81cbd80da55de7df8a5206f7', onClick: this.openModal, class: "burger-icon", src: barsSolidFullSvg, alt: "" }))), index.h("bw-modal", { key: 'f12abef3875b87a707bc52957226be0886971179', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, index.h("div", { key: '87a096f8be7aa67c526370f7d64b2f0d4f376eb9', class: "mobile-link-box" }, this.links.map(({ name, link }) => (index.h("bw-btn", { name: name, link: link, onPress: () => this.isModalOpen = false })))))));
    }
};
BwNav.style = bwNavCss();

exports.bw_btn = BwBtn;
exports.bw_card = BwCard;
exports.bw_container = BwContainer;
exports.bw_img = BwImg;
exports.bw_modal = BwModal;
exports.bw_nav = BwNav;
