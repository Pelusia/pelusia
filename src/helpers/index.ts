// Most commonly used helper functions
export function capitalise(str) {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function simpleFormatString(title: string, format: 'id' | 'headline' = 'id'): string {
  title = title.trim();
  if (typeof title !== 'string') return title;
  const dash = new RegExp('-', 'gm');
  const underscore = new RegExp('_', 'gm');
  const space = new RegExp(' ', 'gm');
  const quotes = new RegExp('"', 'gm');

  if (format.toLowerCase() === 'id') {
    if (space.test(title)) {
      title = title.replace(space, '-');
    }
    if (underscore.test(title)) {
      title = title.replace(underscore, '-');
    }
    if (quotes.test(title)) {
      title = title.replace(quotes, '');
    }
    return title.toLowerCase();
  } else if (format.toLowerCase() === 'headline') {
    if (dash.test(title)) {
      title = capitalise(title.replace(dash, '_'));
      return title;
    } else {
      console.log('Nothing to format!');
    }
  } else {
    console.error("Please provide a format argument, either 'id' or 'headline'");
  }
  return title;
}

// TODO: add html obfuscation
type EmbedHtmlAnchorOpts = { targetBlank: boolean; displayStr?: string };
export function embedHtmlAnchor(href: string, opts: EmbedHtmlAnchorOpts = { targetBlank: true }) {
  const targetStr = "target='_blank' rel='noreferrer noopener'";
  return `<a href='${href}' ${opts?.targetBlank && targetStr}>${opts.displayStr ? opts.displayStr : href}</a>`;
}

export function getVw() {
  if (typeof document !== 'undefined') {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  } else {
    return 0;
  }
}

export function getVh() {
  if (typeof document !== 'undefined') {
    return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  } else {
    return 0;
  }
}
