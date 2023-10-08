import { ShopState } from "../customHooks/FetchData";
import { CreateState } from "../components";

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTg0NjQzOCwianRpIjoiN2MwMDI4ZTgtNWU5OS00OGJlLThlMzAtODNjZGNjNjM4ZjhjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTI3IFNxdWFkIiwibmJmIjoxNjk1ODQ2NDM4LCJleHAiOjE3MjczODI0Mzh9.XO0Ju6X8Wmf6gPTIvEhxCMZOIZRUPZfFzzOUzVKLOlc" // backend from flask
let userId = localStorage.getItem('token')

type PartialShop = Partial<ShopState>

export const serverCalls = {

    getShop: async () =>{

        const response = await fetch(`https://rangerschristmasshop.onrender.com`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
     },
     getOrder: async () => {

        const response = await fetch(`https://rangerschristmasshop.onrender.com/api/order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },
    createOrder: async (data: CreateState) => {

        const response = await fetch(`https://rangerschristmasshop.onrender.com/api/order/create/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },
    updateOrder: async (id: string, data: PartialShop) => {

        const response = await fetch(`https://rangerschristmasshop.onrender.com/api/order/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },
    deleteOrder: async (id: string, data: PartialShop) => {

        const response = await fetch(`https://rangerschristmasshop.onrender.com/api/order/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    }

 
}
    