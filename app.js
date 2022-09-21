import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
  title: "Hello world!",
};

const handleRequest = async (request) => {
  return new Response(await renderFile("index.eta", data), responseDetails);
};

serve(handleRequest, { port: 7777 });