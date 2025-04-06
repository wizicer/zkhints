// CodeBlock.tsx
import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  const highlighted = hljs.highlight(code, { language }).value;

  return (
    <pre className="bg-gray-800 rounded-md overflow-x-auto">
      <code
        className={`hljs language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </pre>
  );
};

export default CodeBlock;
