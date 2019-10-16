import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Object;
  constructor(private http: HttpClient,
              private httpService: HttpService) { }

  //Changes commit        

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.httpService.getProduct().subscribe(data => {
      console.log('Data', data);
      this.products = (data as any).product;
      console.log('Products', this.products);
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when product goes on sale');
  }
}
