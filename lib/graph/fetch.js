async function fetchFromGraph({
  uri = `https://sports-api.stage-sumo.tv2.no/graphql`,
  query,
  variables,
}) {
  const body = JSON.stringify({ query, variables });

  const response = await fetch(uri, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export { fetchFromGraph };
