import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestImagePage() {
  const [networkInfo, setNetworkInfo] = useState<string>("Loading...");
  
  const testUrl = "https://img.chrono24.com/images/uhren/640t90iyzzy4-v2xd8xz4fg9i089atga7matj-Zoom.jpg";

  useEffect(() => {
    // Test fetch to see response
    fetch(testUrl, { mode: 'no-cors' })
      .then(() => setNetworkInfo("Fetch completed (opaque response expected with no-cors)"))
      .catch(err => setNetworkInfo(`Fetch error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem", fontWeight: "bold" }}>
        Image Rendering Diagnostic Test
      </h1>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          Test URL:
        </h2>
        <p style={{ 
          fontFamily: "monospace", 
          fontSize: "0.875rem", 
          backgroundColor: "#f3f4f6", 
          padding: "0.5rem",
          wordBreak: "break-all"
        }}>
          {testUrl}
        </p>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          Test 1: Plain HTML &lt;img&gt; tag
        </h2>
        <p style={{ marginBottom: "1rem", color: "#666" }}>
          If this displays the watch, the URL is accessible and the issue is with Next.js Image component.
        </p>
        <div style={{ border: "2px solid #e5e7eb", padding: "1rem", backgroundColor: "#fff" }}>
          <img
            src={testUrl}
            alt="Test watch image - plain HTML img"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
              display: "block",
              border: "1px solid #ddd"
            }}
            onLoad={() => console.log("Plain img: LOADED")}
            onError={(e) => console.error("Plain img: ERROR", e)}
          />
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          Test 2: Next.js Image with unoptimized
        </h2>
        <p style={{ marginBottom: "1rem", color: "#666" }}>
          This is how product images are currently rendered on the site.
        </p>
        <div style={{ border: "2px solid #e5e7eb", padding: "1rem", backgroundColor: "#fff" }}>
          <div style={{ position: "relative", width: "400px", height: "400px", border: "1px solid #ddd" }}>
            <Image
              src={testUrl}
              alt="Test watch image - Next.js Image"
              fill
              unoptimized
              style={{ objectFit: "contain" }}
              onLoad={() => console.log("Next Image: LOADED")}
              onError={(e) => console.error("Next Image: ERROR", e)}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          Test 3: Next.js Image with width/height (unoptimized)
        </h2>
        <div style={{ border: "2px solid #e5e7eb", padding: "1rem", backgroundColor: "#fff" }}>
          <Image
            src={testUrl}
            alt="Test watch image - Next.js Image with dimensions"
            width={400}
            height={400}
            unoptimized
            style={{ objectFit: "contain" }}
            onLoad={() => console.log("Next Image (w/h): LOADED")}
            onError={(e) => console.error("Next Image (w/h): ERROR", e)}
          />
        </div>
      </div>

      <div style={{ marginBottom: "3rem", backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "0.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          Network Test Result:
        </h2>
        <p style={{ fontFamily: "monospace", fontSize: "0.875rem" }}>
          {networkInfo}
        </p>
      </div>

      <div style={{ backgroundColor: "#fef2f2", padding: "1rem", borderRadius: "0.5rem", border: "1px solid #fca5a5" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#991b1b" }}>
          Instructions for Diagnosis:
        </h2>
        <ol style={{ marginLeft: "1.5rem", color: "#7f1d1d" }}>
          <li style={{ marginBottom: "0.5rem" }}>Open browser DevTools (F12)</li>
          <li style={{ marginBottom: "0.5rem" }}>Go to Network tab, filter by "Img"</li>
          <li style={{ marginBottom: "0.5rem" }}>Refresh this page</li>
          <li style={{ marginBottom: "0.5rem" }}>Check which images load successfully (status 200)</li>
          <li style={{ marginBottom: "0.5rem" }}>Check which images fail (403, 404, or blocked)</li>
          <li style={{ marginBottom: "0.5rem" }}>In Console tab, look for any error messages</li>
          <li style={{ marginBottom: "0.5rem" }}>Report which test(s) show the actual watch image</li>
        </ol>
      </div>
    </div>
  );
}