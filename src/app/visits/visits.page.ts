import { Component, OnInit } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx'
@Component({
  selector: 'app-visits',
  templateUrl: './visits.page.html',
  styleUrls: ['./visits.page.scss'],
})
export class VisitsPage implements OnInit {

  constructor(private push:Push) { }

  ngOnInit() {
  }

}
