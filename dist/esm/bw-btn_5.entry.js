import { r as registerInstance, c as createEvent, h } from './index-D5JffzIW.js';

const bwBtnCss = () => `:host {   *{     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; } .btn-box{   display: grid;   margin-top: 5px; } .btn{   background-color: transparent;   color: white;   font-size: 1.25rem;   font-weight: bold;   padding: 10px 20px;   text-align: center;   letter-spacing: 1px;   border: 2px solid white;   text-decoration: none; } .btn:hover{   background-color: white;   color: #24293b;   transition: all 0.3s ease-in-out;   border: 2px solid #24293b; }`;

const BwBtn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.Click = createEvent(this, "Click");
    }
    name = "Name";
    link = "#";
    Click;
    performAction = () => {
        this.Click.emit();
    };
    render() {
        return (h("div", { key: 'fc94608cf1bc84fbdd589ed2d4960abec3f75200', class: "btn-box" }, h("a", { key: '65de8d58ba767d43d1038c9f109b00fcfde24ad1', href: this.link, class: "btn", onClick: this.performAction }, this.name)));
    }
};
BwBtn.style = bwBtnCss();

const bwContainerCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .container {   color: white;   background-color: #151723; }  .primary{   color: white;   background-color: #24293b;; }  .container-grid {   display: grid;   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); } `;

const BwContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    mg = "0px";
    pd = "10px";
    // Default container is secondary
    primary = false;
    grid = false;
    render() {
        return (h("main", { key: '0075b6950189321fd911a03cec91a7c43ed30580', class: { "container": true, "primary": this.primary, "container-grid": this.grid }, style: { margin: this.mg, padding: this.pd } }, h("slot", { key: '936f3bae96215570b0f44285ad71543a88959f3d' })));
    }
};
BwContainer.style = bwContainerCss();

const bwInputCss = () => `:host {   *{     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .label-bold{   font-weight: bold; } .input-box{   width: 100%;   display: grid; } .input{   outline: none; } .input-error{   outline: 2px solid rgb(240, 49, 49);   color: rgb(240, 49, 49); } .error-msg{   margin-top: 2px;   font-size: 1.05rem;   color: rgb(240, 49, 49); }`;

const BwInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    isError = false;
    value = '';
    isRequired = false;
    isDisabled = false;
    boxMg = '0px';
    boxMgH;
    boxMgV;
    boxPd = '0px';
    boxPdH;
    boxPdV;
    mg = '0px';
    pd = '5px';
    size = '1rem';
    labelSize = '1.5rem';
    labelBold = false;
    label = 'Name';
    placeholder = 'Type Something';
    render() {
        return (h("div", { key: '15313d6745e29e93823685713dc0d8294a1e7f65', class: "input-box", style: {
                margin: this.boxMg,
                marginTop: this.boxMgV || this.boxMg,
                marginBottom: this.boxMgV || this.boxMg,
                marginLeft: this.boxMgH || this.boxMg,
                marginRight: this.boxMgH || this.boxMg,
                padding: this.boxPd,
                paddingTop: this.boxPdV || this.boxPd,
                paddingBottom: this.boxPdV || this.boxPd,
                paddingLeft: this.boxPdH || this.boxPd,
                paddingRight: this.boxPdH || this.boxPd,
            } }, h("p", { key: '978a1faed388671ccd65b4e29666027d21547b88', class: {
                'label-bold': this.labelBold,
            }, style: {
                fontSize: this.labelSize,
            } }, this.label), h("input", { key: '63f1380ca877655ed738fe3772a410a8d06b1203', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, type: "text", placeholder: this.placeholder, disabled: this.isDisabled, required: this.isRequired }), this.isError && (h("p", { key: 'e8104eab175a633cb33ce8e906b4dd5fab677c7d', class: {
                'error-msg': true,
            } }, "This is error message"))));
    }
};
BwInput.style = bwInputCss();

const bwModalCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .modal-container {   position: fixed;   inset: 0;   display: grid;   place-items: center;   background: rgb(0 0 0 / 60%);   z-index: 1000; }  .modal-box {   width: min(80vw, 500px);   background: #151723;;   box-shadow: 0 12px 40px rgb(0 0 0 / 30%);   border: 2px solid white; }  .modal-header {   display: flex;   align-items: center;   justify-content: space-between;   padding: 8px;   padding-left:16px;   padding-right: 16px;   color: white; }  .modal-header h2 {   margin: 0; }  .close-button {   border: 0;   background: transparent;   font-size: 30px;   cursor: pointer;   color: white; }  .modal-body {   padding: 16px; } `;

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

const bwNavCss = () => `:host {   * {     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  a{   text-decoration: none; }  .nav-container{   display: flex;   align-items: center;   justify-content: space-between;   flex-wrap: wrap;   background-color: #24293b;   color: white; }  .left-header{   font-size: 1.5rem;   font-weight: bold;   letter-spacing: 1px;   color: white; }  .right-link{   padding: 5px;   margin: 5px;   font-size: 1.25rem;   color: white;   letter-spacing: 1px;   border: 4px solid transparent; } .right-link:hover{   color:#24293b;   background-color: white;   border: 4px solid #151723;   font-weight: bold;   transition: 0.3s all ease-in-out; } .mobile-right{   display: none; } .burger-icon{   height: 35px;   filter: brightness(0) invert(1);   cursor: pointer;   margin-right: 5px; }  .mobile-link-box{   display: grid;   gap: 10px; }  @media (max-width: 600px) {   .right{     display: none;   }   .mobile-right{     display:block;   } }`;

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
        return (h("section", { key: '5ffe1ebfd323aeaee7f58fec41846c8cfb2d3172' }, h("nav", { key: '3f22d07e9d2ab1dd649d41ba27f920adbc593b99', class: "nav-container", style: { margin: this.mg, padding: this.pd } }, h("div", { key: '75dfd201f8cb4c21e91d63d8fb623980b861fe44', class: "left" }, h("a", { key: '3d8264e1859db7d64d6217d05668cb0d3c7be800', href: this.homeLink.link, class: "left-header" }, this.homeLink.name)), h("div", { key: 'ab0359206623665e0548daf907bb5dc3612fd7ca', class: "mid" }), h("div", { key: '66dbadda7c0e1bf3e485fadd627b73fb7702f858', class: "right" }, this.links.map(({ name, link }) => (h("a", { class: "right-link", href: link }, name)))), h("div", { key: 'dcf1d076aee47ef8f9ffaaf5433af3531d79baae', class: "mobile-right" }, h("img", { key: '2d9e39eb42d9f072d55855dbe9f6f3ec8cee963e', onClick: this.openModal, class: "burger-icon", src: barsSolidFullSvg, alt: "" }))), h("bw-modal", { key: 'ae2f12535b1eb7b58730f3d861f1d78cbc2e1e7a', isOpen: this.isModalOpen, onModalClosed: () => (this.isModalOpen = false) }, h("div", { key: 'd8b8acf3c5d718d05f127bcb47ec882a047705d8', class: "mobile-link-box" }, this.links.map(({ name, link }) => (h("bw-btn", { name: name, link: link, onClick: () => this.isModalOpen = false })))))));
    }
};
BwNav.style = bwNavCss();

export { BwBtn as bw_btn, BwContainer as bw_container, BwInput as bw_input, BwModal as bw_modal, BwNav as bw_nav };
