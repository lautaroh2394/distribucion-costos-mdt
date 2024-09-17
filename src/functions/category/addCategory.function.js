import { StateManager } from "../../stateManager.model"

export function addCategory(){
    const category = {
        name: newCategoryName.value,
        weight: Number(newCategoryWeight.value)
    }

    StateManager.GetInstance().addCategory(category)
}