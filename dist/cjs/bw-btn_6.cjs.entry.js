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
    performAction = (event) => {
        if (this.link === '#' || !this.link) {
            event.preventDefault();
        }
        this.press.emit();
    };
    render() {
        return (index.h("div", { key: 'd8dc0d7db32969e4580ec81b579fd00b04443ea9', class: "btn-box" }, index.h("a", { key: 'bc39e9e342a2caf9f3895d22f423c5ed2d3d7411', href: this.link, style: {
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
            } }, index.h("bw-img", { key: '8b538e0f1d83fd92d085ca09e72d0f0a349d1fba', imgSrc: this.imgSrc || '', imgAlt: this.imgAlt || '', radiusTop: this.cardRadius }), index.h("div", { key: 'd3a403029480c499402a770dc15cd7f754b9ae52', class: "card-content" }, index.h("bw-container", { key: '5c93e6ab3f114cccdab851100b941253d6dbbaa0', spaceBetween: true, primary: true }, index.h("p", { key: '5eeb0d23ffb88908d7e5e4e7dd960d88234f4687', class: "card-title", style: { fontSize: this.titleSize } }, this.name || ""), this.rating && index.h("p", { key: '0bef3bc7ae45367ea7494985beb2f0bdcc89a4db' }, "Rating: \u2B50  ", index.h("span", { key: '4e8fc6e8a92498406bae1228d901791eacb2e0d5', style: { color: "oklch(76.9% 0.188 70.08)", fontWeight: "bold" } }, this.rating, " Star"), "  ")), index.h("div", { key: '818b94bb4d59a4be420ed9bc850ff3242b70a2e8', class: "card-tags" }, index.h("span", { key: '477ac773ec7d49d4bb6856bc154a05d400006668', class: "card-tag-title" }, this.tagTitle || ''), this.tags && this.tags.map((tag, index$1) => (index.h("span", { class: "card-tag", style: { backgroundColor: this.getColorForTag(index$1) } }, tag)))), index.h("p", { key: '34c700c1c9799fff24485f91886f7ceae3528ff7', class: "card-description" }, this.setDescription || ''), index.h("slot", { key: 'f036c6bc90cb3e1e7a1dda043df0a9a59757907f' }), this.showBtn && index.h("bw-btn", { key: '610ef1deda8155061118504185e0c4eb80cd1db8', name: "Learn More", link: this.link || '#' }))));
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
        return (index.h("main", { key: '51486aaf56623e874961ca5bfd261947e32cae32', style: {
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
            }, class: { "container-grid": this.grid, "container-center": this.center, "container-space-between": this.spaceBetween, 'container-flex': this.flex, 'container-split': this.split } }, index.h("slot", { key: '3b14c01fc3552b843347da49e0e7f9cde0dfe0e9' })));
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
        return (index.h("img", { key: '0ef752a0d3893b8a40712936fdad7026ea31c8b6', style: {
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

const bwNavCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  a{   text-decoration: none; }  .nav-container{   display: flex;   align-items: center;   justify-content: space-between;   flex-wrap: wrap;   background-color: #131b2e;   color: white; }  .left-header{   font-size: 1.5rem;   font-weight: bold;   letter-spacing: 1px;   color: white; }  .right-link{   padding: 5px;   margin: 5px;   font-size: 1.25rem;   color: white;   letter-spacing: 1px;   border: 4px solid transparent; } .right-link:hover{   color: #131b2e;;   background-color: white;   border: 4px solid #131b2e;;   font-weight: bold;   transition: 0.3s all ease-in-out; } .mobile-right{   display: none; } .burger-icon{   height: 35px;   filter: brightness(0) invert(1);   cursor: pointer;   margin-right: 5px; }  .mobile-link-box{   display: grid;   gap: 10px; }  @media (max-width: 800px) {   .right{     display: none;   }   .mobile-right{     display:block;   } }`;

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
        return (index.h("section", { key: '1812ecf40897b716c676ed8d5602c21a27d31440' }, index.h("nav", { key: 'dd22e272fe0d8a4a088a9e75ebc2cc3fa55f4ab2', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, index.h("div", { key: 'f1d9bfaa99706f6d57791e7735ca1631848f8851', class: "left" }, index.h("a", { key: '6332d3434ba22a038041abc74f91291f110936f0', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), index.h("div", { key: 'ff9d084127178afb375624cea145e6b74b7fd804', class: "mid" }), index.h("div", { key: 'bf9ea6b1f88e1ecf11a007ac8fafc9647358f378', class: "right" }, this.links.map(({ name, link }) => (index.h("a", { class: "right-link", href: link }, name)))), index.h("div", { key: '0e11c55f87aa20407584620e6c3a5f68654be851', class: "mobile-right" }, index.h("img", { key: '7f4f71b3d16c9f3001349c72ef254197e4c62d33', onClick: this.openModal, class: "burger-icon", src: barsSolidFullSvg, alt: "" }))), index.h("bw-modal", { key: 'bbf0c5ffe4fe9992803e7b5e8b5f2c5ca5e7ce16', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, index.h("div", { key: '5f8f79a687abb8a92a43dffa19e083ad7a80877a', class: "mobile-link-box" }, this.links.map(({ name, link }) => (index.h("bw-btn", { name: name, link: link, onPress: () => this.isModalOpen = false })))))));
    }
};
BwNav.style = bwNavCss();

exports.bw_btn = BwBtn;
exports.bw_card = BwCard;
exports.bw_container = BwContainer;
exports.bw_img = BwImg;
exports.bw_modal = BwModal;
exports.bw_nav = BwNav;
