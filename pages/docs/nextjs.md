# Usage with Next.js

## SWR & Pre-rendering

If the page is being pre-rendered, Next.js supports [two forms of pre-rendering](https://nextjs.org/docs/basic-features/data-fetching):<br />
**Static Site Generation (SSG)** and **Server-side Rendering (SSR)**.

The following is an example of using SWR and Static Site Generation:

```jsx
import useSWR from "swr";

export async function getStaticProps() {
  const fetcher = (url) => fetch(url).then(res => res.json());

  const res = await fetcher('https://ac-api.vercel.app/api/');
  return {
    props: {
      res,
    },
  };
}

export default function Home(props) {
	const fetcher = (url) => fetch(url).then(res => res.json());

	const { data } = useSWR('https://ac-api.vercel.app/api/', fetcher, {
		initialData: props.res,
  });

  return ( ... );
}
```

## SWR & Client Side Data Fetching

If your page contains frequently updating data, and you don’t need to pre-render the data, SWR is a perfect fit and no special setup needed: just import `useSWR` and use the hook inside any components that use the data.

Here’s how it works:

- First, immediately show the page without data. You can show loading states for missing data.
- Then, fetch the data on the client side and display it when ready.

This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.

```jsx
import useSWR from "swr";

function Music() {
  const { data, error } = useSWR("https://ac-api.vercel.app/api/", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <audio src={data.music[0].weather[1].rain} controls />;
}
```

## Pre-rendering w/o SWR

To pre-render the page w/o SWR you can use the following as a template and example.

```jsx

export async function getStaticProps() {

	const res = await fetch("https://ac-api.vercel.app/api/").then((res) => res.json());
	return { props: { res } };
}

export default function Home(props) {

  return (
    ... <audio src={props.res.music[0].weather[1].rain} controls />
  )
}

```

## Client Side Data Fetching w/o SWR

Client Side Data Fetching w/o SWR you can import `useState` and `useEffect` which are both native react components which you can use to Data Fetch on the Client Side.
You can use the following as a template and example.

```jsx
import { useState, useEffect } from 'react';

export default function Home() {

  const [data, setData] = useState(null)

  useEffect(() => {
    setData(await fetch("https://ac-api.vercel.app/api/").then((res) => res.json()))
  }, [])

  return (
    ... <audio src={data.music[0].weather[1].rain} controls />
  )
}

```
