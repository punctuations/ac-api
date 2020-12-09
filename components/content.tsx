export default () => {
  function getFirefoxTime(params?: number) {
    if (!params) {
      switch (new Date().getHours() >= 13) {
        case true:
          return `${new Date().getHours() % 12} PM`;
        case false:
          return `${new Date().getHours()} AM`;
      }
    } else {
      if (window.location.href.split(/time=/i)[1].match(/am/i)) {
        if (params == 10 || params == 11 || params == 12) return `${params} AM`;
        return `${params} AM`;
      } else {
        if (params == 10 || params == 11 || params == 12) return `${params} PM`;
        return `${params} PM`;
      }
    }
  }

  function getTime(params?: number) {
    if (!params) {
      switch (new Date().getHours() >= 13) {
        case true:
          if (
            new Date().getHours() % 12 == 10 ||
            new Date().getHours() % 12 == 11 ||
            new Date().getHours() % 12 == 12
          )
            return `${new Date().getHours() % 12} PM`;
          return `0${new Date().getHours() % 12} PM`;
        case false:
          if (
            new Date().getHours() == 10 ||
            new Date().getHours() == 11 ||
            new Date().getHours() == 12
          )
            return `${new Date().getHours()} AM`;
          return `0${new Date().getHours()} AM`;
      }
    } else {
      if (window.location.href.split(/time=/i)[1].match(/am/i)) {
        if (params == 10 || params == 11 || params == 12) return `${params} AM`;
        return `0${params} AM`;
      } else {
        if (params == 10 || params == 11 || params == 12) return `${params} PM`;
        return `0${params} PM`;
      }
    }
  }

  function query(browser?: string) {
    if (!window.location.href.split("?")[1]) {
      switch (!window.location.href.split(/time=/i)[1]) {
        case true:
          window.location.href.split(/weather=/i)[1];
          break;
        case false:
          if (
            window.location.href.split(/time=/i)[1].match(/am/i) ||
            window.location.href.split(/time=/i)[1].match(/pm/i)
          ) {
            switch (browser) {
              case "chrome":
                getTime(parseInt(window.location.href.split(/time=/i)[1]));
              case "firefox":
                getFirefoxTime(
                  parseInt(window.location.href.split(/time=/i)[1])
                );
            }
          } else if (parseInt(window.location.href.split(/time=/i)[1]) >= 13) {
            switch (browser) {
              case "chrome":
                getTime(parseInt(window.location.href.split(/time=/i)[1]) % 12);
              case "firefox":
                getFirefoxTime(
                  parseInt(window.location.href.split(/time=/i)[1]) % 12
                );
            }
          }
          break;
      }
    } else if (browser == "chrome") {
      getTime();
    } else if (browser == "firefox") {
      getFirefoxTime();
    }
  }

  res.status(200).json({
    time: `${query("chrome")}`,
    firefoxTime: `${query("firefox")}`,
    music: [
      {
        game: "New Horizons",
        file: `https://ac.vercel.app/music/New Horizons/${query("chrome")}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/New Horizons/${query(
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/New Horizons/snow/${query(
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/New Horizons/snow/${query(
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/New Horizons/rain/${query(
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/New Horizons/rain/${query(
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/newhorizons.jpeg",
      },
      {
        game: "New Leaf",
        file: `https://ac.vercel.app/music/New Leaf/${query("chrome")}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/New Leaf/${query(
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/New Leaf/snow/${query(
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/New Leaf/snow/${query(
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/New Leaf/rain/${query(
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/New Leaf/rain/${query(
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/newleaf.jpeg",
      },
      {
        game: "City Folk",
        file: `https://ac.vercel.app/music/City Folk/${query("chrome")}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/City Folk/${query(
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/City Folk/snow/${query(
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/City Folk/snow/${query(
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/City Folk/rain/${query(
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/City Folk/rain/${query(
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/cityfolk.jpeg",
      },
      {
        game: "Gamecube",
        file: `https://ac.vercel.app/music/Gamecube/${query("chrome")}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/Gamecube/${query(
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/Gamecube/snow/${query(
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/Gamecube/snow/${query(
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/Gamecube/rain/${query(
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/Gamecub/rain/${query(
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/GCN.jpeg",
      },
    ],
  });
};
