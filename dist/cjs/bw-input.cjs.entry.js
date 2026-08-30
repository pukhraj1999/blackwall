'use strict';

var index = require('./index-DEP0cWTe.js');

const bwInputCss = () => `:host {   *{     margin: 0;     padding: 0;     box-sizing: border-box;   }   display: block; }  .label-bold{   font-weight: bold; } .input-box{   width: 100%;   display: grid; } .input{   outline: none; } .input-error{   outline: 2px solid rgb(240, 49, 49);   color: rgb(240, 49, 49); } .error-msg{   margin-top: 2px;   font-size: 1.05rem;   color: rgb(240, 49, 49); }`;

const BwInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.changedValue = index.createEvent(this, "changedValue");
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
    type = 'type';
    placeholder = 'Type Something';
    // For Text Area
    textarea = false;
    row = 5;
    col = 5;
    changedValue;
    valueChanged(newValue, oldValue) {
        // react to the change
        this.changedValue.emit({ oldValue, newValue });
    }
    render() {
        return (index.h("div", { key: 'a215a94db9d87b40e0e24bc6ad9c6a565432091a', class: "input-box", style: {
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
            } }, index.h("p", { key: '5700f1fdc5ad9e41411aa53200e2375e23b7e25a', class: {
                'label-bold': this.labelBold,
            }, style: {
                fontSize: this.labelSize,
            } }, this.label), !this.textarea && (index.h("input", { key: '7aa2f6b07d11b68201f941f9cf0688ecfdcf35c2', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, type: this.type, placeholder: this.placeholder, value: this.value, disabled: this.isDisabled, required: this.isRequired })), this.textarea && (index.h("textarea", { key: 'd21b4e3bd25f93449857b71d51765921ace29d41', style: {
                margin: this.mg,
                padding: this.pd,
                fontSize: this.size,
            }, class: {
                'input': true,
                'input-error': this.isError,
            }, rows: this.row, cols: this.col, placeholder: this.placeholder, value: this.value, disabled: this.isDisabled, required: this.isRequired })), this.isError && (index.h("p", { key: 'dc96c2892b25e673ec54007c61c5d1e83fb48534', class: {
                'error-msg': true,
            } }, "This is error message"))));
    }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
BwInput.style = bwInputCss();

exports.bw_input = BwInput;
