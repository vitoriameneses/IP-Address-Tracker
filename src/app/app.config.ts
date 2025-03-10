import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // HTTP Client
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para ngModel e FormControl
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()), // Habilita HTTP Client para API de IP
    importProvidersFrom(FormsModule, ReactiveFormsModule), // ✅ Substitui provideForms()
    provideClientHydration(withEventReplay())
  ]
};