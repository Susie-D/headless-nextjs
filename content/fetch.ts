export const contentGqlFetcher = async (
  query: string,
  variables = {},
  preview = false
) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENT}`,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const { data, errors } = await res.json();

  // do something
  if (errors) {
    console.log(errors);
    throw new Error('Could not get content.');
  } else return data;
};
