import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = 'admin';
  password = 'admin';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }
  }
}
