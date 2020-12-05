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
        "file": `https://ac.vercel.app/music/New Leaf/${getTime()}.mp3`,
        "firefoxFile": `https://ac.vercel.app/music/New Leaf/${getFirefoxTime()}.mp3`,
        "weather": [
          {
            "snow": `https://ac.vercel.app/music/New Leaf/snow/${getTime()}.mp3`,
            "firefoxSnow": `https://ac.vercel.app/music/New Leaf/snow/${getFirefoxTime()}.mp3`
          },
          {
            "rain": `https://ac.vercel.app/music/New Leaf/rain/${getTime()}.mp3`,
            "firefoxRain": `https://ac.vercel.app/music/New Leaf/rain/${getFirefoxTime()}.mp3`
          }
        ],
        "art": "https://ac.vercel.app/albums/newleaf.jpeg"
      },
      {
        "game": "City Folk",
        "file": `https://ac.vercel.app/music/City Folk/${getTime()}.mp3`,
        "firefoxFile": `https://ac.vercel.app/music/City Folk/${getFirefoxTime()}.mp3`,
        "weather": [
          {
            "snow": `https://ac.vercel.app/music/City Folk/snow/${getTime()}.mp3`,
            "firefoxSnow": `https://ac.vercel.app/music/City Folk/snow/${getFirefoxTime()}.mp3`
          },
          {
            "rain": `https://ac.vercel.app/music/City Folk/rain/${getTime()}.mp3`,
            "firefoxRain": `https://ac.vercel.app/music/City Folk/rain/${getFirefoxTime()}.mp3`
          }
        ],
        "art": "https://ac.vercel.app/albums/cityfolk.jpeg"
      },
      {
        "game": "Gamecube",
        "file": `https://ac.vercel.app/music/Gamecube/${getTime()}.mp3`,
        "firefoxFile": `https://ac.vercel.app/music/Gamecube/${getFirefoxTime()}.mp3`,
        "weather": [
          {
            "snow": `https://ac.vercel.app/music/Gamecube/snow/${getTime()}.mp3`,
            "firefoxSnow": `https://ac.vercel.app/music/Gamecube/snow/${getFirefoxTime()}.mp3`
          },
          {
            "rain": `https://ac.vercel.app/music/Gamecube/rain/${getTime()}.mp3`,
            "firefoxRain": `https://ac.vercel.app/music/Gamecub/rain/${getFirefoxTime()}.mp3`
          }
        ],
        "art": "https://ac.vercel.app/albums/GCN.jpeg"
      }
    ]
  });
}
