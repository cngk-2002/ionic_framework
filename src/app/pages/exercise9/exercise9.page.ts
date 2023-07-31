import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise9',
  templateUrl: './exercise9.page.html',
  styleUrls: ['./exercise9.page.scss'],
})
export class Exercise9Page implements OnInit {

  userInput: string = '';
  wordCount: number = 0;
  vowelCount: number = 0;
  
  constructor() { }

  ngOnInit() {
  }
  
  calculateCounts() {
    // Calculate word count
    const words = this.userInput.split(' ');
    this.wordCount = words.filter(word => word.trim() !== '').length;

    // Calculate vowel count
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    this.vowelCount = this.userInput.toLowerCase().split('').filter(char => vowels.includes(char)).length;
  }
}
