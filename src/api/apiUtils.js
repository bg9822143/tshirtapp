const port = 9000;
const base = `http://localhost:${port}`;

export const fetchVariants = () =>
  fetch(`${base}/variants`)
    .then(handleErrors)
    .then((res) => res.json());

export const fetchReplacementOptions = (id, value) =>
  fetch(`${base}/variant-option`, {
    headers: { id, value },
  })
    .then(handleErrors)
    .then((res) => res.json());

export const fetchVariantImages = (configurator) => {
  const request = new Request(`${base}/variant-images`, {
    method: "GET",
    headers: new Headers({ configurator: JSON.stringify(configurator) }),
    mode: "cors",
    cache: "default",
  });
  return fetch(request)
    .then(handleErrors)
    .then((r) => r.json());
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
