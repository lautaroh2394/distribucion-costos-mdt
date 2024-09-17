import { StateManager } from "../../stateManager.model"

export function addContributor(){
    const select = document.querySelector("#newContributorCategory.categorySelect")
    const selectedOptions = select.options[select.selectedIndex]
    const contributor = {
        name: newContributorName.value,
        category: selectedOptions.value
    }

    StateManager.GetInstance().addContributor(contributor)
}