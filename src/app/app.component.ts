import { Component } from '@angular/core';
import { NgxQrcodeElementTypes} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-code-generator';
  elementType = NgxQrcodeElementTypes.URL;
  value = 'www.example.com';
}
