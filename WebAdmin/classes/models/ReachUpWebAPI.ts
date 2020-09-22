export module ReachUpWebAPI {
  
      export class clsReachUpWebAPI {
        public readonly _url: string;
        constructor() {
             this._url = 'https://192.168.0.109:8000/api';
         }

         public get url() : string {
           return this._url;
         }

         public async httpGet(str : string, options : Array<string> = [])
         {
            const response = await fetch(this._url + str, {
                method: 'GET',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    //...options.headers,
                },
              })

              const json = await response.json();
              return json;
         }

         public async httpPost(str : string, options : Array<string> = [])
         {
            const response = await fetch(this._url + str, {
                method: 'POST',
                //body: options.body,
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    //...options.headers,
                },
              })
              
              const json = await response.json();
              return json;

         }

         public async httpPatch(str : string, options : Array<string> = [])
         {
            const response = await fetch(this._url + str, {
                method: 'PATCH',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    //...options.headers,
                },
              })

              const json = await response.json();
              return json;

         }

         public async httpDelete(str : string, options : Array<string> = [])
         {
            const response = await fetch(this._url + str, {
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    //...options.headers,
                },
              })
                
              const json = await response.json();
              return json;

         }
     }
}

     /*function clsReachUpWebApi(url)
     {
         this.url = url;

         this.httpGet = async function (str)
         {
            await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
              })
                .then (this.response = JSON.parse(response => response.json()))
                .then(() => {
                  return this.response;
                })
                return false;
         }

         this.httpPost = async function(str)
         {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
              })
                .then (this.response = JSON.parse(response => response.json()))
                .then(() => {
                  return this.response;
                })
                return false;
         }

         this.httpPatch = async function(str)
         {
            await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
              })
                .then (this.response = JSON.parse(response => response.json()))
                .then(() => {
                  return this.response;
                })
                return false;
         }

         this.httpDelete = async function(str)
         {
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
              })
                .then (this.response = JSON.parse(response => response.json()))
                .then(() => {
                  return this.response;
                })
                return false;
         }
     }*/
