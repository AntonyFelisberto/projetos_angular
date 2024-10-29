import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { TimerService } from './timer/timer.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    TimerService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
