"""Enforce the repository's single-stylesheet contract without dependencies."""
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.styles = []
        self.inline = []
        self.style_blocks = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link' and attrs.get('rel') == 'stylesheet':
            self.styles.append(attrs.get('href'))
        if 'style' in attrs:
            self.inline.append(tag)
        if tag == 'style':
            self.style_blocks += 1

pages = sorted(ROOT.glob('*.html'))
assert sorted(p.name for p in ROOT.glob('*.css')) == ['training.css'], 'Use one shared stylesheet'
assert '@import' not in (ROOT / 'training.css').read_text(), 'Do not hide additional stylesheets behind imports'
for path in pages:
    page = Page()
    page.feed(path.read_text())
    assert page.styles == ['training.css'], f'{path.name}: expected only training.css'
    assert not page.inline and not page.style_blocks, f'{path.name}: inline presentation found'
print(f'PASS: {len(pages)} pages use one shared stylesheet; no imports or inline presentation.')
