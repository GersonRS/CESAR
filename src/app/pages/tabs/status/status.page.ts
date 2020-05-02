import { ChartComponent } from './../../../components/chart/chart.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Serial } from '@ionic-native/serial/ngx';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  @ViewChild(ChartComponent, { static: false }) chart: ChartComponent;

  private connected = false;
  public resposta: any;

  public data: any;
  public data1: any;

  public text: any;

  constructor(
    private serial: Serial,
    public loadingController: LoadingController,
    private alertController: AlertController,
    ) {
    // setInterval(() => {
    //   const st = '{\"heart\": 120, \"breath\": 10001}';
    //   this.resposta = (JSON.stringify(st)).replace(/\\/g, '');
    //   console.log(this.resposta);
    // }, 2000);
  }

  ngOnInit() {

  }

  onConnect() {
    // const loading = await this.loadingController.create({
    //   message: 'Please wait...',
    // });
    // await loading.present();

    this.serial.requestPermission().then(() => {
      this.serial.open({
        baudRate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: 0,
        dtr: true,
        rts: true,
        sleepOnPause: false
      }).then(() => {
        this.text = 'Serial connection opened';
        console.log('Serial connection opened');
        this.connected = true;
        this.serial.read().then((buffer: ArrayBuffer) => { });
        this.serial.registerReadCallback()
      .subscribe(
        (data: ArrayBuffer) => {
          this.chart.pushOne();
          const view: Int8Array = new Int8Array(data);
          this.data1 = JSON.stringify(this.convertToString(view.values()).replace(/\\/g, ''));
          this.data = JSON.parse(this.data1);
        }
      );
      }).catch((error: any) => {
        this.data1 = error;
        console.log(error);
      });
      // loading.dismiss();
    }).catch((error: any) => {
      // loading.dismiss();
      // const alert = await this.alertController.create({
      //   header: 'No device found',
      //   message: 'Check that the device is connected and try again',
      //   buttons: ['OK']
      // });
      this.text = error;
      // await alert.present();
    });
  }

  private convertToString(iterator) {
    // tslint:disable-next-line: ban-types
    let dt: String = '';
    for (const value of iterator) {
      dt += String.fromCharCode(value);
    }
    return (dt);
  }

}
