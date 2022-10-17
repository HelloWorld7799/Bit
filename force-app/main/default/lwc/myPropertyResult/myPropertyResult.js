import { LightningElement,wire } from 'lwc';

import getLatestProperty from '@salesforce/apex/PropertyDetails.getLatestProperty';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import getSearchedProperty from '@salesforce/apex/PropertyDetails.getSearchedProperty';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

import { NavigationMixin} from 'lightning/navigation';

export default class MyPropertyResult extends NavigationMixin(LightningElement) {
    properties
    propertiesFound
    openOwnerDetails=false
    propOwnerId
    feedbackPropertyId
    openFeedbackDetails=false

    propId


    //  Properties to store Filter Data from Fire Events
     locFilter;
     bedroomFilter;
     bathroomFilter;
     budgetFilter;

    @wire(getLatestProperty)
    wiredProperties({data,error}){
        if(data){
            this.properties=data
            // this.propertiesFound=true

        }else if(error){
            this.showToast('Error',error.body.message,'error')
            // this.propertiesFound=false;
        }
    }

    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }));
    }

    ownerDetailsClick(event){
        this.propOwnerId=event.target.value;
        this.openOwnerDetails=true;
        console.log(event.target.value);
    }
    closeOwnerModal(){
        this.openOwnerDetails=false;
    }
    
    feedbackClicked(event){
        this.feedbackPropertyId=event.target.value;
        this.openFeedbackDetails=true
    }
    closeFeedbackModal(){
        this.openFeedbackDetails=false
    }


    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('handelLocFilterChange',this.handelLocFilterChange,this)
        registerListener('handelBedRoomChange',this.handelBedRoomChange,this)
        registerListener('handelBathRoomFilterChange',this.handelBathRoomFilterChange,this)
        registerListener('handelBudgetFilterChange',this.handelBudgetFilterChange,this)


    }

    disconnectedCallback(){
        unregisterAllListeners(this)
    }

    handelLocFilterChange(locchange){
        this.locFilter = locchange;
        getSearchedProperty({
            location: this.locFilter,
            bedroom : this.bedroomFilter,
            bathroom :this.bathroomFilter,
            maxbudget: this.budgetFilter
        }).then(result=>{
            this.properties=result;
        }).catch(error=>{
            this.showToast('ERROR',error.body.message,'error');
        })

    }

    handelBedRoomChange(bedroomChange){
        this.bedroomFilter = bedroomChange;
        getSearchedProperty({
            location: this.locFilter,
            bedroom : this.bedroomFilter,
            bathroom :this.bathroomFilter,
            maxbudget: this.budgetFilter
        }).then(result=>{
            this.properties=result;
        }).catch(error=>{
            this.showToast('ERROR',error.body.message,'error');
        })
    }


    handelBathRoomFilterChange(bathroomChange){
        this.bathroomFilter = bathroomChange;
        getSearchedProperty({
            location: this.locFilter,
            bedroom : this.bedroomFilter,
            bathroom :this.bathroomFilter,
            maxbudget: this.budgetFilter
        }).then(result=>{
            this.properties=result;
        }).catch(error=>{
            this.showToast('ERROR',error.body.message,'error');
        })

    }

    handelBudgetFilterChange(budgetChange){
        this.budgetFilter = budgetChange;
        getSearchedProperty({
            location: this.locFilter,
            bedroom : this.bedroomFilter,
            bathroom :this.bathroomFilter,
            maxbudget: this.budgetFilter
        }).then(result=>{
            this.properties=result;
        }).catch(error=>{
            this.showToast('ERROR',error.body.message,'error');
        })
    }

    NavigateToPropDetails(event){
        this.propId = event.target.value
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "view",
                recordId: this.propId,
                objectApiName: "Property__c"
            }
        });
    }

}