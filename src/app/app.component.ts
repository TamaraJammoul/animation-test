import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { CircleComponent } from './circle-component/circle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'animation-test';
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) { }

  async ngOnInit() {
    while (true) {
      await this.generateCircle();
    }
  }

  async generateCircle() {
    const factory = this.resolver.resolveComponentFactory(CircleComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    if (this.componentRef) {
      await this.delay(2000);
      this.componentRef.destroy(); // Destroy the component
    }
    this.componentRef = componentRef;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
