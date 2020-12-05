export default {
  github: "https://github.com/punctuations/ac", // link of the project repo
  siteGithub: "https://github.com/punctuations/ac-api", // link of the docs repo path
  titleSuffix: " – ac",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: "MIT 2020 © Matt.",
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold text-lg hidden md:inline">ac</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Animal Crossing Songs for any time!
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ac: animal crossing music at anytime" />
      <meta
        name="og:description"
        content="ac: animal crossing music at anytime"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta name="og:title" content="ac: animal crossing music at anytime" />
      <meta name="apple-mobile-web-app-title" content="ac" />
    </React.Fragment>
  ),
};
