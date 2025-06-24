import pathlib
import pytest


@pytest.mark.parametrize("html_path", list(pathlib.Path('.').glob('*.html')))
def test_html_has_root_tags(html_path):
    content = html_path.read_text(encoding='utf-8')
    assert '<html' in content.lower()
    assert '</html>' in content.lower()
