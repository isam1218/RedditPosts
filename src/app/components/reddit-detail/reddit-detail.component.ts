import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../service/api.service';


@Component({
  selector: 'app-reddit-detail',
  templateUrl: './reddit-detail.component.html',
  styleUrls: ['./reddit-detail.component.css']
})

export class RedditDetailComponent implements OnInit {
 @Input() reddit: any;

 ngOnInit() {}
}
