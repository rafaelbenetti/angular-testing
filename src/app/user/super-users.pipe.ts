import { Pipe, PipeTransform } from '@angular/core';
import { User } from './index';

@Pipe({
  name: 'superUsers',
  pure: false
})
export class SuperUsersPipe implements PipeTransform {

  transform(users: User[]): any {
    return !users ? users : users.filter(u => u.surname === 'Super');
  }
}
