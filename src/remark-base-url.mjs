import { visit } from 'unist-util-visit';

export function remarkBaseUrl({ base = '/' } = {}) {
  return function (tree) {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('/images/')) {
        node.url = `${base}${node.url.slice(1)}`;
      }
    });

    visit(tree, 'html', (node) => {
      if (node.value) {
        node.value = node.value.replace(/src="\/images\//g, `src="${base}images/`);
        node.value = node.value.replace(/src='\/images\//g, `src='${base}images/`);
      }
    });
  };
}
