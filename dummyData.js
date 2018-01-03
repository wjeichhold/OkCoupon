{
    "query": {
        "total": 1000,
        "page": 1,
        "per_page": 10,
        "query": "bagel",
        "location": {
            "address":     "444 Castro St.",
            "locality":    "Mountain View",
            "region":      "CA",
            "postal_code": "94041",
            "country":     "United States",
            "latitude":    37.390751,
            "longitude":   -122.080953
        },
        "radius": 10,
        "online": null,
        "category_slugs": [],
        "provider_slugs": [],
        "updated_after": null
    },
    "coupons": [
        {
            "coupon": {
                "id": 1,
                "title": "Coupon for Benny's Bagels",
                "description": null,
                "postal_codes": [94041, 94042],
                "url": "http://api.sqoot.dev/v2/coupons/1/click?api_key=",
                "untracked_url": "http://www.example.org/",
                "provider_name": "Datasphere",
                "provider_slug": "datasphere",
                "category_name": "Restaurants",
                "category_slug": "restaurants",
                "image_url": "https://api.sqoot.dev/v2/coupons/1/image?api_key=cj4fzu",
                "expires_at": "2014-03-30T22:00:00Z",
                "created_at": "2013-11-04T16:18:04Z",
                "updated_at": "2013-11-04T16:18:04Z",
                "merchants": [
                    {
                        "merchant": {
                            "id": 2345,
                            "name": "Posh Bagel",
                            "address": "444 Castro St.",
                            "locality": "Mountain View",
                            "region": "CA",
                            "postal_code": "94041",
                            "country": "United States",
                            "country_code": "US",
                            "latitude": 37.390751,
                            "longitude": -122.080953
                        }
                    }
                ],
                "options": [
                    {
                        "coupon_option": {
                            "id": 123,
                            "title": "Option 1: Free bagel",
                            "description": "FREE Bagel With Purchase of Small Coffee",
                            "fine_print": "With coupon only. Coupon void if altered.",
                            "mobile": true,
                            "type": "service"
                        }
                    },
                    {
                        "coupon_option": {
                            "id": 125,
                            "title": "Option 2: Free coffee",
                            "description": "FREE Coffee With Purchase of Small Bagel",
                            "fine_print": "With coupon only. Coupon void if altered.",
                            "mobile": false,
                            "type": "location"
                        }
                    }
                ]
            }
        }
    ]
}
