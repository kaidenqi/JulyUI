import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string, city: string): any {
    // return "City Name:"+city;

    if(city === "Bangalore")
      return this.domSanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+ city + '</div>')
    else
      return this.domSanitizer.bypassSecurityTrustHtml('<div style="background-color:lightgreen">'+ city + '</div>')
  }

}
