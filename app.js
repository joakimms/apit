import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  return new Response("Hello world!");
};

serve(handleRequest, { port: 7777 });