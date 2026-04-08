import { visit } from 'unist-util-visit';

export function remarkBaseUrl() {
  const base = '/motorteh-catalog/';

  return function (tree) {
    visit(tree, 'html', (node) => {
      if (node.value) {
        node.value = node.value.replace(/src="\/images\//g, `src="${base}images/`);
        node.value = node.value.replace(/src='\/images\//g, `src='${base}images/`);
      }
    });
  };
}
