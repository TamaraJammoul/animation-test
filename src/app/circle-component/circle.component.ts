import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CircleComponent implements OnInit {
  viewNumber = 1;

  ngOnInit(): void {
    setInterval(() => {
      this.viewNumber += 1;
    }, 100);
  }

  get numbers(): number[] {
    return Array.from({ length: 12 }, () => this.viewNumber);
  }

  getNumberRotation(index: number): string {
    const angle = (360 / this.numbers.length) * index;
    return `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`;
  }

}
