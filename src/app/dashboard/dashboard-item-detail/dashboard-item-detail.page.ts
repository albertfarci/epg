import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoiService } from 'src/app/shared/services/poi.service';
import { filter, map, tap } from 'rxjs/operators'
import { SLIDES_OPTIONS_CONFIGURATIONS } from 'src/app/shared/models/slideoptions.model';
import { IonRange } from '@ionic/angular';
import { IframeTemplateService } from 'src/app/shared/services/iframe-template.service';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-dashboard-item-detail',
  templateUrl: './dashboard-item-detail.page.html',
  styleUrls: ['./dashboard-item-detail.page.scss'],
})
export class DashboardItemDetailPage {

  currentPoiItem;

  slideOpts = SLIDES_OPTIONS_CONFIGURATIONS.get('photo-gallery')

  @ViewChild("range", { static: false }) range: IonRange;

  audioPlayer = null;
  audioDuration = null;
  audioProgress = null;
  audioTimer = null;
  audioIsPaused = false;
  nowPlayingAudioIndex = null;

  constructor(
    private document: DocumentViewer,
    private activeRoute: ActivatedRoute,
    public poiService: PoiService,
    public iframeTemplateService: IframeTemplateService) { }

  ionViewDidEnter() {

    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.currentPoiItem = this.poiService.currentPOI.pipe(
      map(poi => {
        return poi.filter(poi => poi.id === id)[0]
      }),
      tap(poi => console.log(poi))
    );

    this.poiService.getPois()

  }

  openPdf(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }

    this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
  }


  playPlauseAudio(index: number, file: string) {
    if (index === this.nowPlayingAudioIndex) {
      // update current player
      if (this.audioIsPaused) {
        // resume
        this.audioIsPaused = false;
        if (this.audioPlayer) this.audioPlayer.play();
      } else {
        // pause
        this.audioIsPaused = true;
        if (this.audioPlayer) this.audioPlayer.pause();
      }
    } else {
      if (this.audioPlayer) {
        // stop any existing audio
        this.destroyAudio();
      }
      // create and play new track
      this.nowPlayingAudioIndex = index;
      this.audioIsPaused = false;
      this.audioPlayer = new Audio(file);
      this.audioPlayer.play().then(() => {
        this.audioDuration = this.audioPlayer.duration;
        this.audioTimer = setInterval(() => {
          this.audioProgress = this.audioPlayer.currentTime;
          this.audioPlayer.onended = () => {
            this.destroyAudio();
          };
        }, 100);
      });
    }
  }

  seek(index: number, event: any) {
    if (index == this.nowPlayingAudioIndex) {
      let seekTo = event.target.value;
      this.audioPlayer.currentTime = seekTo;
      if (this.audioIsPaused == true) {
        this.audioPlayer.play();
        this.audioIsPaused = false;
      }
    }
  }

  pauseWhileSeeking(index: number) {
    if (index == this.nowPlayingAudioIndex) {
      this.audioIsPaused = true;
      this.audioPlayer.pause();
    }
  }

  getAudioProgress(seconds: number) {
    if (seconds >= 0) {
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    }
  }

  destroyAudio() {
    if (this.audioPlayer && !this.audioIsPaused) this.audioPlayer.pause();
    if (this.audioTimer) clearInterval(this.audioTimer);
    if (this.range) this.range.value = 0;
    this.audioPlayer = null;
    this.audioDuration = null;
    this.audioProgress = null;
    this.audioTimer = null;
    this.audioIsPaused = false;
    this.nowPlayingAudioIndex = null;
  }

}
