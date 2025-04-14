import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-share-on-facebook',
  templateUrl: './share-on-facebook.component.html',
  styleUrls: ['./share-on-facebook.component.css']
})
export class ShareOnFacebookComponent implements OnInit {

  achievementTitle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.achievementTitle = this.route.snapshot.paramMap.get('achievementTitle') || '';
    this.loadFacebookSDK();
  }

  loadFacebookSDK(): void {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '2404642779883112', // ✅ Ton App ID Facebook
        cookie: true,
        xfbml: true,
        version: 'v22.0'
      });
    };

    // Charge le SDK Facebook s’il n’existe pas déjà
    if (!document.getElementById('facebook-jssdk')) {
      const js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = 'https://connect.facebook.net/fr_FR/sdk.js';
      document.body.appendChild(js);
    }
  }

  shareMessage(): void {
    const urlToShare = 'http://localhost:4200/'; // ✅ Remplace par ton URL réelle
    const message = `🎉 J'ai terminé le challenge "${this.achievementTitle}" sur FitRack ! Venez voir mes progrès 💪`;

    FB.ui({
      method: 'share',
      href: urlToShare,
      quote: message
    }, );
  }

}
