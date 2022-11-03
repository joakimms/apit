import { serve } from "https://deno.land/std@0.160.0/http/server.ts";

const handleRequest = (request) => {
  return new Response("Meaning of life: 42");
};

serve(handleRequest, { port: 7777 });
