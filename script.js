const myTemplate = document.createElement('template');
myTemplate.innerHTML = `<span>myParagraph</span>`;

// Custom component
class MyElement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <h1>Mein eigenes HTML Element</h1>
        `
    }
}
customElements.define("my-element", MyElement);

// Shadow Elements
class MyAdvancedElement extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });

        this.root.innerHTML = `
        <style>
        :host {
            font-family: Verdana;
            color: red;
            font-weight: bold;
            padding: 5px;
            border: 1px dotted black;
        }
        </style>
        <span>Mein eigenes HTML Element</span>
        <button>Klicken!</button>
        `
        this.root.appendChild(myTemplate.content);
    }
}
customElements.define("my-advanced-element", MyAdvancedElement);

// Slots
class MySlotElement extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });

        this.root.innerHTML = `
        <style>
        :host {
            font-family: Verdana;
            color: green;
            font-weight: bold;
            padding: 5px;
            border: 1px dotted black;
        }
        </style>
        <span><slot></slot></span>
        <button>hi</button>
        <span><slot name = "afterButton"></slot></span>
        `
        this.root.appendChild(myTemplate.content);
    }
}
customElements.define("my-slot-element", MySlotElement);