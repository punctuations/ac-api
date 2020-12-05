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
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="ac" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta name="description" content="Animal Crossing music at anytime!" />
      <meta property="og:title" content="ac - API" />
      <meta property="og:image" content="/favicon.ico" />
      <meta
        property="og:description"
        content="Animal Crossing music at anytime!"
      />
      <meta name="twitter:image" content="/favion.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Animal Crossing Time" />
      <meta name="twitter:creator" content="@wwwdotca" />
      <meta name="twitter:site" content="@wwwdotca" />
      <meta name="theme-color" content="#16b816" />
    </React.Fragment>
  ),
};
