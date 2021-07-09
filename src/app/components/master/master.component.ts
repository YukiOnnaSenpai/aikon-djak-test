import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<string>>('localhost:8080/server/advertisement/getAllComments', httpOptions).subscribe();
  }

}
ComponentsRegistryService.registerComponent("MasterComponent", MasterComponent);