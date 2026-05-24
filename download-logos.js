const fs = require('fs');
const path = require('path');
const https = require('https');

const clients = [
  { short: 'HIPG', domain: 'hipg.lk' },
  { short: 'Brandix', domain: 'brandix.com' },
  { short: 'Asiri Hospital', domain: 'asirihealth.com' },
  { short: 'Orion City', domain: 'orioncity.com' },
  { short: 'Amaya Lake', domain: 'amayaresorts.com' },
  { short: 'Sierra', domain: 'sierracol.com' },
  { short: 'General Hospital', domain: 'health.gov.lk' },
  { short: 'Element', domain: 'fairwayholdings.com' },
  { short: 'Safari Resort', domain: 'nationalzoo.gov.lk' },
  { short: 'Wild Coast', domain: 'resplendentceylon.com' },
  { short: 'Ambassador', domain: 'ambassador-mirissa.com' },
  { short: 'Seacare', domain: 'seacare.lk' },
  { short: 'CIVIMECH', domain: 'civimech.lk' },
  { short: 'Prime Residence', domain: 'primegroup.lk' }
];

const downloadLogo = (domain, shortName) => {
  return new Promise((resolve) => {
    const url = `https://logo.clearbit.com/${domain}?size=200`;
    const filename = `${shortName.toLowerCase().replace(/\s+/g, '-')}.png`;
    const filepath = path.join(__dirname, 'public', 'images', 'clients', filename);

    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve({ short: shortName, logo: `/images/clients/${filename}` });
        });
      } else {
        console.log(`❌ Failed: ${filename} (Status: ${res.statusCode})`);
        resolve({ short: shortName, logo: null });
      }
    }).on('error', (err) => {
      console.log(`❌ Error fetching ${filename}: ${err.message}`);
      resolve({ short: shortName, logo: null });
    });
  });
};

async function run() {
  console.log('Downloading logos...');
  const results = [];
  for (const client of clients) {
    const result = await downloadLogo(client.domain, client.short);
    results.push(result);
  }
  fs.writeFileSync('logos-result.json', JSON.stringify(results, null, 2));
  console.log('Done.');
}

run();
