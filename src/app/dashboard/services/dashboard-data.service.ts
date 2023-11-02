import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  constructor() { }

  getDashboardData(){
    let data = {
      "top_cards": [
        {
          "header": "Saving for Car Loan",
          "sub_header": "30% higher than last year",
          "value": 15,
          "icon":"bxs-music",
          "card":'active',
        },
        {
          "header": "Saving for Home Loan",
          "sub_header": "15% lower than last year",
          "value": 30,
          "icon":"bx-pie-chart-alt",
          "card":'not_active',

        },
        {
          "header": "Saving for Personal Loan",
          "sub_header": "5% higher than last year",
          "value": 35,
          "icon":"bx-download",
          "card":'not_active',

        },
        {
          "header": "Saving for Study Loan",
          "sub_header": "10% higher than last year",
          "value": 9,
          "icon":"bx-shape-circle",
          "card":'not_active',
         
        }
      ],
      "new_users": [
        {
          "id": "459ad60f-06b2-4b8a-9df9-5090febcc694",
          "picture": "http://placehold.it/32x32",
          "name": "Lucile French",
          "isActive": false,
          "country": "Afghanistan",
          "progress": 42
        },
        {
          "id": "31481076-4d1a-4820-b7c5-b94e2e83e5fd",
          "picture": "http://placehold.it/32x32",
          "name": "Amber Graham",
          "isActive": true,
          "country": "El Salvador",
          "progress": 51
        },
        {
          "id": "7361160e-47ee-4e6a-9411-8af0f2440c85",
          "picture": "http://placehold.it/32x32",
          "name": "Elisa Salazar",
          "isActive": false,
          "country": "Cayman Islands",
          "progress": 99
        },
        {
          "id": "b03db609-c1a9-45d0-8bae-4862aaa1915f",
          "picture": "http://placehold.it/32x32",
          "name": "Minnie Colon",
          "isActive": true,
          "country": "Antarctica",
          "progress": 43
        },
        {
          "id": "e2ed5545-fc09-4185-a850-4b90f3c0fe6b",
          "picture": "http://placehold.it/32x32",
          "name": "Sylvia Shepherd",
          "isActive": true,
          "country": "Jamaica",
          "progress": 31
        },
        {
          "id": "4497d596-6104-47c7-90fc-0c12d264b934",
          "picture": "http://placehold.it/32x32",
          "name": "Murphy Buck",
          "isActive": false,
          "country": "American Samoa",
          "progress": 90
        },
        {
          "id": "16f7ca42-ed6d-4cba-8e46-00c8eac9d3bb",
          "picture": "http://placehold.it/32x32",
          "name": "Belinda Dyer",
          "isActive": false,
          "country": "Jordan",
          "progress": 74
        },
        {
          "id": "7675a4d6-277f-487f-8a00-c5db49ebf812",
          "picture": "http://placehold.it/32x32",
          "name": "Cecile Shepard",
          "isActive": false,
          "country": "Europe",
          "progress": 27
        },
        {
          "id": "f29c6d32-bd17-4957-ad0d-30446ea7ee53",
          "picture": "http://placehold.it/32x32",
          "name": "Price Mcfadden",
          "isActive": true,
          "country": "Pitcairn",
          "progress": 49
        },
        {
          "id": "87246697-89ff-4ea5-b908-2776a1dddb4d",
          "picture": "http://placehold.it/32x32",
          "name": "Rice Bonner",
          "isActive": false,
          "country": "Indonesia",
          "progress": 52
        },
        {
          "id": "ee9c842f-fdf2-4b42-9b43-6fef2cae8c5a",
          "picture": "http://placehold.it/32x32",
          "name": "Renee Tyler",
          "isActive": true,
          "country": "Monaco",
          "progress": 84
        },
        {
          "id": "ee6ac9ea-01c2-41b6-b5a6-aa77630e50b5",
          "picture": "http://placehold.it/32x32",
          "name": "Conway Foreman",
          "isActive": true,
          "country": "Bolivia",
          "progress": 66
        },
        {
          "id": "fffdde16-fa1a-411d-8a8b-8859d0f17f22",
          "picture": "http://placehold.it/32x32",
          "name": "Justine Mcintosh",
          "isActive": false,
          "country": "Mauritania",
          "progress": 99
        },
        {
          "id": "72eebad2-bbca-4443-9cc5-5b4aca745f96",
          "picture": "http://placehold.it/32x32",
          "name": "Ferrell Lawrence",
          "isActive": true,
          "country": "Lithuania",
          "progress": 21
        },
        {
          "id": "d980dc7f-7772-4db1-a28b-c9dbca17d175",
          "picture": "http://placehold.it/32x32",
          "name": "Wendi Mclean",
          "isActive": true,
          "country": "Kenya",
          "progress": 53
        }
      ],
      "recent_orders": [
        {
          "id": "a6b63f74-e834-4ae7-be0a-f46300b39a16",
          "name": "Frank Goodman",
          "product": "Laptop",
          "delivery_date": "2023-10-25T17:44:25Z",
          "status": "Paid",
          "tracking_no": "K8085820",
          "shipping": true
        },
        {
          "id": "f93280f9-49d5-463f-8d35-15f2813f5c73",
          "name": "Hester Dickson",
          "product": "Display",
          "delivery_date": "2023-08-28T01:04:58Z",
          "status": "Failed",
          "tracking_no": "D2497252",
          "shipping": true
        },
        {
          "id": "f42450a5-5913-4b68-aec4-54f564dec2df",
          "name": "Katina Thompson",
          "product": "Speakers",
          "delivery_date": "2023-11-09T03:31:09Z",
          "status": "Pending",
          "tracking_no": "K6760208",
          "shipping": false
        },
        {
          "id": "a703ab67-81e7-4427-ba86-8ef032a569b1",
          "name": "Rosie Hood",
          "product": "Mobile",
          "delivery_date": "2023-11-27T06:43:08Z",
          "status": "Pending",
          "tracking_no": "D3116813",
          "shipping": true
        },
        {
          "id": "b164bbd9-a50e-4ae5-8231-31caa9cba736",
          "name": "Darlene Cannon",
          "product": "Display",
          "delivery_date": "2023-07-18T23:35:59Z",
          "status": "Paid",
          "tracking_no": "K5027868",
          "shipping": true
        },
        {
          "id": "7168f034-983a-48c2-85ed-9ac1a071adf1",
          "name": "Dona Owens",
          "product": "Mobile",
          "delivery_date": "2023-11-04T21:47:45Z",
          "status": "Pending",
          "tracking_no": "D7670094",
          "shipping": true
        },
        {
          "id": "7c8bb588-2588-40b5-a164-bfedb18ece2f",
          "name": "Cherry Boyd",
          "product": "Watch",
          "delivery_date": "2023-10-25T23:26:52Z",
          "status": "Paid",
          "tracking_no": "D5792264",
          "shipping": false
        },
        {
          "id": "fc994041-458f-4fa1-b584-13188467c14d",
          "name": "Kristi Stevenson",
          "product": "Speakers",
          "delivery_date": "2023-09-13T09:55:55Z",
          "status": "Paid",
          "tracking_no": "K2651667",
          "shipping": false
        },
        {
          "id": "866624a7-38bc-4d97-8ce7-faccdd31897f",
          "name": "Walls Barber",
          "product": "Watch",
          "delivery_date": "2023-07-08T04:16:26Z",
          "status": "Failed",
          "tracking_no": "G6681787",
          "shipping": true
        },
        {
          "id": "df590a6e-e0c5-4846-bada-73c17ce55f95",
          "name": "Keith Rodgers",
          "product": "Laptop",
          "delivery_date": "2023-07-22T16:50:53Z",
          "status": "Pending",
          "tracking_no": "B3782341",
          "shipping": true
        },
        {
          "id": "f5dc95e8-27d1-4c47-9b3f-1a4e10a642f9",
          "name": "Nichols Benson",
          "product": "Watch",
          "delivery_date": "2023-10-23T07:34:46Z",
          "status": "Pending",
          "tracking_no": "D7691260",
          "shipping": false
        },
        {
          "id": "44986e02-a279-423b-a82e-90995ed688f5",
          "name": "Davidson Hanson",
          "product": "Watch",
          "delivery_date": "2023-08-16T13:22:07Z",
          "status": "Paid",
          "tracking_no": "S8019517",
          "shipping": true
        },
        {
          "id": "328cbd4a-1172-4205-a1a5-c6c3426239b2",
          "name": "Alberta Houston",
          "product": "Laptop",
          "delivery_date": "2023-10-27T20:29:18Z",
          "status": "Pending",
          "tracking_no": "D4494563",
          "shipping": true
        },
        {
          "id": "75f26078-eb2a-4cb9-a7de-f260284f8678",
          "name": "Valarie Wilson",
          "product": "Speakers",
          "delivery_date": "2023-08-14T21:46:36Z",
          "status": "Failed",
          "tracking_no": "K5864468",
          "shipping": true
        },
        {
          "id": "8728206d-7005-4b83-ba59-06305ec760ae",
          "name": "Virginia Mcfadden",
          "product": "Display",
          "delivery_date": "2023-08-16T10:00:56Z",
          "status": "Pending",
          "tracking_no": "G4498709",
          "shipping": true
        },
        {
          "id": "b6a8fbc2-d964-4e2a-bcf7-783dfd5feead",
          "name": "Morris Nieves",
          "product": "Laptop",
          "delivery_date": "2023-10-14T16:18:36Z",
          "status": "Pending",
          "tracking_no": "D2445823",
          "shipping": false
        },
        {
          "id": "a6878798-a44c-48d0-8e3f-074896b11176",
          "name": "Ryan Bowers",
          "product": "Speakers",
          "delivery_date": "2023-09-05T12:29:13Z",
          "status": "Pending",
          "tracking_no": "K2546248",
          "shipping": true
        },
        {
          "id": "2c6d8e29-2d0a-4896-b58c-000fc46ab9b3",
          "name": "Shelia Chang",
          "product": "Tablet",
          "delivery_date": "2023-10-08T12:53:16Z",
          "status": "Paid",
          "tracking_no": "D7918502",
          "shipping": false
        },
        {
          "id": "d63f8d56-d70d-4447-92f4-95f6e12628d2",
          "name": "Willis Lane",
          "product": "Mobile",
          "delivery_date": "2023-09-27T12:07:31Z",
          "status": "Paid",
          "tracking_no": "S4813878",
          "shipping": true
        },
        {
          "id": "04f36a8b-69b1-4a6f-bdb6-fa58fd592917",
          "name": "Chaney Acosta",
          "product": "Tablet",
          "delivery_date": "2023-09-29T08:04:47Z",
          "status": "Paid",
          "tracking_no": "S5204049",
          "shipping": true
        },
        {
          "id": "516903f9-27cb-401c-9fc5-be42aeebf42c",
          "name": "Autumn Hooper",
          "product": "Watch",
          "delivery_date": "2023-09-07T03:39:55Z",
          "status": "Paid",
          "tracking_no": "B7961271",
          "shipping": true
        },
        {
          "id": "9c13f926-06ea-4738-a700-a9f3f04e05e6",
          "name": "Hodge Mendez",
          "product": "Watch",
          "delivery_date": "2023-08-07T05:46:11Z",
          "status": "Paid",
          "tracking_no": "D3619349",
          "shipping": false
        },
        {
          "id": "84660564-7f1c-4c92-914b-d0e2e7ed03a2",
          "name": "Shawna Dominguez",
          "product": "Mobile",
          "delivery_date": "2023-11-13T15:40:24Z",
          "status": "Pending",
          "tracking_no": "K3128665",
          "shipping": true
        },
        {
          "id": "cb0918d0-a0cf-4277-a20b-fdd8bb163bae",
          "name": "Little Pace",
          "product": "Laptop",
          "delivery_date": "2023-08-04T18:25:44Z",
          "status": "Pending",
          "tracking_no": "D5289560",
          "shipping": false
        },
        {
          "id": "dcd2449b-f4b2-4fa5-871d-6ef55915cf18",
          "name": "Geraldine Preston",
          "product": "Mobile Stand",
          "delivery_date": "2023-09-18T16:52:37Z",
          "status": "Pending",
          "tracking_no": "B3421484",
          "shipping": true
        },
        {
          "id": "94c33b61-6ab4-4934-8288-79aba1af6c1d",
          "name": "Fuller Gill",
          "product": "Mobile",
          "delivery_date": "2023-11-07T04:08:50Z",
          "status": "Paid",
          "tracking_no": "S7076597",
          "shipping": false
        },
        {
          "id": "6c23936d-1592-4862-8145-5b6baadec750",
          "name": "Summer Rodriquez",
          "product": "Laptop",
          "delivery_date": "2023-10-05T06:36:48Z",
          "status": "Paid",
          "tracking_no": "G8240541",
          "shipping": true
        },
        {
          "id": "73d4ea58-c3b0-4828-97ec-bf802af5fa5f",
          "name": "Sophia Howard",
          "product": "Tablet",
          "delivery_date": "2023-08-07T07:25:56Z",
          "status": "Paid",
          "tracking_no": "S4044008",
          "shipping": true
        },
        {
          "id": "0ad94e70-767a-49f9-a5b9-d7d868f534fd",
          "name": "Roseann Maxwell",
          "product": "Speakers",
          "delivery_date": "2023-11-11T18:49:37Z",
          "status": "Failed",
          "tracking_no": "B3338542",
          "shipping": true
        },
        {
          "id": "44a26a1c-6927-411c-a824-ca3e6f7fff53",
          "name": "Marquez Melton",
          "product": "Watch",
          "delivery_date": "2023-11-09T13:30:07Z",
          "status": "Pending",
          "tracking_no": "S7072830",
          "shipping": false
        }
      ]
    }
    return data
  }
}
