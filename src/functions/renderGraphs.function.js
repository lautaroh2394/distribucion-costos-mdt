import { BAR_COLOURS } from '../chart.config'
import { ChartManager } from '../chartManager.model'
import { StateManager } from '../stateManager.model'

export function renderGraphs(){
  renderPie()
  renderBar()
}

function renderPie(){
  const state = StateManager.GetInstance()
  const manager = ChartManager.GetInstance()
  const contributorsWeights = state.contributors.map(contributor => 
    state.categories.find(c => c.name == contributor.category)?.weight
  )
  if (contributorsWeights.some(w => isNaN(w))) return manager.clear();

  const totalWeight = contributorsWeights.reduce((p,a)=> a+p,0)

  const pieData = {
    labels: state.contributors.map(c => c.name),
    datasets: [{
      label: '#%',
      data: state.contributors.map(contributor => {
        const contributorWeight = state.categories.find(c => c.name == contributor.category).weight
        return contributorWeight/totalWeight
      }),
      borderWidth: 1
    }]
  }
  manager.refreshPie(pieData)
}

function renderBar(){
  const state = StateManager.GetInstance()
  const manager = ChartManager.GetInstance()

  const contributorsWeights = state.contributors.map(contributor => 
    state.categories.find(c => c.name == contributor.category)?.weight
  )
  if (contributorsWeights.some(w => isNaN(w))) return manager.clear();

  const totalWeight = contributorsWeights.reduce((p,a)=> a+p,0)
  let data = state.contributors.map(contributor => {
        const contributorWeight = state.categories.find(c => c.name == contributor.category).weight
        return contributorWeight/totalWeight
      })

  const barData = {
    labels: state.contributors.map(c => c.name),
    datasets: [{
      label: 'Contribuyentes',
      data: data,
      backgroundColor: data.map((_, i) => BAR_COLOURS[i % BAR_COLOURS.length]),
      borderColor: data.map((_, i) => BAR_COLOURS[i % BAR_COLOURS.length]),
      borderWidth: 1
    }]
  }
  manager.refreshBar(barData)
}