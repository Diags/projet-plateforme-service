import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private catelogService:CatalogueService, private  routeActive: ActivatedRoute, private route: Router) { }
  private categories;
  private currenteCategorie;
 
   ngOnInit(): void {
     this.route.events.subscribe((val)=>{
if(val instanceof NavigationEnd){
  let url = val.url;
  let p1 = this.routeActive.snapshot.params.p1;
     if(p1 == 1){
         this.getcatalogue("/categories");
     }
     else if(p1 == 2){
      let id = this.routeActive.snapshot.params.p2;
      this.catelogService.getCatelogById(id).subscribe(data => {
        this.categories = data;
        console.log("p2",data);
      }, err=> {
        console.log(err);
      })
  
  }

}
     });
     let p1 = this.routeActive.snapshot.params.p1;
     if(p1 == 1){
         this.getcatalogue("/categories");
     }
   }
   
 getcatalogue(url){
   this.catelogService.getCatalogue(url).subscribe(data => {
     this.categories = data;
     console.log(data);
   }, err=> {
     console.log(err);
   })
 }
 getUsersBycategories(c){
   this.currenteCategorie = c;
this.route.navigateByUrl('/catalogue/2/'+c.id);
 }
} 