import { EnrollmentService } from './enrollment.service';
import { Component } from '@angular/core';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topics2 = ['HTML', 'CSS', 'Javascript'];
  userModel = new User('jack', 'jack@gmail.com', 1234567890, '', 'default', 'morning', true);
  submitted = false;
  errorMsg;
  constructor(private _enrollmentService: EnrollmentService) { }

  topicHasError = true;
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }


  onSubmit(userform) {
    console.log(userform);//we can use values inside this , or the userModel object that has form changes due to 2 way binding

    this.submitted = true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('success!', data),
        error => this.errorMsg = error.statusText
      )

  }
}
