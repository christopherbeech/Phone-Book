import { Component, OnInit } from "@angular/core";
import { IContactInfo } from "./phonebook";
import { PhonebookService } from "./phonebook.service";

@Component({
    selector: "pb-phonebook",
    templateUrl: "./phonebook.component.html",
    styleUrls: ["phonebook.component.css"]
})
export class PhoneBookComponent implements OnInit{

    firstName: string = '';
    // lastName: string = '';
    // phoneNumber: string = '';
    private _filterList: string = '';

    
    get filterList(): string {
        return this._filterList;
    }
    set filterList(value: string) {
        this._filterList = value;
        this.filteredContacts = this.setFilterList(value);
    }

    filteredContacts: IContactInfo[] = [];
    contacts: IContactInfo[] = []

    constructor(private phonebookService: PhonebookService) {}

    newContact: IContactInfo = {

        id: 1,
        firstName: '',
        lastName: '',
        phoneNumber: ''

    }


    deleteInfo(id: number){
        this.contacts = this.contacts.filter((v,i) => i !== id)
      }

    setFilterList(filterItem: string): IContactInfo[] {

        filterItem = filterItem.toLocaleLowerCase();
        return this.contacts.filter((contact: IContactInfo) => 
          contact.firstName.toLocaleLowerCase().includes(filterItem) 
          || contact.lastName.toLocaleLowerCase().includes(filterItem)
          || contact.phoneNumber.toLocaleLowerCase().includes(filterItem)
        )
      }

      addContact(newContact: IContactInfo){
        this.phonebookService.addContact(newContact);
        this.newContact = {

            id: 1,
            firstName: '',
            lastName: '',
            phoneNumber: ''
    
        }
      }


    ngOnInit(): void {
        this.contacts = this.phonebookService.getContacts();
        this.filteredContacts = this.contacts;
        this.newContact = {

            id: 1,
            firstName: '',
            lastName: '',
            phoneNumber: ''
    
        }
    }

}