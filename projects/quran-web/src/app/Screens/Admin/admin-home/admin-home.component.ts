import { GropedEnroll } from './../../../Models/GropedEnroll.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, Chart } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AdminService } from '../../../Services/admin.service';
import { map } from 'rxjs/operators';
const months = [];


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit, OnDestroy {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'New Enrollments' },
    { data: [], label: 'New Un-Enrollments' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];

  enrollsSub: Subscription;

  constructor(
    private adminService: AdminService
  ) {


  }

  ngOnInit(): void {
    this.getAllEnrolls();
    this.getUnEnrolls();
  }


  getAllEnrolls = () => {
    this.enrollsSub = this.adminService.getAllEnrolls()
      .pipe(
        map((enroll: GropedEnroll[]) => {
          return enroll.map((e: GropedEnroll) => {
            e['month'] = e._id.month;
            return e;
          })
        }))
      .subscribe((enrolls: GropedEnroll[]) => {
        let newData = new Array(7);
        newData.fill(0);
        enrolls.map((enroll: GropedEnroll) => {
          newData[enroll.month - 1] = enroll.count;
        })
        this.lineChartData[0].data.push(...newData)

      })

  }

  getUnEnrolls = () => {
    this.enrollsSub = this.adminService.getAllUnEnrolls()
      .pipe(
        map((enroll: GropedEnroll[]) => {
          return enroll.map((e: GropedEnroll) => {
            e['month'] = e._id.month;
            return e;
          })
        }))
      .subscribe((enrolls: GropedEnroll[]) => {
        console.log("Enrolls : ", enrolls);

        let newData = new Array(7);
        newData.fill(0);
        enrolls.map((enroll: GropedEnroll) => {
          newData[enroll.month - 1] = enroll.count;
        })
        this.lineChartData[1].data.push(...newData)

      })

  }
  ngOnDestroy() {
    this.enrollsSub.unsubscribe();
  }
}
