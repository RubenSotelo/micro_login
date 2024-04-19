import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent implements OnInit{
  ngOnInit(): void {
    
  }
  dispositivos:any[] = []

}
