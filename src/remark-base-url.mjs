import { visit } from 'unist-util-visit';

export function remarkBaseUrl() {
  const base = '/motorteh-catalog/';

  return function (tree) {
    // Rewrite image nodes (markdown ![alt](/images/...))
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('/images/')) {
        node.url = `${base}${node.url.slice(1)}`;
      }
    });

    // Rewrite raw HTML nodes (legacy content)
    visit(tree, 'html', (node) => {
      if (node.value) {
        node.value = node.value.replace(/src="\/images\//g, `src="${base}images/`);
        node.value = node.value.replace(/src='\/images\//g, `src='${base}images/`);
      }
    });
  };
}
