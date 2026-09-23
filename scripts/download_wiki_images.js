const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadWikiImage(title, filename) {
  try {
    const url = "https://en.wikipedia.org/w/api.php?action=query&titles=" + encodeURIComponent(title) + "&prop=pageimages&format=json&pithumbsize=1600";
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId === '-1' || !pages[pageId].thumbnail) {
      console.log('No image found for', title);
      return;
    }
    const imageUrl = pages[pageId].thumbnail.source;
    console.log('Downloading', imageUrl, 'to', filename);
    
    return new Promise((resolve, reject) => {
      https.get(imageUrl, (response) => {
        if (response.statusCode === 200) {
          const file = fs.createWriteStream(filename);
          response.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        } else {
          reject('Status: ' + response.statusCode);
        }
      }).on('error', reject);
    });
  } catch (err) {
    console.error(err);
  }
}

async function run() {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  await downloadWikiImage('Bauxite', path.join(dir, 'bauxite.jpg'));
  await downloadWikiImage('Iron_ore', path.join(dir, 'iron_ore.jpg'));
  await downloadWikiImage('Copper_extraction', path.join(dir, 'copper.jpg'));
  await downloadWikiImage('Ilmenite', path.join(dir, 'ilmenite.jpg'));
  await downloadWikiImage('Excavator', path.join(dir, 'excavator.jpg'));
}
run();
