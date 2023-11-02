import { Component } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.scss']
})
export class DashboardpageComponent {
  new_users:any;
  recent_orders:any;
  top_cards:any;
  chartOptions:any;
  chartOptions1:any;
  chartOptions2:any;

  constructor(private dashboardService:DashboardDataService) { }
 
  ngOnInit(): void {
    this.getCardsData();
    this.getLineData();
    this.getColumData();
    this.getPieData();
  }
  getCardsData(){
    let data = this.dashboardService.getDashboardData();
    this.top_cards=data.top_cards;
    this.recent_orders=data.recent_orders;
    this.new_users=data.new_users;
  }


  getLineData(){
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 30, 35, 51, 49, 40, 50,]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Sales Statistics",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thur",
          "Fri",
          "Sat",

        ]
      }
    };
  }
  getColumData(){
    this.chartOptions1 = {
      series: [
        {
          name: "Servings",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65,]
        }
      ],
      title: {
        text: "Balance Overview",
        align: "left"
      },
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#7B9FF2",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#7B9FF2"
              },
              text: "Bananas are good"
            }
          }
        ]
      },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "Servings"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };
  }
  getPieData(){
    this.chartOptions2 = {
      series: [44, 55, 13],
      chart: {
        type: "donut"
      },
      title: {
        text: "Top Products",
        align: "left"
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
