# Queries

This API uses queries defined by a `?` at the end of the URL, the query is then followed by a `value` and its `key`.

A full example of a proper query to the API would be `https://ac-api.vercel.app/api/?time=1PM`.

## Time

By appending `?time=6AM` to the end of the URL you can request a specific time.

A request to `https://ac-api.vercel.app/api/?time=8PM` will return the follwing:

```json
{
  "time": "08 PM",
  "firefoxTime": "8 PM",
  "music": [
    {
      "game": "New Horizons",
      "file": "https://ac.vercel.app/music/New Horizons/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/New Horizons/8 PM.mp3",
      "weather": [
        {
          "snow": "https://ac.vercel.app/music/New Horizons/snow/08 PM.mp3",
          "firefoxSnow": "https://ac.vercel.app/music/New Horizons/snow/8 PM.mp3"
        },
        {
          "rain": "https://ac.vercel.app/music/New Horizons/rain/08 PM.mp3",
          "firefoxRain": "https://ac.vercel.app/music/New Horizons/rain/8 PM.mp3"
        }
      ],
      "art": "https://ac.vercel.app/albums/newhorizons.jpeg"
    },
    {
      "game": "New Leaf",
      "file": "https://ac.vercel.app/music/New Leaf/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/New Leaf/8 PM.mp3",
      "weather": [
        {
          "snow": "https://ac.vercel.app/music/New Leaf/snow/08 PM.mp3",
          "firefoxSnow": "https://ac.vercel.app/music/New Leaf/snow/8 PM.mp3"
        },
        {
          "rain": "https://ac.vercel.app/music/New Leaf/rain/08 PM.mp3",
          "firefoxRain": "https://ac.vercel.app/music/New Leaf/rain/8 PM.mp3"
        }
      ],
      "art": "https://ac.vercel.app/albums/newleaf.jpeg"
    },
    {
      "game": "City Folk",
      "file": "https://ac.vercel.app/music/City Folk/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/City Folk/8 PM.mp3",
      "weather": [
        {
          "snow": "https://ac.vercel.app/music/City Folk/snow/08 PM.mp3",
          "firefoxSnow": "https://ac.vercel.app/music/City Folk/snow/8 PM.mp3"
        },
        {
          "rain": "https://ac.vercel.app/music/City Folk/rain/08 PM.mp3",
          "firefoxRain": "https://ac.vercel.app/music/City Folk/rain/8 PM.mp3"
        }
      ],
      "art": "https://ac.vercel.app/albums/cityfolk.jpeg"
    },
    {
      "game": "Gamecube",
      "file": "https://ac.vercel.app/music/Gamecube/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/Gamecube/8 PM.mp3",
      "weather": [
        {
          "snow": "https://ac.vercel.app/music/Gamecube/snow/08 PM.mp3",
          "firefoxSnow": "https://ac.vercel.app/music/Gamecube/snow/8 PM.mp3"
        },
        {
          "rain": "https://ac.vercel.app/music/Gamecube/rain/08 PM.mp3",
          "firefoxRain": "https://ac.vercel.app/music/Gamecub/rain/8 PM.mp3"
        }
      ],
      "art": "https://ac.vercel.app/albums/GCN.jpeg"
    }
  ]
}
```

## Weather

Appending `?weather` will make the API respond with the current time and only the songs for rain or snow (whichever was specified).

If you append `?weather=rain` to the URL the response you will get back is the following:

(In this case 10 PM is my current time so the API reponds with the requested weather music for my current time)

```json
{
  "time": "10 PM",
  "firefoxTime": "10 PM",
  "music": [
    {
      "game": "New Horizons",
      "file": "https://ac.vercel.app/music/New Horizons/rain/10 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/New Horizons/rain/10 PM.mp3",
      "art": "https://ac.vercel.app/albums/newhorizons.jpeg"
    },
    {
      "game": "New Leaf",
      "file": "https://ac.vercel.app/music/New Leaf/rain/10 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/New Leaf/rain/10 PM.mp3",
      "art": "https://ac.vercel.app/albums/newleaf.jpeg"
    },
    {
      "game": "City Folk",
      "file": "https://ac.vercel.app/music/City Folk/rain/10 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/City Folk/rain/10 PM.mp3",
      "art": "https://ac.vercel.app/albums/cityfolk.jpeg"
    },
    {
      "game": "Gamecube",
      "file": "https://ac.vercel.app/music/Gamecube/rain/10 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/Gamecube/rain/10 PM.mp3",
      "art": "https://ac.vercel.app/albums/GCN.jpeg"
    }
  ]
}
```

## Advanced Usage

An advanced usage of the queries for this API would be a combination of the two.

If you append `?time=8PM&weather=snow` to the URL you will get the following response:

```json
{
  "time": "08 PM",
  "firefoxTime": "8 PM",
  "music": [
    {
      "game": "New Horizons",
      "file": "https://ac.vercel.app/music/New Horizons/snow/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/New Horizons/snow/8 PM.mp3",
      "art": "https://ac.vercel.app/albums/newhorizons.jpeg"
    },
    {
      "game": "New Leaf",
      "file": "https://ac.vercel.app/music/New Leaf/snow/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/New Leaf/snow/8 PM.mp3",
      "art": "https://ac.vercel.app/albums/newleaf.jpeg"
    },
    {
      "game": "City Folk",
      "file": "https://ac.vercel.app/music/City Folk/snow/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/City Folk/snow/8 PM.mp3",
      "art": "https://ac.vercel.app/albums/cityfolk.jpeg"
    },
    {
      "game": "Gamecube",
      "file": "https://ac.vercel.app/music/Gamecube/snow/08 PM.mp3",
      "firefoxFile": "https://ac.vercel.app/music/Gamecube/snow/8 PM.mp3",
      "art": "https://ac.vercel.app/albums/GCN.jpeg"
    }
  ]
}
```
