import { StateManager } from "../stateManager.model";

export function initialDataRender(){
    categoriesRender()
    contributorsRender()
}

export function categoriesRender(){
    const state = StateManager.GetInstance()

    //delete previous categories from html but first (which is the title row)
    Array.from(categoriesContainer.children).filter((_, i)=> i>0).forEach(e=> e.parentElement.removeChild(e))
    state.categories.forEach(category => {
        const newElementString = `
        <div class="row">
            <div class="col">
                ${category.name}
            </div>
            <div class="col">
                <input type="number" value="${category.weight}">
            </div>
            <div class="col">
                <input type="button" value="borrar" class="btn-danger">
            </div>
        </div>
        `
        let newElement = document.createElement('div')
        newElement.innerHTML = newElementString
        newElement = newElement.children[0]

        //set events
        newElement.children[1].addEventListener('change', (ev)=> {
            state.editCategory({...category, weight:Number(ev.target.value)})
            contributorsRender()
        })
        newElement.children[2].addEventListener('click', ()=> {
            state.removeCategory(category)
            contributorsRender()
        })

        categoriesContainer.appendChild(newElement)
    })
}

export function contributorsRender(){
    const state = StateManager.GetInstance()
    Array.from(contributorsContainer.children).filter((_, i)=> i>0).forEach(e=> e.parentElement.removeChild(e))
    const categoriesOptions = 
        `<select class="categorySelect" id="newContributorCategory">
            <option selected>Elegí categoría</option>
            ${state.categories.map(category => `<option value="${category.name}">${category.name}</option>`).join()}
        </select>`

    setNewContributorCategoriesOptions(categoriesOptions)

    state.contributors.forEach(contributor => {
        const newElementString = `
        <div class="row">
            <div class="col">
                ${contributor.name}
            </div>
            <div class="col">
                ${categoriesOptions}
            </div>
            <div class="col">
                <input type="button" value="borrar" class="btn-danger">
            </div>
        </div>
        `
        let newElement = document.createElement('div')
        newElement.innerHTML = newElementString
        newElement = newElement.children[0]
        
        // set selected option
        const categorySelect = newElement.children[1]
        const options = [...categorySelect.children[0].options]
        newElement.children[1].children[0].selectedIndex = options.findIndex(e => e.value == contributor.category)

        // set events
        newElement.children[2].addEventListener('click', ()=>{
            state.removeContributor(contributor)
        })

        newElement.children[1].addEventListener('change', (ev)=>{
            state.editContributor({...contributor, category: ev.target.children[ev.target.selectedIndex].value})
        })

        contributorsContainer.appendChild(newElement)
    })
}

export function setNewContributorCategoriesOptions(htmlStringElement){
    newContributorCategory.outerHTML = htmlStringElement
}