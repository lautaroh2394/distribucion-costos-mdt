import './style.css'
import { StateManager } from './src/stateManager.model';
import { renderGraphs } from './src/functions/renderGraphs.function';
import { categoriesRender, contributorsRender, initialDataRender } from './src/functions/initialDataRender.function';
import { setEvents } from './src/functions/setEvents.function';
import { EXAMPLE_CONFIG } from './src/example';

window.addEventListener('load', () => {
  let config = EXAMPLE_CONFIG;
  let showExpense;
  if (window.location.search.slice(1)){
     /*
    structure:
      [categoryName-weight;]=[contributorName-contributorCat;]
    */
    const [pathCategories, pathContributors, pathExpense] = window.location.search.slice(1).split("=")
    const contributors = pathContributors.split(";").map(c => {
      const [name, category] = c.split("-")
      return { name, category }
    })
    const categories = pathCategories.split(";").map(c => {
      const [name, weight] = c.split("-")
      return { name, weight: Number(weight)}
    })
    config = {
      contributors, categories
    }

    if (pathExpense) showExpense = pathExpense
  }
  
  StateManager.instance = new StateManager({
    ...config,
    listeners: [renderGraphs]
  })

  setEvents() 
  initialDataRender()
  renderGraphs();

  if (showExpense) {
    expense.value = showExpense    
    StateManager.GetInstance().setShowExpense(true)
    showExpenseButton.click()
    expense.dispatchEvent(new Event('click'))
  }
});