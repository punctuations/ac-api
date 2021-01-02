import type { NextApiRequest, NextApiResponse } from "next";

function query(req: NextApiRequest, browser?: string) {
  if (req.query.time || req.query.weather) {
    switch (!req.query.time) {
      case true:
        req.query.weather;
        break;
      case false:
        if (
          req.query.time.toString().match(/am/i) ||
          req.query.time.toString().match(/pm/i)
        ) {
          if (browser == "chrome") {
            const params = parseInt(req.query.time.toString());
            if (req.query.time.toString().match(/am/i)) {
              if (params == 10 || params == 11 || params == 12)
                return `${params} AM`;
              return `0${params} AM`;
            } else {
              if (params == 10 || params == 11 || params == 12)
                return `${params} PM`;
              return `0${params} PM`;
            }
          } else if (browser == "firefox") {
            const params = parseInt(req.query.time.toString());
            if (req.query.time.toString().match(/am/i)) {
              if (params == 10 || params == 11 || params == 12)
                return `${params} AM`;
              return `${params} AM`;
            } else {
              if (params == 10 || params == 11 || params == 12)
                return `${params} PM`;
              return `${params} PM`;
            }
          }
        } else if (parseInt(req.query.time.toString()) >= 13) {
          if (browser == "chrome") {
            const params = parseInt(req.query.time.toString()) % 12;
            if (req.query.time.toString().match(/am/i)) {
              if (params == 10 || params == 11 || params == 12)
                return `${params} AM`;
              return `0${params} AM`;
            } else {
              if (params == 10 || params == 11 || params == 12)
                return `${params} PM`;
              return `0${params} PM`;
            }
          } else if (browser == "firefox") {
            const params = parseInt(req.query.time.toString()) % 12;
            if (req.query.time.toString().match(/am/i)) {
              if (params == 10 || params == 11 || params == 12)
                return `${params} AM`;
              return `${params} AM`;
            } else {
              if (params == 10 || params == 11 || params == 12)
                return `${params} PM`;
              return `${params} PM`;
            }
          }
        }
        break;
    }
  } else if (browser == "chrome") {
    if (new Date().getHours() >= 13) {
      if (
        new Date().getHours() % 12 == 10 ||
        new Date().getHours() % 12 == 11 ||
        new Date().getHours() % 12 == 12
      )
        return `${new Date().getHours() % 12} PM`;
      return `0${new Date().getHours() % 12} PM`;
    } else {
      if (
        new Date().getHours() == 10 ||
        new Date().getHours() == 11 ||
        new Date().getHours() == 12
      )
        return `${new Date().getHours()} AM`;
      return `0${new Date().getHours()} AM`;
    }
  } else if (browser == "firefox") {
    if (new Date().getHours() >= 13) {
      return `${new Date().getHours() % 12} PM`;
    } else {
      return `${new Date().getHours()} AM`;
    }
  }
}

type Data = {
  time?: string;
  firefoxTime?: string;
  music?: object;
  message?: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    time: `${query(req, "chrome")}`,
    firefoxTime: `${query(req, "firefox")}`,
    music: [
      {
        game: "New Horizons",
        file: `https://ac.vercel.app/music/New Horizons/${query(
          req,
          "chrome"
        )}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/New Horizons/${query(
          req,
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/New Horizons/snow/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/New Horizons/snow/${query(
              req,
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/New Horizons/rain/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/New Horizons/rain/${query(
              req,
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/newhorizons.jpeg",
      },
      {
        game: "New Leaf",
        file: `https://ac.vercel.app/music/New Leaf/${query(
          req,
          "chrome"
        )}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/New Leaf/${query(
          req,
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/New Leaf/snow/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/New Leaf/snow/${query(
              req,
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/New Leaf/rain/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/New Leaf/rain/${query(
              req,
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/newleaf.jpeg",
      },
      {
        game: "City Folk",
        file: `https://ac.vercel.app/music/City Folk/${query(
          req,
          "chrome"
        )}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/City Folk/${query(
          req,
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/City Folk/snow/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/City Folk/snow/${query(
              req,
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/City Folk/rain/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/City Folk/rain/${query(
              req,
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/cityfolk.jpeg",
      },
      {
        game: "Gamecube",
        file: `https://ac.vercel.app/music/Gamecube/${query(
          req,
          "chrome"
        )}.mp3`,
        firefoxFile: `https://ac.vercel.app/music/Gamecube/${query(
          req,
          "firefox"
        )}.mp3`,
        weather: [
          {
            snow: `https://ac.vercel.app/music/Gamecube/snow/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxSnow: `https://ac.vercel.app/music/Gamecube/snow/${query(
              req,
              "firefox"
            )}.mp3`,
          },
          {
            rain: `https://ac.vercel.app/music/Gamecube/rain/${query(
              req,
              "chrome"
            )}.mp3`,
            firefoxRain: `https://ac.vercel.app/music/Gamecub/rain/${query(
              req,
              "firefox"
            )}.mp3`,
          },
        ],
        art: "https://ac.vercel.app/albums/GCN.jpeg",
      },
    ],
  });
};
