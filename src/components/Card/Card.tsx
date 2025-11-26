import React from 'react';
import * as styles from './Card.module.css';
import { CardProps } from './CardProps';

/**
 * Card component displays content within a styled container.
 *
 * The component renders a div with card styling that contains the text "Card"
 * followed by any children elements passed to it.
 *
 * @param   {CardProps}    props            - The component props
 * @param   {ReactNode}    [props.children] - OPTIONAL: Child elements to render inside the card
 * @returns {JSX.Element}                   The rendered card component
 */
export const Card: React.FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <div className={`card ${styles.card}`}>
      Card
      {children}
    </div>
  );
};
