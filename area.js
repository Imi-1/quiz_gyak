class Area {

    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass){
        const container = this.#getContainer()
        const div = document.createElement('div')
        div.className=cssClass
        this.#div=div
        container.appendChild(this.#div)

    }

    get div(){
        return this.#div;
    }


    /**
     * 
     * @returns {HTMLDivElement}
     */
    #getContainer() {
        let container = document.querySelector('.container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }

    
}

class QuestionArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass) {
        super(cssClass);
    }
}

class AnswersArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass) {
        super(cssClass);
    }
}