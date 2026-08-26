export default function TestImagePage() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>
        Image Diagnostic Test
      </h1>
      
      <div style={{ marginBottom: "40px", padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
        <h2 style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "600" }}>Instructions:</h2>
        <ol style={{ lineHeight: "1.8" }}>
          <li>Open Browser DevTools (F12 or Right-click → Inspect)</li>
          <li>Go to the <strong>Network</strong> tab</li>
          <li>Filter by "Img" to see only image requests</li>
          <li>Look for the Chrono24 URL in the list</li>
          <li>Check the <strong>Status</strong> column (should be 200, 403, 404, etc.)</li>
          <li>Click on the request to see Headers and Preview</li>
        </ol>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "600" }}>
          Test 1: Plain HTML img tag (NO Next.js Image component)
        </h2>
        <div style={{ border: "2px solid #333", padding: "20px", background: "white" }}>
          <img
            src="https://img.chrono24.com/images/uhren/47341084-b7kqv3516nbhysbzz2vadno6-Zoom.jpg"
            alt="Test watch"
            style={{ 
              width: "400px", 
              height: "400px", 
              objectFit: "contain",
              display: "block",
              border: "1px solid red"
            }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            URL: https://img.chrono24.com/images/uhren/47341084-b7kqv3516nbhysbzz2vadno6-Zoom.jpg
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "600" }}>
          Test 2: Different Chrono24 URL
        </h2>
        <div style={{ border: "2px solid #333", padding: "20px", background: "white" }}>
          <img
            src="https://img.chrono24.com/images/uhren/640t90iyzzy4-v2xd8xz4fg9i089atga7matj-Zoom.jpg"
            alt="Test watch 2"
            style={{ 
              width: "400px", 
              height: "400px", 
              objectFit: "contain",
              display: "block",
              border: "1px solid blue"
            }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            URL: https://img.chrono24.com/images/uhren/640t90iyzzy4-v2xd8xz4fg9i089atga7matj-Zoom.jpg
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "600" }}>
          Test 3: Known Working Image (Unsplash)
        </h2>
        <div style={{ border: "2px solid #333", padding: "20px", background: "white" }}>
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400"
            alt="Test watch from Unsplash"
            style={{ 
              width: "400px", 
              height: "400px", 
              objectFit: "cover",
              display: "block",
              border: "1px solid green"
            }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            URL: https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400
          </p>
        </div>
      </div>

      <div style={{ padding: "20px", background: "#fff3cd", borderRadius: "8px" }}>
        <h3 style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "600" }}>
          What to report:
        </h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li><strong>Test 1 (Chrono24 URL 1):</strong> Do you see a watch? Or broken image icon?</li>
          <li><strong>Test 2 (Chrono24 URL 2):</strong> Do you see a watch? Or broken image icon?</li>
          <li><strong>Test 3 (Unsplash):</strong> Do you see a watch? (This should work)</li>
          <li><strong>Network Tab Status:</strong> For Chrono24 URLs - what HTTP status code? (200 = success, 403 = forbidden, 404 = not found)</li>
          <li><strong>Console Tab:</strong> Any error messages?</li>
        </ul>
      </div>
    </div>
  );
}