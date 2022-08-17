import { Injectable } from "@angular/core";
import { last } from "rxjs";
import { IContactInfo } from "./phonebook";

@Injectable({
    providedIn: 'root'
})
export class PhonebookService {


    getContacts(){
        return this.myContacts
    }
      
     myContacts: IContactInfo[] = [
            {   
                id: 1,
                firstName: 'John',
                lastName: 'Wick',
                phoneNumber: '418-777-6199'
            },
            {
                id: 2,
                firstName: 'Sam',
                lastName: 'Fisher',
                phoneNumber: '913-753-4473'

            },
            {
                id: 3,
                firstName: 'Laura',
                lastName: 'Croft',
                phoneNumber: '210-370-5790'

            }
        ]

    addContact(contact: IContactInfo){
        contact.id = this.myContacts.length + 1
        this.myContacts.push(contact)
    }
}