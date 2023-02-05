module.exports = async function (context, req) {
    const id = req.body.class_id
    const jwt = req.body.jwt
    const book = await fetch("https://pure360-api.pure-international.com/api/v3/booking", {
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
          "x-token": "da3e8afe3fa08df758553c32d207f854",
          "x-jwt-token": jwt,
          "x-features": "last_chance_booking",
        },
        "referrer": "https://pure360.pure-fitness.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{"language_id": "1","class_id": ${id},"book_type": 1,"booked_from": "WEB","region_id": "1"}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      });
      const result = await book.json()
      return result
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
}