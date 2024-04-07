import { DOMNode, Element } from 'html-react-parser';

export const isDomElement = (domNode: DOMNode): domNode is Element => {
  const isTag = ['tag', 'script'].includes(domNode.type);
  const hasAttributes = (domNode as Element).attribs !== undefined;

  return isTag && hasAttributes;
};
