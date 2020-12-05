function getFirefoxTime() {
  switch(new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() >= 13) {
    case true:
      return `${new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() % 12} PM`
    case false:
      return `${new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours()} AM`
  }
}

function getTime() {
  switch(new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() >= 13) {
    case true:
      if (new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() % 12 == 10 || new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() % 12 == 11 || new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() % 12 == 12) return `${new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() % 12} PM`
      return `0${new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() % 12} PM`
    case false:
      if (new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() == 10 || new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() == 11 || new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours() == 12) return `${new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours()} AM`
      return `0${new Date(`Decemeber 5, 2020 ${new Date().toLocaleTimeString(['en-US'])}`).getHours()} AM`
  }
}


export default function handler(req, res) {
  res.status(200).json({
    "time": `${getTime()}`,
    "firefoxTime": `${getFirefoxTime()}`,
    "music": [
      {
        "game": "New Horizons",
        "file": `https://ac.vercel.app/music/New Horizons/${getTime()}.mp3`,
        "firefoxFile": `https://ac.vercel.app/music/New Horizons/${getFirefoxTime()}.mp3`,
        "weather": [
          {
            "snow": `https://ac.vercel.app/music/New Horizons/snow/${getTime()}.mp3`,
            "firefoxSnow": `https://ac.vercel.app/music/New Horizons/snow/${getFirefoxTime()}.mp3`
          },
          {
            "rain": `https://ac.vercel.app/music/New Horizons/rain/${getTime()}.mp3`,
            "firefoxRain": `https://ac.vercel.app/music/New Horizons/rain/${getFirefoxTime()}.mp3`
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
  });
}
