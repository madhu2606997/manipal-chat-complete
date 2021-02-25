import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() list: any; 
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  // list
  mainList = []
 
  constructor() { }

  ngOnInit(): void {
    // this.list = {
    //   "responseId": "cf76a256-5cef-4944-bb25-b9453e816777-2b95931e", 
    //   "queryResult": {
    //     "queryText": "Cardiology",
    //     "action": "DefaultWelcomeIntent.DefaultWelcomeIntent-custom.english-custom.english-BA-custom.english-E-BA-Bengaluru-custom.english-E-BA-banaguluru-custom",
    //     "parameters": {
    //       "Specialties": "3"
    //     },
    //     "allRequiredParamsPresent": true,
    //     "fulfillmentMessages": [
    //       {
    //         "platform": "ACTIONS_ON_GOOGLE",
    //         "simpleResponses": {
    //           "simpleResponses": [
    //             {
    //               "textToSpeech": "Here is the list of doctors:"     
    //             }
    //           ]
    //         }
    //       },
    //       {
    //         "platform": "ACTIONS_ON_GOOGLE",
    //         "carouselSelect": {
    //           "items": [
    //             {
    //               "info": {
    //                 "key": "MHBCARD3|MHBDCAR"
    //               },
    //               "title": "Dr. Anand R Shenoy",
    //               "description": "Consultant - Interventional Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/dr-anand-r-shenoy-consultant-interventional-cardiology.png",
    //                 "accessibilityText": "Dr. Anand R Shenoy"        
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC1976|MHBDCAR"
    //               },
    //               "title": "Dr. Chakrapani B S",
    //               "description": "Consultant - Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_Chakrapani_B_S.png",
    //                 "accessibilityText": "Dr. Chakrapani B S"        
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBCARD5|MHBDCAR"
    //               },
    //               "title": "Dr. KSS Bhat",
    //               "description": "Consultant - Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_KSS_Bhat.png",
    //                 "accessibilityText": "Dr. KSS Bhat"
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC1799|MHBDPCS"
    //               },
    //               "title": "Dr. Maitri Chaudhuri",
    //               "description": "Consultant - Paediatric Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_Maitri_Chaudhuri.png",        
    //                 "accessibilityText": "Dr. Maitri Chaudhuri"      
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC1796|MHBDCAR"
    //               },
    //               "title": "Dr. Padmakumar P",
    //               "description": "Consultant - Interventional Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_Padma_Kumar.png",
    //                 "accessibilityText": "Dr. Padmakumar P"
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC9775|MHBDCAR"
    //               },
    //               "title": "Dr. Ranjan Shetty",
    //               "description": "HOD & Consultant - Interventional Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_Ranjan_Shetty.png",
    //                 "accessibilityText": "Dr. Ranjan Shetty"
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC1850|MHBDCAR"
    //               },
    //               "title": "Dr. Roopa R",
    //               "description": "Consultant - Interventional Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_Roopa.png",
    //                 "accessibilityText": "Dr. Roopa R"
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC993|MHBDCAR"
    //               },
    //               "title": "Dr. Sinam Inaoton Singha",
    //               "description": "Consultant - Cardiac Electrophysiology, Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Dr_Sinam.png",
    //                 "accessibilityText": "Dr. Sinam Inaoton Singha"  
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBDC1797|MHBDCAR"
    //               },
    //               "title": "Dr. Sridhara G",
    //               "description": "Consultant - Interventional Cardiology, Cardiac Electrophysiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Cardiology_-_Dr_Sridhara.png",
    //                 "accessibilityText": "Dr. Sridhara G"
    //               }
    //             },
    //             {
    //               "info": {
    //                 "key": "MHBCARD24|MHBDCAR"
    //               },
    //               "title": "Dr. Wg Cdr SS Iyengar",
    //               "description": "Consultant - Cardiology",
    //               "image": {
    //                 "imageUri": "https://www.manipalhospitals.com/uploads/doctors_photo/Dr_Iyengar_01.png",
    //                 "accessibilityText": "Dr. Wg Cdr SS Iyengar"     
    //               }
    //             }
    //           ]
    //         }
    //       },
    //       {
    //         "platform": "ACTIONS_ON_GOOGLE",
    //         "simpleResponses": {
    //           "simpleResponses": [
    //             {
    //               "textToSpeech": "Please select the above doctor to     proceed for an appointment."
    //             }
    //           ]
    //         }
    //       }
    //     ],
    //     "outputContexts": [
    //       {
    //         "name": "projects/manipal-chatbot-test-ceks/agent/sessions/135/contexts/doctor-bengalurulocations-followup",
    //         "lifespanCount": 2,
    //         "parameters": {
    //           "Specialties.original": "Cardiology",
    //           "Specialties": "3"
    //         }
    //       },
    //       {
    //         "name": "projects/manipal-chatbot-test-ceks/agent/sessions/135/contexts/english-bookappointment-oldairportroad-followup", 
    //         "lifespanCount": 1,
    //         "parameters": {
    //           "Banguluruhospitals.original": "Old Airport Road",     
    //           "Specialties.original": "Cardiology",
    //           "Specialties": "3",
    //           "Banguluruhospitals": "1"
    //         }
    //       },
    //       {
    //         "name": "projects/manipal-chatbot-test-ceks/agent/sessions/135/contexts/english-bookappointment-male-problem-followup",   
    //         "lifespanCount": 1,
    //         "parameters": {
    //           "Banguluruhospitals": "1",
    //           "Specialties": "3",
    //           "Specialties.original": "Cardiology",
    //           "Banguluruhospitals.original": "Old Airport Road"      
    //         }
    //       },
    //       {
    //         "name": "projects/manipal-chatbot-test-ceks/agent/sessions/135/contexts/location",
    //         "lifespanCount": 4,
    //         "parameters": {
    //           "Specialties.original": "Cardiology",
    //           "Specialties": "3",
    //           "Banguluruhospitals.original": "Old Airport Road",     
    //           "Banguluruhospitals": "1"
    //         }
    //       },
    //       {
    //         "name": "projects/manipal-chatbot-test-ceks/agent/sessions/135/contexts/e-ba-banaguluru-followup",
    //         "lifespanCount": 1,
    //         "parameters": {
    //           "Specialties.original": "Cardiology",
    //           "Specialties": "3",
    //           "Banguluruhospitals": "1",
    //           "Banguluruhospitals.original": "Old Airport Road"      
    //         }
    //       }
    //     ],
    //     "intent": {
    //       "name": "projects/manipal-chatbot-test-ceks/agent/intents/c5ae5d0c-35b7-4ed5-9003-c45e170aa183",
    //       "displayName": "Doctor- Bengaluru locations"
    //     },
    //     "intentDetectionConfidence": 1.0,
    //     "diagnosticInfo": {
    //       "webhook_latency_ms": 1216.0
    //     },
    //     "languageCode": "en"
    //   },
    //   "webhookStatus": {
    //     "message": "Webhook execution successful"
    //   }
    // }

    let temp = this.list.queryResult.fulfillmentMessages[1].carouselSelect.items
    temp.forEach(el => {
      this.mainList.push(el)
    });
  }
  sendMsg(val){
    console.log(val)
    this.sendData.emit(val);
}
}
