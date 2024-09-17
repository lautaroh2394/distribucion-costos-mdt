import Chart from 'chart.js/auto'
import { StateManager } from './stateManager.model';
import { BAR_CONFIG, PIE_CONFIG } from './chart.config';
export class ChartManager {
    static instance = null;
    static GetInstance() {
        if (ChartManager.instance === null || ChartManager.instance === undefined) ChartManager.instance = new ChartManager();
        return ChartManager.instance
    }
    
    constructor(){
        this.initPieChart()
        this.initBarChart()
        window.chartManager = this
    }

    initPieChart(){
        if (this.pieChart === null || this.pieChart === undefined) {
            const ctx = document.getElementById('pieChart');
            this.pieChart = new Chart(ctx, PIE_CONFIG)
            return this.pieChart
        }
    }

    initBarChart(){
        if (this.barChart === null || this.barChart === undefined) {
            const ctx = document.getElementById('barChart');
            this.barChart = new Chart(ctx, BAR_CONFIG)
            return this.barChart
        }
    }

    refreshPie(data){
       this.pieChartData = data
       this.pieChart.data = data
       this.pieChart.update()
    }

    refreshBar(data){
        this.barChartData = data
        this.barChart.data = data
        this.barChart.update()
    }

    clear(){
        this.pieChart.clear()
        this.barChart.clear()
    }
}