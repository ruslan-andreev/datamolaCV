class AccordionElement extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.accordion-button').removeEventListener('click', this.toggleAccordion);
      }
    _styles(){
        return `<style>
        
        .accordion__item{
            border-bottom: 0.0625rem solid #CCCCCC;
        }
        .accordion__title{
            margin: 0;
            padding: 0;
        }
        .accordion-button{
            border: none;
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 5rem;
            padding-right: 1rem;
            padding-left: 0;
            text-align: left;
            font-size: 1rem;
            line-height: 1.25;
            color: #1A1F29;
            background-color: #ffff;
            position: relative;
        }
        
        .accordion-button::after{
            content: "";
            display: block;
            width: 0.75rem;
            height: 0.0625rem;
            background-color: #1A1F29;
            position: absolute;
            right: 0;
            transition: all .4s ease;
        }
        .accordion-button::before{
            content: "";
            display: block;
            width: 0.75rem;
            height: 0.0625rem;
            background-color: #1A1F29;
            position: absolute;
            right: 0;
        }
        .accordion-button--closed::after{
            content: "";
            display: block;
            width: 0.75rem;
            height: 0.0625rem;
            transform: rotate(90deg);
            background-color: #1A1F29;
        }
        .accordion__description{
            margin: 0;
            max-height: 0;
            overflow: hidden;
            padding-bottom: 0;
            transition: all .2s ease;
        } 
        .accordion__description--visible{
            max-height: min-content;
            overflow: visible;
            padding-bottom: 2.5rem;
        }
        
        </style>`
    }
    _template(){
        return `
        <li class="accordion__item">
            <h2 class="accordion__title">
                <button class="accordion-button accordion-button--closed" type="button"><span><slot name="text-button">Default button text</slot></span></button>	
            </h2>							
            <p class="accordion__description"><slot name="accordion-description"/>
            Default accordion description text.
            </p>
        </li>
        `
    }
    render(){
        this.shadowRoot.innerHTML += `${this._styles()} ${this._template()}` 
        this.shadowRoot.querySelector('.accordion-button').addEventListener('click', this.toggleAccordion.bind(this));
        
    }
    
    toggleAccordion(){
        this.shadowRoot.querySelector('.accordion-button').classList.toggle('accordion-button--closed')
        this.shadowRoot.querySelector('.accordion__description').classList.toggle('accordion__description--visible')
    }

    
}

customElements.define('accordion-element', AccordionElement);
