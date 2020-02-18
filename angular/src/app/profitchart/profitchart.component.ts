import { Component, OnInit, ViewChild } from '@angular/core';
//import data from '../../multiYearLaptopSales.js'
import { Label, BaseChartDirective, Color } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-profitchart',
  templateUrl: './profitchart.component.html',
  styleUrls: ['./profitchart.component.css']
})
export class ProfitchartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Spiderman', 'Ipman', 'Frozen'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [5000, 1500, 700], label: 'Profit' }
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}