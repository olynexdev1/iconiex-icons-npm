import React from 'react';
import { IconProps } from '../types';

const IxBox: React.FC<IconProps> = ({ className = '', style = {}, ...props }) => (
  <svg className={className} style={style}  xmlns="http://www.w3.org/2000/svg" color="currentColor" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
);

export default IxBox;