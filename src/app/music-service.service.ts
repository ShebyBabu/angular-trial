import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  sharedData:any = new Subject();

  public lastfmUrl="http://ws.audioscrobbler.com/2.0";
   public apiKey="920f792ee345290b28ca1b88329197b4";
  public tracks;
  constructor(private httpclient : HttpClient) { }

  public searchTrack(track): any {

    this.tracks = this.httpclient.get(this.lastfmUrl + '/?method=track.search&track=' + track +
     '&api_key=' + this.apiKey + '&format=json');
    return this.tracks;
  }
}


// http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=920f792ee345290b28ca1b88329197b4&format=json

// http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=920f792ee345290b28ca1b88329197b4