class Question {

    /**
     * @type {string}
     */
    #questionText

    /**
     * @type {string[]}
     */
    #answers

    /**
     * @type {string}
     */
    #rightAnswer

    get questionText(){
        return this.#questionText

    }

    get answers(){
        return this.#answers

    }

    get rightAnswer(){
        return this.#rightAnswer

    }

    constructor(questionText, answers, righAnswers){
        this.#questionText = questionText;
        this.#answers = answers;
        this.#rightAnswer = righAnswers;
    }
 

}
