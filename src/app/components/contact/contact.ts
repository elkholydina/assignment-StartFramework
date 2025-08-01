import { Component } from '@angular/core';
import { Starline } from "../starline/starline";

interface Input
{
  type: string
  placeholder:string
}

@Component({
  selector: 'app-contact',
  imports: [Starline],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact
{
  inputs: Input[] = [ { type: "text", placeholder: "userName" }, { type: "text", placeholder: "userAge" }, { type: "email", placeholder: "userEmail" }, { type: "password", placeholder: "userPassword" } ]
}
