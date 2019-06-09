import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../music-service.service';


@Component({
  selector: 'app-last-fm',
  templateUrl: './last-fm.component.html',
  styleUrls: ['./last-fm.component.css']
})
export class LastFmComponent implements OnInit {

  public tracks;
  constructor(public _route: ActivatedRoute , private router: Router , public muzixservice: MusicServiceService) { }


  ngOnInit() {
    const trackname = this._route.snapshot.paramMap.get('trackname');


    this.tracks = this.muzixservice.searchTrack(trackname).subscribe(
      data => {
        this.tracks = data;
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
  }

}
