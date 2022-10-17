import { LightningElement, api } from 'lwc';
import PropObj from '@salesforce/schema/Property_Owner__c';
import Photo from '@salesforce/schema/Property_Owner__c.Owner_Photo__c';
import OwnerName from '@salesforce/schema/Property_Owner__c.Owner_Name__c';
import Email from '@salesforce/schema/Property_Owner__c.Email__c';
import Phone from '@salesforce/schema/Property_Owner__c.Owner_Phone__c';
import Address from '@salesforce/schema/Property_Owner__c.Owner_Address__c';

export default class MyPropertyOwner extends LightningElement {
    @api propertyOwnerId;
    objName =PropObj
    pic=Photo
    own=OwnerName
    eml=Email
    ph=Phone
    add=Address

}