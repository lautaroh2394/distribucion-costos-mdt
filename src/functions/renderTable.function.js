import { StateManager } from "../stateManager.model";

export function renderTable(){
    const digest = StateManager.GetInstance().getDigest();
    const total = digest.reduce((p,c)=> c.amount + p, 0)
    tableContainer.innerHTML = `
      <thead>
        <tr>
          <th scope="col">Contribuyente</th>
          <th scope="col">Proporción</th>
          <th scope="col">Monto</th>
        </tr>
      </thead>
      <tbody>
      ${digest.map( data => {
        return `<tr>
          <td>${data.contributor.name}</td>
          <td>${parseInt(data.proportion * 10000) / 100}%</td>
          <td>${data.amount}</td>
        </tr>`
        }
        ).join('')}
        <tfoot>
            <td>Total</td>
            <td>100%</td>
            <td>${parseInt(total *100) / 100}</td>
        </tfoot>
      </tbody>
    `
}