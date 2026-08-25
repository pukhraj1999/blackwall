import { r as registerInstance, h } from './index-D5JffzIW.js';
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
        return h("div", { key: 'edcd595f3b87cfa751442fba79e07a8823826cbc' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

export { MyComponent as my_component };
