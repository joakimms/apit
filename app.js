import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

let count = 0;

const handleRequest = (request) => {
  count++;
  const content = `<html><head></head><body><h1>${count}</h1></body></html>`;

  return new Response(content, responseDetails);
};

serve(handleRequest, { port: 7777 });