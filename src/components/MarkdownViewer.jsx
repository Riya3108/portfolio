import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownViewer() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/output.md') // if it's inside public folder
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
