import { addCategory } from './category/addCategory.function';
import { showCategoryForm } from './category/showCategoryForm.function';
import { hideCategoryForm } from './category/hideCategoryForm.function';
import { addContributor } from './contributor/addContributor.function';
import { showContributorForm } from './contributor/showCategoryForm.function';
import { hideContributorForm } from './contributor/hideCategoryForm.function';
import { StateManager } from '../stateManager.model';
import { categoriesRender, contributorsRender } from './initialDataRender.function';
import { renderGraphs } from './renderGraphs.function';

export function setEvents(){
    addCategoryButton.addEventListener('click', ()=>{
        addCategory();
        categoriesRender();
        contributorsRender();
        hideCategoryForm();
      })
      showCategoryFormButton.addEventListener('click', showCategoryForm)
      cancelAddCategoryButton.addEventListener('click', hideCategoryForm)
      addContributorButton.addEventListener('click', ()=>{
        addContributor();
        contributorsRender();
        hideContributorForm();
      })
      showContributorFormButton.addEventListener('click', showContributorForm)
      cancelAddContributorButton.addEventListener('click', hideContributorForm)
      showExpenseButton.addEventListener('click', ()=>{
        const toggled = !(showExpenseButton.getAttribute('isEnabled') === 'true')
        showExpenseButton.setAttribute('isEnabled', toggled)
        showExpenseButton.classList = []
        if (toggled){
          document.querySelectorAll(".hideable").forEach(e => {
            e.style.display = "block";
          })
          showExpenseButton.classList.add("btn")
          showExpenseButton.classList.add("btn-success")
        } else {
          document.querySelectorAll(".hideable").forEach(e => {
            e.style.display = "none";
          })
          showExpenseButton.classList.add("btn") 
          showExpenseButton.classList.add("btn-secondary") 
        }
        StateManager.GetInstance().setShowExpense(toggled)
      })

      expense.addEventListener('change', renderGraphs)
}