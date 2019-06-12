import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../service/api.service';

// import { Reddit } from '../../models/reddit';


@Component({
  selector: 'app-reddit-detail',
  templateUrl: './reddit-detail.component.html',
  styleUrls: ['./reddit-detail.component.css']
})

export class RedditDetailComponent implements OnInit {
@Input() reddit: any;


constructor(private apiService: ApiService) {

}

  ngOnInit() {

    
  }

}
