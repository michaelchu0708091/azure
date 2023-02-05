module.exports = async function (context, req) {

    const jwt = req.query.jwt
    const _locationList = await fetch(`https://pure360-api.pure-international.com/api/v3/view_location?language_id=1&region_id=1`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
            "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Microsoft Edge\";v=\"109\", \"Chromium\";v=\"109\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-date": "1674825571000",
            "x-features": "last_chance_booking",
            "x-jwt-token": jwt,
            "x-token": "da3e8afe3fa08df758553c32d207f854"
        },
        "referrer": "https://pure360.pure-fitness.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    });
    const locationList = _locationList.json()
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: locationList
    };
}