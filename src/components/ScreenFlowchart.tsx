declare global {
  interface Window {
    mermaid: {
      init: (config: undefined, nodes: NodeListOf<Element>) => void;
    };
  }
}
```[v0-no-op-code-block-prefix]

```javascript type="code" project="Una" file="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
  }
}

module.exports = nextConfig