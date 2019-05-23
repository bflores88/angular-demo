import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData: {
    name: string;
    email: string;
    message: string;
  } = {
    name: '',
    email: '',
    message: '',
    };
  
  nameInvalid = true;
  nameErrorMessage = '';
  emailInvalid = true;
  emailErrorMessage = '';
  messageInvalid = true;
  messageErrorMessage = '';

  constructor() {}

  ValidateName() {
    const { name } = this.formData;

    if (!name) {
      this.nameErrorMessage = 'Name is Required';
      return (this.nameInvalid = true);
    } else if (name.length < 3) {
      this.nameErrorMessage = 'Name is too short';
      return (this.nameInvalid = true);
    }

    this.nameErrorMessage = '';
    return (this.nameInvalid = false);
  }

  ValidateEmail() {
    const { email } = this.formData;

    if (!email) {
      this.emailErrorMessage = 'Email is required';
      return (this.emailInvalid = true)
    } else if (!email.includes('@')) {
      this.emailErrorMessage = 'Email not formatted correctly.';
      return (this.emailInvalid = true)
    }

    this.emailErrorMessage = '';
    return (this.emailInvalid = false);
  }

  ValidateMessage() {

    const { message } = this.formData;

    if (!message) {
      this.messageErrorMessage = 'Message is Required';
      return (this.messageInvalid = true);
    } 

    this.messageErrorMessage = '';
    return (this.messageInvalid = false);
  }

  submit() {
    if (this.nameInvalid || this.emailInvalid || this.messageInvalid) {
      return;
    }
    console.log(this.formData);
  }
}
