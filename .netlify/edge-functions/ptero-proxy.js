export default async (request, context) => {
  try {
    const url = new URL(request.url);
    // Ambil parameter target panel dari kiriman web
    const targetUrl = url.searchParams.get("url");
    const apiKey = request.headers.get("Authorization");

    if (!targetUrl) {
      return new Response("Missing url parameter", { status: 400 });
    }

    // Server Netlify diam-diam menembak panel Pterodactyl kamu
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Authorization": apiKey,
        "Accept": "application/json"
      }
    });

    const data = await response.text();

    // Kembalikan data ke browser dengan status lolos CORS 100%
    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization, Content-Type"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const config = { path: "/get-database" };
