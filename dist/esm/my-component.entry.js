import { r as registerInstance, h } from './index-D7grKXBN.js';
import { format } from './index.js';

const myComponentCss = () => `:host{display:block}`;

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '7376d6d3e97ed29205a4a8240af65b40914b40b5' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

export { MyComponent as my_component };
