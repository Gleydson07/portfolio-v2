import React from 'react';
import { TypographyStyle } from './styles';

interface TypographyProps {
  children: String,
  className: "title" | "subtitle" | "subtitle-medium" | "subtitle-small" | "text" | "paragraph" | "phrase" | "tag",
  htmlElement: "span" | "strong" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Typography: React.FC<TypographyProps> = ({
  htmlElement = "span",
  className = "text",
  children,
  ...props
}) => {
  const attr = {
    className,
    ...props
  }

  const textElement = React.createElement(`${htmlElement}`, attr, `${children}`);

  return (
    <>
      <TypographyStyle/>
      {textElement}
    </>
  );
}

export default Typography;