const fs = require('fs');
const path = require('path');
const https = require('https');

async function searchAndDownload(query, filename) {
  try {
    const searchUrl = "https://html.duckduckgo.com/html/?q=" + encodeURIComponent(query + " stock photo");
    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    // Extract thumbnail url
    const match = html.match(/src="\/\/external-content\.duckduckgo\.com\/iu\/\?u=([^"&]+)/);
    if (match && match[1]) {
      const imgUrl = decodeURIComponent(match[1]);
      console.log('Found image for', query, ':', imgUrl);
      
      return new Promise((resolve, reject) => {
        const req = imgUrl.startsWith('https') ? https : require('http');
        req.get(imgUrl, (response) => {
          if (response.statusCode === 200) {
            const file = fs.createWriteStream(filename);
            response.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
          } else if (response.statusCode === 301 || response.statusCode === 302) {
             console.log('Redirect to', response.headers.location);
             resolve();
          } else {
            console.log('Status', response.statusCode, 'for', imgUrl);
            resolve();
          }
        }).on('error', (e) => { console.error(e); resolve(); });
      });
    } else {
      console.log('No image found for', query);
    }
  } catch(e) {
    console.error(e);
  }
}

async function run() {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  await searchAndDownload('copper cathode plates stacked', path.join(dir, 'copper_cathode.jpg'));
  await searchAndDownload('iron ore hematite lumps', path.join(dir, 'iron_ore.jpg'));
  await searchAndDownload('bauxite ore red rock', path.join(dir, 'bauxite.jpg'));
  await searchAndDownload('ilmenite black mineral sand', path.join(dir, 'ilmenite.jpg'));
  await searchAndDownload('caterpillar 793 mining haul truck yellow', path.join(dir, 'haul_truck.jpg'));
}
run();
