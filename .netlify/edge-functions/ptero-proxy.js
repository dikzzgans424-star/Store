export default async (request, context) => {
  try {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get("url");
    const apiKey = request.headers.get("Authorization");

    if (!targetUrl) {
      return new Response("Missing url parameter", { status: 400 });
    }

    // Mengambil data mentah (raw text) langsung dari panel
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Authorization": apiKey,
        "Accept": "application/json"
      }
    });

    const textData = await response.text();

    // Mengirim balik ke index.html dengan header JSON yang bersih
    return new Response(textData, {
      status: response.status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization, Content-Type"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const config = { path: "/get-database" };
