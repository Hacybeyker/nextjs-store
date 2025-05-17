import { HTMLAttributes, createElement } from 'react';
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHtml = sanitize(children, {
    allowedTags: [
      'b',
      'i',
      'em',
      'strong',
      'ul',
      'ol',
      'li',
      'a',
      'img',
      'br',
      'hr',
      'blockquote',
      'code',
      'pre',
      'table',
      'thead',
      'tbody',
      'tfoot',
      'tr',
      'th',
      'td',
    ],
  });
  return createElement(tag, { ...rest }, sanitizedHtml);
};
