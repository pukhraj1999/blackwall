'use strict';

var index = require('./index-D96nDt24.js');
var index$1 = require('./index.cjs.js');

const myComponentCss = () => `:host{display:block}`;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return index$1.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '1160a6cf2976f0cc7e4f2650195d9cade849fe91' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

exports.my_component = MyComponent;
