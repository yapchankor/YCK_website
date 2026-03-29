import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'enclosure'],
  }
});

async function run() {
  const feed = await parser.parseURL('https://yckpainclinic.substack.com/feed');
  const slugs = feed.items.map(item => {
    const slugMatch = item.link?.match(/\/p\/([a-zA-Z0-9-]+)/);
    return slugMatch ? slugMatch[1] : (item.guid || '').replace(/[^a-zA-Z0-9-]/g, '-');
  });
  console.log("Slugs available:", slugs);
}

run();
