import React from 'react';
import { NavLink } from 'react-router';
import { LinkProps } from './LinkProps';

export const Link: React.FC<LinkProps> = (props) => {
  const { label, route } = props;

  return <NavLink to={route}>{label}</NavLink>;
};
