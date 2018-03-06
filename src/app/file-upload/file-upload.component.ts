import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() fileArray: any;
  finalArr: any = [];
  constructor() { }

  ngOnInit() {
    this.finalArr = [];
    this.finalArr = this.fileArray;
    console.log(this.finalArr);
    setInterval(() => {
      this.changePercentage();
    }, 3000);
  }

  changePercentage() {
    this.finalArr.forEach(obj => {
      var currentPercentage = this.zigzag(obj.percentage);
      obj['percentage'] = currentPercentage;
      if (currentPercentage > 10 && currentPercentage < 31) {
        obj['status'] = 'Analysing Context';
      }
      if (currentPercentage > 30 && currentPercentage < 45) {
        obj['status'] = 'Contexts identified';
      }
      if (currentPercentage > 44 && currentPercentage < 65) {
        obj['status'] = 'Parsing Vocabularies'
      }
      if (currentPercentage > 66 && currentPercentage < 70) {
        obj['status'] = 'Terms Identification ongoing';
      }
      if (currentPercentage > 71) {
        obj['status'] = 'Updating in Database';
      }
    })
  }

  zigzag(currentval) {
    var randomVal = currentval + this.randomGenerator(3, 6);
    return randomVal > 90 ? 90 : randomVal;

  }

  randomGenerator(min, max) {
    return Math.random() * (max - min) + min;
  }




}
