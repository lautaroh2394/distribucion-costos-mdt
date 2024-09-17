import { StateManager } from "./stateManager.model";

export const PIE_CONFIG = {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
    },
    options: {
       display: false,
        plugins: {
            tooltip: {
            callbacks: {
                label: (tootltipItems)=>{
                    let label = parseInt(tootltipItems.parsed * 10000)/100 + "%"
                    if (StateManager.GetInstance().showExpense) 
                        label = label + "; Es decir: $" + parseInt(tootltipItems.parsed * expense.value *100)/100
                    return label;
                }
            },
        },
    },
   }
}

export const BAR_CONFIG = {
        type: 'bar',
        data:  {
            labels: ["UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE"],
            datasets: [{
              label: 'Comparaci{',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 10
            }]
          },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (tootltipItems)=>{
                  let label = parseInt(tootltipItems.parsed.y * 10000)/100 + "%"
                  if (StateManager.GetInstance().showExpense) 
                    label = "$" + parseInt(tootltipItems.parsed.y * expense.value *100)/100
                  return label;
                }
              },
            },
          },
        },
}

export const BAR_COLOURS = [
  'rgba(255, 159, 64)',
  'rgba(255, 99, 132)',
  'rgba(255, 205, 86)',
  'rgba(75, 192, 192)',
  'rgba(54, 162, 235)',
  'rgba(153, 102, 255)',
  'rgba(201, 203, 207)'
]