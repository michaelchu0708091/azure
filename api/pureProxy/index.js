module.exports = async function (context, req) {
    let email = req.body.email
    let password = req.body.password
    const login = await fetch("https://pure360-api.pure-international.com/api/v3/login", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": `"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"`,
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "x-date": "1674825571000",
          "x-token": "da3e8afe3fa08df758553c32d207f854"
        },
        "referrer": "https://pure360.pure-fitness.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{"username":"${email}","password":"${password}","region_id":1,"language_id":"1","jwt":true}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      });
      const token = await login.json()
      console.log(token)
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: token
    };
}