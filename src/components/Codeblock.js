import React from 'react';
import Prism from 'prismjs';
import '../prism.css';

const Codeblock = ({ form }) => {
  const { title, description, image } = form;
  React.useEffect(() => {
    Prism.highlightAll();
  }, [form]);

  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center bg-gray-200 p-4 rounded-sm">
        <h3 className="text-md text-gray-800 font-semibold">Code</h3>
      </div>
      <pre>
        <code className="language-html">
          {`
<!-- Replace YOUR_SITE_NAME with the Page/Website URL e.g https://example.com -->
<!-- HTML Meta Tags -->
<title>${title}</title>
<meta name="description" content="${description}">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="YOUR_SITE_NAME">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${image}">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="YOUR_SITE_NAME">
<meta property="twitter:url" content="YOUR_SITE_NAME">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
  `}
        </code>
      </pre>
    </div>
  );
};

export default Codeblock;
