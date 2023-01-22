import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from 'src/interface/api.interface';
import { ApiService } from 'src/service/api-service.service';

@Component({
  selector: 'app-details-api',
  templateUrl: './details-api.component.html',
  styleUrls: ['./details-api.component.css']
})
export class DetailsApiComponent {

  id!: number;
  public api: Api= new Api;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.api = new Api();
    this.apiService.getApiById(this.id).subscribe( data => {
      this.api = data;
    });
  }

}
