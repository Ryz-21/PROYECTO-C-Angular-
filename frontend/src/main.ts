import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';  // 👈 ahora sí existe App en app.ts

bootstrapApplication(App)
  .catch(err => console.error(err));
