import { categoriesRender, contributorsRender } from "./functions/initialDataRender.function";

export class StateManager {
    static instance = null
    static GetInstance(){
        if (StateManager.instance === null || StateManager.instance === undefined) return (StateManager.instance = new StateManager());
        return StateManager.instance
    }
    constructor({ categories, contributors, listeners = [] }) {
        this.categories = categories
        this.contributors = contributors
        this.listeners = listeners
        window.stateManager = this
    }

    addContributor( contributor ){
        this.contributors.push(contributor)
        contributorsRender()
        this.triggerUpdate()
    }

    editContributor({ category, name}){
        const i = this.contributors.findIndex(e => e.name == name)
        this.contributors[i] = {category, name}
        contributorsRender()
        this.triggerUpdate()
    }

    removeContributor({ category, name}){
        this.contributors = this.contributors.filter(e => e.name != name)
        contributorsRender()
        this.triggerUpdate()
    }

    addCategory(category){
        this.categories.push(category)
        categoriesRender()
        this.triggerUpdate()
    }

    editCategory({ weight, name}){
        const i = this.categories.findIndex(e => e.name == name)
        this.categories[i] = {weight, name}
        categoriesRender()
        this.triggerUpdate()
    }

    removeCategory({ weight, name}){
        this.categories = this.categories.filter(e => e.name != name)
        categoriesRender()
        this.triggerUpdate()
    }

    triggerUpdate(){
        this.listeners.forEach(callback => callback())
    }

    setShowExpense(val){
        this.showExpense = val
    }
}