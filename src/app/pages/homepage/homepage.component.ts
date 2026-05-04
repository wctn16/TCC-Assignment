import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class WelcomeComponent implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  username = signal('');

  ngOnInit(): void {
    const name = this.auth.getUsername();
    if (name) {
      this.username.set(name);
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
