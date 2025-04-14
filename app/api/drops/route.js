export async function POST(req) {
    const body = await req.json();
  
    console.log("DROP RECEIVED:", body);
  
    return new Response(JSON.stringify({
      message: "Drop received successfully!",
      data: body,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  