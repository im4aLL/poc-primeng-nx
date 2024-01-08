import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { pocRoutes } from '@poc/poc/feature-shell';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(pocRoutes)],
};
