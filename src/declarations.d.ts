declare module '*.css';
declare module '*.scss';
declare module '*.sass';

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module "swiper/css/thumbs";

declare module '*.jsx' {
  import * as React from 'react';
  const component: React.FC<any>;
  export default component;
}