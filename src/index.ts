async function handleRequest(_request: Request, _env: Bindings) {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
}

export default { fetch: handleRequest };
