import { r as registerInstance, h } from './index-BOf3roUy.js';
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
        return h("div", { key: '1160a6cf2976f0cc7e4f2650195d9cade849fe91' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

export { MyComponent as my_component };
