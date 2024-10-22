import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artisans: any[] = [];
  topArtisans: any[] = [];

  constructor(private datasService: DatasService, private router: Router) { }

  ngOnInit(): void {
    this.artisans = this.datasService.artisans;
  }
  viewArtisan(id: number): void{
    this.router.navigate(['/artisan', id])
  }
}
