let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTg0NjQzOCwianRpIjoiN2MwMDI4ZTgtNWU5OS00OGJlLThlMzAtODNjZGNjNjM4ZjhjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTI3IFNxdWFkIiwibmJmIjoxNjk1ODQ2NDM4LCJleHAiOjE3MjczODI0Mzh9.XO0Ju6X8Wmf6gPTIvEhxCMZOIZRUPZfFzzOUzVKLOlc" // backend from flask
let userId = localStorage.getItem('token')


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
     }
    }