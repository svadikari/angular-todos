import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
