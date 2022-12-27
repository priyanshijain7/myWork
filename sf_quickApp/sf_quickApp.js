import {
    LightningElement
} from 'lwc';

export default class Sf_quickApp extends LightningElement {
    selected = {}
    correctAnsweres = 0;
    isSubmited = false;
    myQuestion = [{
            id: "Questions1",
            question: "Number of primitive data types in Java are?",
            answere: {
                a: 6,
                b: 7,
                c: 8,
                d: 9
            },
            correctAnswere: "c"
        },

        {
            id: "Questions2",
            question: "Who invented Java Programming?",
            answere: {
                a: "uido van Rossum",
                b: "James Gosling",
                c: "Dennis Ritchie",
                d: "Bjarne Stroustrup"
            },
            correctAnswere: "b"
        },
        {
            id: "Questions3",
            question: "Which one of the following is not a Java feature?",
            answere: {
                a: "Use of pointers",
                b: "Object-oriented",
                c: "Portable",
                d: "Dynamic and Extensible"
            },
            correctAnswere: "b"
        },
    ]
    totalQuestions = this.myQuestion.length;
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }
    changeHandler(event) {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {
            name,
            value
        } = event.target;
        this.selected = {
            ...this.selected,
            [name]: value
        }
    }

    submitHandler(event) {
        event.preventDefault()
        let correct = this.myQuestion.filter(item => this.selected[item.id] === item.correctAnswere)
        this.correctAnsweres = correct.length;
        console.log('correct ans is ', this.correctAnsweres);
        this.isSubmited = true;
    }

    resetHandler() {
        this.selected = {};
        this.correctAnsweres = 0;
        this.isSubmited = false;
    }

    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestion.length == this.correctAnsweres? 'slds-text-color_success' : 'slds-text-color_error' } `
    }
}