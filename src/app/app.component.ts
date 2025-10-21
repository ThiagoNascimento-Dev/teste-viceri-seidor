import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./modules/components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
  <app-nav/>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'test-project-viceri-seidor';
}
