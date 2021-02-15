import { RouteData } from '../Models/RouteData.model';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class DynamicMeta {
  constructor(
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {

  }

  intializTags() {
    this.metaService.addTag({ name: 'title', content: 'Quran' });
    this.metaService.addTag({ name: 'description', content: 'This is a web site used to help students to learn Quran Karim ' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow,quran,muslim' });

  }

  updateTags(data: RouteData) {
    if (data.title) {
      this.metaService.updateTag({ name: 'title', content: data.title });
    }
    if (data.description) {
      this.metaService.updateTag({ name: 'description', content: data.description });
    }
    if (data.robots) {
      this.metaService.updateTag({ name: 'robots', content: data.robots })
    }
  }

  // subscribeToRouteChange = () => {
  //   this.router.events.pipe(
  //     filter(e => e instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     let rt = this.getChild(this.activatedRoute);

  //     rt.data.subscribe((data: RouteData) => {
  //       console.log("Route Data in meta service  : ", data);

  //       if (data.title) {
  //         this.titleService.setTitle(data.title);
  //         this.metaService.updateTag({ name: 'title', content: data.title })
  //       }

  //       if (data.description) {
  //         this.metaService.updateTag({ name: 'description', content: data.description })
  //       }

  //       if (data.robots) {
  //         this.metaService.updateTag({ name: 'robots', content: data.robots })
  //       } else {
  //         this.metaService.updateTag({ name: 'robots', content: "follow,index" })
  //       }
  //     })
  //   })
  // }



  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
}
