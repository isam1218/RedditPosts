import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  reddit: any;
  start:any = 0;
  end:any = 10;
  page:any = 1;
  lastPage = false;
  firstPage = true;
  selectedReddit: Object;
  comments: any;
  mainUrl = 'http://www.reddit.com';


  constructor(private apiService: ApiService) {

  }

  ngOnInit() {  
    this.apiService.getPosts().subscribe(posts => {
      this.reddit = posts["data"].children;
      
    });
  }


  onSelect(reddit: Object): void {
    for(let i = 0; i < this.reddit.length;i++){
      this.reddit[i].data.hidden = true;
    }
    this.selectedReddit = reddit;
    this.selectedReddit["data"].hidden = !this.selectedReddit["data"].hidden;

  if(this.selectedReddit["data"].url.includes('comments')) {
    this.selectedReddit["data"].url += ".json";

    this.apiService.getComments(this.selectedReddit["data"].url).subscribe(posts => {

      this.selectedReddit["data"].comments = posts[1].data.children;
      
    });
  }
  else if(this.selectedReddit["data"].permalink.includes("comments")) {
    var url = 'http://www.reddit.com';

    url = url + this.selectedReddit["data"].permalink + ".json";

    this.apiService.getComments(url).subscribe(posts => {

      this.selectedReddit["data"].comments = posts[1].data.children; 

    });
  }
  }

  showMore(){
    this.firstPage = false;
    if(this.lastPage){
      return;
    }

    this.end = this.end + 10;
    this.start = this.start + 10;
    if(this.end > this.reddit.length){
      this.end = this.reddit.length;
      this.start = this.end - 10;
      this.page++;
      this.lastPage = true;
    }
    else{
      this.page++;
    }
  }

  showLess(){
    this.lastPage = false;
    if(this.firstPage){
      return;
    }

    this.end = this.end - 10;
    this.start = this.end - 10;
    if(this.end <= 10){
      this.end = 10;
      this.start = 0;
      this.page--;
      this.firstPage = true;
    }
    else{
      this.page--;
    }
  }





}
