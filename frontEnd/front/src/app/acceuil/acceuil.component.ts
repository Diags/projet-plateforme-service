import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../catalogue.service";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit, AfterViewInit {
  users;
  categories;
  currenteCategorie;
  curenteSearchUsers;
  iscontactChecked = false;
  currentUser;
  svgTagId;
  @ViewChild('mapSen') mapSen: ElementRef;

  constructor(private catelogService: CatalogueService, private  routeActive: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.catelogService.curenteSearchUsers = [];
    this.getcatalogue("/categories");
    this.getUsers();
  }

  getcatalogue(url) {
    this.catelogService.getCatalogue(url).subscribe(data => {
      this.categories = data;
    }, err => {
      console.log(err);
    })
  }

  getUsers() {
    this.catelogService.getAllUsers("/allUsers").subscribe(data => {
      this.users = data;
      console.log("users ****>", data);
    }, err => {
      console.log(err);
    })
  }

  toggleTel(user) {
    this.currentUser = user;
    this.iscontactChecked = !this.iscontactChecked;
    console.log("iscontactChecked", this.iscontactChecked)
  }

  getcatalogueByAdresse(dataForm: any) {
    console.log("formData ++++==>  ", dataForm);
    this.catelogService.Search(dataForm).subscribe(data => {
      this.catelogService.curenteSearchUsers = data;
      this.route.navigateByUrl("/professions-details/" + 0);
    })
  }

  getUsersBycategories(c) {
    this.currenteCategorie = c;
    this.route.navigateByUrl('/catalogue/2/' + c.id);
  }

  ngAfterViewInit(): void {
    let map = this.mapSen.nativeElement.querySelector("div");
    console.log("mapppp", map);
    let mapb = this.mapSen.nativeElement.querySelector("#map_s");
    let paths = map.querySelectorAll('svg a');
    console.log("this is opaths values ", paths);
    console.log("list right", map.querySelector('#map_list').querySelectorAll('a'));
    let links = map.querySelector('#map_list').querySelectorAll('a');

    console.log("map_list*****", links);
    console.log("mapSen////////", paths);
    console.log("map##", map);

    //polyfill du foreach
    if (NodeList.prototype.forEach === undefined) {
      NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this.callback)
      }
    }

    paths.forEach(path => {
      path.addEventListener("mouseenter", function (e) {
        let id = this.id;
        extracted(id);
      })
    });
    links.forEach(link => {
      link.addEventListener("mouseenter", function () {
        let id = this.id.replace("list-", "");
        extracted(id);

      })
    });
    map.addEventListener("mouseover", function (e) {
      let id;
      extracted(id);

    });

    function extracted(id) {
      map.querySelectorAll('.is-active').forEach(e => {
        e.classList.remove('is-active')
      });
      if (id != undefined) {
        map.querySelector('#map_list ' + '#list-' + id).classList.add('is-active');
        map.querySelector('svg #' + id).classList.add('is-active');
      }
    }

  }
}
