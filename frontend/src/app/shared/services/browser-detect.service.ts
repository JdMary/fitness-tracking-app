import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectService {
  getBrowserInfo(): { name: string; version: string } {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';
    let version = 'Unknown';

    if (userAgent.indexOf('Firefox') > -1) {
      browserName = 'Firefox';
      version = userAgent.split('Firefox/')[1];
    } else if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Chrome';
      version = userAgent.split('Chrome/')[1].split(' ')[0];
    } else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Safari';
      version = userAgent.split('Version/')[1].split(' ')[0];
    } else if (userAgent.indexOf('Edge') > -1) {
      browserName = 'Edge';
      version = userAgent.split('Edge/')[1];
    }

    return { name: browserName, version };
  }
}