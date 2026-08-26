import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL parameter required" });
  }

  // Only allow Chrono24 images
  if (!url.startsWith("https://img.chrono24.com/")) {
    return res.status(403).json({ error: "Invalid image source" });
  }

  try {
    const imageResponse = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "image/*",
        "Referer": "https://www.chrono24.com/",
      },
    });

    if (!imageResponse.ok) {
      return res.status(imageResponse.status).json({ 
        error: "Failed to fetch image",
        status: imageResponse.status 
      });
    }

    const contentType = imageResponse.headers.get("content-type");
    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }
    
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    const buffer = await imageResponse.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to proxy image" });
  }
}