import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (args[0].toLocaleLowerCase() == 'male')
      return 'Mr. ' + value;
    else
      return 'Miss. ' + value;
  }

}
