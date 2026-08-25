'use strict';

var index = require('./index-HhUyBnhQ.js');
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
        return index.h("div", { key: 'edcd595f3b87cfa751442fba79e07a8823826cbc' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

exports.my_component = MyComponent;
