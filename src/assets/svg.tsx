import { Icon } from '@chakra-ui/react';
import { HtmlHTMLAttributes, SVGProps } from 'react';

export const World = (props: any) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      fill="#5C6370"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10 19.5A9.6 9.6 0 0 1 .5 10a9.2 9.2 0 0 1 2.8-6.7A9.6 9.6 0 0 1 10 .5a9.2 9.2 0 0 1 6.7 2.8 9.7 9.7 0 0 1 2.8 6.7 9.2 9.2 0 0 1-2.8 6.7 9.7 9.7 0 0 1-6.7 2.8Zm0-1.5a12 12 0 0 0 2.2-4.3H7.9A13.1 13.1 0 0 0 10 18Zm-2-.3a11 11 0 0 1-1.7-4H3a8 8 0 0 0 2 2.6 7 7 0 0 0 3 1.4Zm4 0a7 7 0 0 0 3-1.4 8 8 0 0 0 2-2.6h-3.3a17 17 0 0 1-1.8 4Zm-9.7-5.5H6a12.6 12.6 0 0 1 0-4.4H2.3A6.9 6.9 0 0 0 2 10a8.3 8.3 0 0 0 .3 2.2Zm5.2 0h5a12.8 12.8 0 0 0 0-4.4h-5a12.8 12.8 0 0 0 0 4.4Zm6.5 0h3.7A6.9 6.9 0 0 0 18 10a8.3 8.3 0 0 0-.3-2.2H14a12.6 12.6 0 0 1 0 4.4Zm-.3-5.9H17c-.6-1-1.3-1.9-2.1-2.6a7.6 7.6 0 0 0-3-1.4 12.6 12.6 0 0 1 1.7 4Zm-5.8 0h4.3A12.7 12.7 0 0 0 10 2a12 12 0 0 0-2.2 4.3Zm-5 0h3.4a13.8 13.8 0 0 1 1.8-4 7.5 7.5 0 0 0-5.2 4Z" />
    </Icon>
  );
};

export const SocialFacebook = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      {...props}
    >
      <g clip-path="url(#SocialFacebook)">
        <path
          d="M27.8 0H5.4A4.8 4.8 0 0 0 .6 4.8v22.4A4.8 4.8 0 0 0 5.4 32h22.4a4.8 4.8 0 0 0 4.8-4.8V4.8A4.8 4.8 0 0 0 27.8 0Z"
          fill="#1877F2"
        />
        <path
          d="m22.83 20.63.7-4.63H19.1v-3c0-1.26.62-2.5 2.6-2.5h2.03V6.56s-1.84-.31-3.59-.31c-3.65 0-6.04 2.21-6.04 6.22V16h-4.06v4.63h4.06V32h5V20.62h3.73Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="SocialFacebook">
          <path fill="#fff" transform="translate(.6)" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SocialXClear = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#010101"
        d="m2.297 3 7.53 9.928L2.25 21h1.705l6.633-7.067L15.948 21h5.802l-7.953-10.486L20.85 3h-1.705l-6.108 6.509L8.1 3H2.297Zm2.508 1.239h2.666l11.771 15.522h-2.666L4.806 4.24Z"
      />
    </svg>
  );
};

export const SocialX = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      {...props}
    >
      <g clip-path="url(#social)">
        <mask
          id="b"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="33"
          height="32"
        >
          <path d="M32.8 0H.8v32h32V0Z" fill="#fff" />
        </mask>
        <g mask="url(#socialB)">
          <path
            d="M29.05 0H4.55A3.75 3.75 0 0 0 .8 3.75v24.5A3.75 3.75 0 0 0 4.55 32h24.5a3.75 3.75 0 0 0 3.75-3.75V3.75A3.75 3.75 0 0 0 29.05 0Z"
            fill="#000"
          />
          <path
            d="M23.04 6.25h3.31l-7.22 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H6.48l7.73-8.84L6.05 6.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.84L11.88 8.13H9.92l11.96 15.64Z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <clipPath id="social">
          <path fill="#fff" transform="translate(.8)" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SocialReddit = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clip-path="url(#Reddita)" {...props}>
        <path
          d="M27.2 0H4.8A4.8 4.8 0 0 0 0 4.8v22.4A4.8 4.8 0 0 0 4.8 32h22.4a4.8 4.8 0 0 0 4.8-4.8V4.8A4.8 4.8 0 0 0 27.2 0Z"
          fill="#F40"
        />
        <path
          d="M16 26.5c5.73 0 10.38-3.27 10.38-7.31 0-4.04-4.65-7.32-10.38-7.32S5.62 15.15 5.62 19.2c0 4.04 4.65 7.31 10.38 7.31Z"
          fill="#fff"
        />
        <path
          d="M6.63 18.63a2.63 2.63 0 1 0 0-5.26 2.63 2.63 0 0 0 0 5.26ZM25.44 18.63a2.63 2.63 0 1 0 0-5.26 2.63 2.63 0 0 0 0 5.26ZM23.44 9.13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill="#fff"
        />
        <path
          d="m16 12.25 1.44-6.31 4.56.93"
          stroke="#fff"
          stroke-width=".97"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.94 22.44c2.06 1.56 6.06 1.62 8.12 0"
          stroke="#F40"
          stroke-width=".79"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.94 19.88a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM20.06 19.88a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88Z"
          fill="#F40"
        />
      </g>
      <defs>
        <clipPath id="Reddita">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MimeViewClose = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16 28a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-13.7-3.4-3.4-1.7 1.7 3.4 3.4-3.4 3.4 1.7 1.7 3.4-3.4 3.4 3.4 1.7-1.7-3.4-3.4 3.4-3.4-1.7-1.7-3.4 3.4Z"
        fill="#868C98"
      />
    </svg>
  );
};

export const Download = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 489.7 489.7"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M244.9 0c-9.5 0-17.1 7.7-17.1 17.2v312.3l-77.6-77.6a17.2 17.2 0 0 0-24.3 0 17.2 17.2 0 0 0 0 24.3l106.9 106.9c3.2 3.2 7.6 5 12.1 5 4.6 0 8.9-1.8 12.1-5l106.9-107c6.7-6.7 6.7-17.6 0-24.3s-17.6-6.7-24.3 0L262 329.4V17.2c.1-9.5-7.6-17.2-17.1-17.2zM455.8 472.6c0-9.5-7.7-17.2-17.2-17.2H51.1c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.1 17.2 17.1h387.6c9.5.1 17.1-7.6 17.1-17.1z" />
    </svg>
  );
};

export const CopyLink = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      {...props}
    >
      <g clip-path="url(#CopyLink)">
        <path
          d="M16.2.06a15.94 15.94 0 1 1 0 31.88 15.94 15.94 0 0 1 0-31.88Z"
          fill="#53E261"
        />
        <path
          d="M11.97 25.27a4.8 4.8 0 0 1-3.4-1.4l-.24-.24a4.82 4.82 0 0 1 0-6.8l3.06-3.06a4.82 4.82 0 0 1 2.04-1.21 1 1 0 1 1 .56 1.9c-.45.14-.86.38-1.2.72l-3.05 3.05a2.8 2.8 0 0 0 0 4l.24.23a2.8 2.8 0 0 0 3.99 0l3.05-3.06a2.82 2.82 0 0 0 0-4l-.23-.22a1 1 0 1 1 1.4-1.41l.24.23a4.81 4.81 0 0 1 0 6.81l-3.05 3.05a4.8 4.8 0 0 1-3.4 1.41Z"
          fill="#E8E3F0"
        />
        <path
          d="M18.69 19.49a1 1 0 0 1-.28-1.96c.45-.13.86-.37 1.2-.7l3.05-3.06a2.8 2.8 0 0 0 0-4l-.24-.23a2.8 2.8 0 0 0-3.99 0l-3.05 3.06a2.82 2.82 0 0 0 0 4l.23.22a1 1 0 0 1-1.4 1.41l-.24-.23a4.81 4.81 0 0 1 0-6.81l3.05-3.05a4.82 4.82 0 0 1 6.81 0l.24.23a4.82 4.82 0 0 1 0 6.8L21 18.24c-.56.57-1.27.99-2.04 1.21a1 1 0 0 1-.28.05Z"
          fill="#FBF3F3"
        />
      </g>
      <defs>
        <clipPath id="CopyLink">
          <path fill="#fff" transform="translate(.2)" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Picture = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 83"
      {...props}
    >
      <g clipPath="url(#picture)">
        <path
          d="M81.7 41.8 35.1 14.9c-.8-.5-1.8-.2-2.2.6L11.1 53.1c-.5.8-.2 1.8.6 2.2l46.6 26.9c.8.5 1.8.2 2.2-.6L82.3 44c.4-.8.2-1.7-.6-2.2Z"
          fill="#DFE1E0"
        />
        <path
          d="m45.6 50.5 21.9-5.3L70 56.3l7.2-12.5-41.6-24-13 22.4 19.8-2.1 3.2 10.4Z"
          fill="#43B763"
        />
        <path
          d="m34.2 46 4.1-2.8-1.6 4.3 3.4-3.3.9 3.1.6-3 2.9 2.7-2.1-6.9-10.3 1.1 2.7.7-.6 4.1Zm26.3 6 4-2.4-.4 3.7 2.6-1.9 1.4 4.9 1.2-3.1-1.8-8L56 48l6.6.4-2.1 3.6Z"
          fill="#DFE1E0"
        />
        <path
          d="m69.3 53.2-1.2 3.1-1.4-4.9-2.6 1.9.4-3.7-4 2.4 2.1-3.6L56 48l-10.4 2.5-1.1-3.5-2.9-2.7-.6 3-.9-3.1-3.4 3.3 1.6-4.3-4.1 2.8.6-4.1-2.7-.7-9.5 1-3.6 6.3 41.6 24L70 56.3l-.7-3.1Z"
          fill="#5993CE"
        />
        <path
          d="M68.5 5.3 6.4.5c-1-.1-1.9.7-2 1.7L.5 52.4c-.1 1 .7 1.9 1.7 2l62.1 4.8c1 .1 1.9-.7 2-1.7l3.9-50.2c.1-1-.6-1.9-1.7-2Z"
          fill="#EFF4F5"
        />
        <path
          d="m35.2 32.4 20.2-16.5 8.1 10.4 1.3-16.6L9.4 5.4 7.1 35.3l19.6-12.2 8.5 9.3Z"
          fill="#5993CE"
        />
        <path
          d="m21 33.5 2.9-5.1.5 5.4 2-5.2 2.4 2.9-.9-3.5 4.4 1.3-5.6-6.2-10.2 6.4 3.1-.6 1.4 4.6Zm30.5-7 3-4.5 1.4 4.1 1.7-3.3 4 4.5-.3-3.9-5.9-7.5-10.6 8.7 7.1-2.8-.4 4.7Z"
          fill="#DFE1E0"
        />
        <path
          d="m61.3 23.4.3 3.9-4-4.5-1.7 3.3-1.4-4.1-3 4.5.4-4.7-7.1 2.8-9.6 7.8-2.9-3.1-4.4-1.3.9 3.5-2.4-2.9-2 5.2-.5-5.4-2.9 5.1-1.4-4.6-3.1.6-9.4 5.8-.7 8.3 55.5 4.3 1.6-21.6-2.2-2.9Z"
          fill="#505251"
        />
      </g>
      <defs>
        <clipPath id="picture">
          <path fill="#fff" d="M0 0h83v83H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SocialInstagram = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="url(#SocialInstagrama)"
        d="M17.18 8.08a2.06 2.06 0 0 0-.498-.764 2.058 2.058 0 0 0-.764-.497c-.234-.091-.586-.2-1.234-.228-.7-.032-.91-.04-2.685-.04h-.597c-1.24 0-1.476.01-2.09.037-.647.029-.999.137-1.233.228-.31.12-.531.265-.764.497a2.059 2.059 0 0 0-.497.765c-.091.234-.2.585-.228 1.234-.032.7-.039.91-.039 2.684 0 1.776.007 1.986.039 2.687.029.648.138 1 .228 1.234.12.31.265.531.497.764.233.233.454.377.764.497.234.091.586.2 1.234.23.7.032.91.039 2.686.039 1.774 0 1.985-.007 2.685-.039.648-.03 1-.137 1.234-.229.31-.12.532-.264.764-.497.233-.232.377-.452.497-.763.091-.234.2-.585.229-1.233.031-.701.038-.912.038-2.685 0-1.774-.007-1.985-.039-2.685-.029-.648-.138-1-.228-1.234V8.08Zm-5.181 7.334a3.413 3.413 0 1 1 0-6.826 3.413 3.413 0 0 1 0 6.826Zm3.546-6.163a.798.798 0 1 1 .001-1.596.798.798 0 0 1 0 1.596Z"
      />
      <path
        fill="url(#SocialInstagramb)"
        d="M17.18 8.08a2.06 2.06 0 0 0-.498-.764 2.058 2.058 0 0 0-.764-.497c-.234-.091-.586-.2-1.234-.228-.7-.032-.91-.04-2.685-.04h-.597c-1.24 0-1.476.01-2.09.037-.647.029-.999.137-1.233.228-.31.12-.531.265-.764.497a2.059 2.059 0 0 0-.497.765c-.091.234-.2.585-.228 1.234-.032.7-.039.91-.039 2.684 0 1.776.007 1.986.039 2.687.029.648.138 1 .228 1.234.12.31.265.531.497.764.233.233.454.377.764.497.234.091.586.2 1.234.23.7.032.91.039 2.686.039 1.774 0 1.985-.007 2.685-.039.648-.03 1-.137 1.234-.229.31-.12.532-.264.764-.497.233-.232.377-.452.497-.763.091-.234.2-.585.229-1.233.031-.701.038-.912.038-2.685 0-1.774-.007-1.985-.039-2.685-.029-.648-.138-1-.228-1.234V8.08Zm-5.181 7.334a3.413 3.413 0 1 1 0-6.826 3.413 3.413 0 0 1 0 6.826Zm3.546-6.163a.798.798 0 1 1 .001-1.596.798.798 0 0 1 0 1.596Z"
      />
      <path
        fill="url(#SocialInstagramc)"
        d="M11.999 14.216a2.215 2.215 0 1 0-.001-4.43 2.215 2.215 0 0 0 0 4.43Z"
      />
      <path
        fill="url(#SocialInstagramd)"
        d="M11.999 14.216a2.215 2.215 0 1 0-.001-4.43 2.215 2.215 0 0 0 0 4.43Z"
      />
      <path
        fill="url(#SocialInstagrame)"
        d="M20.983 6.9c-.056-.722-.18-1.208-.433-1.722a3.578 3.578 0 0 0-.771-1.055c-.595-.57-1.323-.915-2.192-1.04-.42-.06-.503-.079-2.655-.083h-2.93c-3.757 0-4.856.004-5.069.022-.771.064-1.251.186-1.773.446a3.57 3.57 0 0 0-1.034.757c-.572.593-.918 1.322-1.043 2.19-.06.42-.079.507-.083 2.656v2.925c0 3.756.004 4.854.022 5.067.062.75.18 1.223.43 1.74a3.792 3.792 0 0 0 2.457 2.007c.37.096.78.149 1.307.173.222.01 2.494.017 4.767.017 2.274 0 4.547-.003 4.764-.014.61-.029.964-.076 1.354-.177a3.769 3.769 0 0 0 2.457-2.012c.244-.504.369-.994.425-1.706.013-.155.017-2.628.017-5.097 0-2.47-.006-4.938-.018-5.093h.001Zm-2.38 7.841c-.033.708-.145 1.19-.308 1.613a3.26 3.26 0 0 1-.767 1.177c-.37.37-.74.597-1.177.767-.422.165-.907.277-1.614.31-.709.031-.934.04-2.74.04-1.805 0-2.03-.009-2.74-.04-.707-.033-1.19-.145-1.612-.31a3.259 3.259 0 0 1-1.177-.767c-.37-.37-.597-.74-.767-1.177-.165-.422-.276-.905-.309-1.613-.032-.709-.04-.935-.04-2.74 0-1.806.008-2.032.04-2.74.032-.708.144-1.192.309-1.614a3.26 3.26 0 0 1 .767-1.177c.37-.37.74-.597 1.177-.766.422-.164.905-.277 1.613-.308.708-.032.935-.04 2.738-.04h.003c1.803 0 2.03.008 2.738.04.707.031 1.19.144 1.614.308.438.17.807.396 1.177.766s.597.74.767 1.177c.163.422.275.906.309 1.613.031.71.04.936.04 2.74 0 1.805-.009 2.032-.04 2.741Z"
      />
      <path
        fill="url(#SocialInstagramf)"
        d="M20.983 6.9c-.056-.722-.18-1.208-.433-1.722a3.578 3.578 0 0 0-.771-1.055c-.595-.57-1.323-.915-2.192-1.04-.42-.06-.503-.079-2.655-.083h-2.93c-3.757 0-4.856.004-5.069.022-.771.064-1.251.186-1.773.446a3.57 3.57 0 0 0-1.034.757c-.572.593-.918 1.322-1.043 2.19-.06.42-.079.507-.083 2.656v2.925c0 3.756.004 4.854.022 5.067.062.75.18 1.223.43 1.74a3.792 3.792 0 0 0 2.457 2.007c.37.096.78.149 1.307.173.222.01 2.494.017 4.767.017 2.274 0 4.547-.003 4.764-.014.61-.029.964-.076 1.354-.177a3.769 3.769 0 0 0 2.457-2.012c.244-.504.369-.994.425-1.706.013-.155.017-2.628.017-5.097 0-2.47-.006-4.938-.018-5.093h.001Zm-2.38 7.841c-.033.708-.145 1.19-.308 1.613a3.26 3.26 0 0 1-.767 1.177c-.37.37-.74.597-1.177.767-.422.165-.907.277-1.614.31-.709.031-.934.04-2.74.04-1.805 0-2.03-.009-2.74-.04-.707-.033-1.19-.145-1.612-.31a3.259 3.259 0 0 1-1.177-.767c-.37-.37-.597-.74-.767-1.177-.165-.422-.276-.905-.309-1.613-.032-.709-.04-.935-.04-2.74 0-1.806.008-2.032.04-2.74.032-.708.144-1.192.309-1.614a3.26 3.26 0 0 1 .767-1.177c.37-.37.74-.597 1.177-.766.422-.164.905-.277 1.613-.308.708-.032.935-.04 2.738-.04h.003c1.803 0 2.03.008 2.738.04.707.031 1.19.144 1.614.308.438.17.807.396 1.177.766s.597.74.767 1.177c.163.422.275.906.309 1.613.031.71.04.936.04 2.74 0 1.805-.009 2.032-.04 2.741Z"
      />
      <defs>
        <radialGradient
          id="SocialInstagrama"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -17.8393 16.592 0 7.781 22.386)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD5" />
          <stop offset=".1" stopColor="#FD5" />
          <stop offset=".5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramb"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1.56512 7.81915 -32.23086 6.45148 -.015 4.298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3771C8" />
          <stop offset=".128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#60F" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramc"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -17.8393 16.592 0 7.781 22.386)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD5" />
          <stop offset=".1" stopColor="#FD5" />
          <stop offset=".5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramd"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1.56512 7.81915 -32.23086 6.45148 -.015 4.298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3771C8" />
          <stop offset=".128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#60F" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="SocialInstagrame"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -17.8393 16.592 0 7.781 22.386)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD5" />
          <stop offset=".1" stopColor="#FD5" />
          <stop offset=".5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramf"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1.56512 7.81915 -32.23086 6.45148 -.015 4.298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3771C8" />
          <stop offset=".128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#60F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const SocialTikTok = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        d="M20.1 3H3.9a.9.9 0 0 0-.9.9v16.2a.9.9 0 0 0 .9.9h16.2a.9.9 0 0 0 .9-.9V3.9a.9.9 0 0 0-.9-.9Zm-2.953 7.852a3.214 3.214 0 0 1-2.987-1.436v4.944a3.654 3.654 0 1 1-3.654-3.654c.076 0 .15.007.226.011v1.8a1.86 1.86 0 1 0-.226 3.708 1.91 1.91 0 0 0 1.944-1.84l.018-8.399h1.723a3.208 3.208 0 0 0 2.956 2.864v2.002Z"
      />
    </svg>
  );
};

export const ProfileUploadPlaceHolder = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 46 46"
      {...props}
    >
      <rect width="40" height="40" x="3" y="3" fill="#F2F4F7" rx="20" />
      <rect
        width="40"
        height="40"
        x="3"
        y="3"
        stroke="#F9FAFB"
        stroke-width="6"
        rx="20"
      />
      <g clip-path="url(#ProfileUploadPlaceHoldera)">
        <path
          stroke="#475467"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.667"
          d="M26.333 26.333 23 23m0 0-3.333 3.333M23 23v7.5m6.992-2.175A4.167 4.167 0 0 0 28 20.5h-1.05a6.666 6.666 0 1 0-11.45 6.083"
        />
      </g>
      <defs>
        <clipPath id="ProfileUploadPlaceHoldera">
          <path fill="#fff" d="M0 0h20v20H0z" transform="translate(13 13)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ProfilePlaceOlder = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <rect width="48" height="48" fill="#CAC2FF" rx="24" />
      <g filter="url(#ProfilePlaceOldera)">
        <g clip-path="url(#ProfilePlaceOlderb)">
          <rect width="48" height="48" fill="#CAC2FF" rx="24" />
          <g filter="url(#ProfilePlaceOlderc)" shape-rendering="crispEdges">
            <ellipse
              cx="24"
              cy="45.6"
              fill="url(#ProfilePlaceOlderd)"
              rx="19.2"
              ry="14.4"
            />
            <path
              stroke="url(#ProfilePlaceOldere)"
              d="M42.7 45.6c0 3.784-2.044 7.247-5.424 9.782C33.896 57.917 29.204 59.5 24 59.5c-5.204 0-9.896-1.583-13.277-4.118C7.343 52.847 5.3 49.384 5.3 45.6s2.044-7.248 5.423-9.782C14.104 33.283 18.797 31.7 24 31.7c5.204 0 9.897 1.583 13.276 4.118 3.38 2.535 5.424 5.998 5.424 9.782Z"
            />
          </g>
          <g filter="url(#ProfilePlaceOlderf)" shape-rendering="crispEdges">
            <circle cx="24" cy="19.2" r="9.6" fill="url(#ProfilePlaceOlderg)" />
            <circle
              cx="24"
              cy="19.2"
              r="9.1"
              stroke="url(#ProfilePlaceOlderh)"
            />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient
          id="ProfilePlaceOlderd"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 28.8 -38.4 0 24 31.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="ProfilePlaceOldere"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 28.8 -38.4 0 24 31.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="ProfilePlaceOlderg"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 19.2 -19.2 0 24 9.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="ProfilePlaceOlderh"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 19.2 -19.2 0 24 9.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter
          id="ProfilePlaceOldera"
          width="48"
          height="56"
          x="0"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.431292 0 0 0 0 0.248526 0 0 0 0 0.951474 0 0 0 0.24 0" />
          <feBlend in2="shape" result="effect1_innerShadow_108_64128" />
        </filter>
        <filter
          id="ProfilePlaceOlderc"
          width="46.4"
          height="44.8"
          x=".8"
          y="23.2"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.431292 0 0 0 0 0.248526 0 0 0 0 0.951474 0 0 0 0.24 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_108_64128"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_108_64128"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_108_64128" />
        </filter>
        <filter
          id="ProfilePlaceOlderf"
          width="27.2"
          height="35.2"
          x="10.4"
          y="1.6"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.431292 0 0 0 0 0.248526 0 0 0 0 0.951474 0 0 0 0.24 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_108_64128"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_108_64128"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_108_64128" />
        </filter>
        <clipPath id="ProfilePlaceOlderb">
          <rect width="48" height="48" fill="#fff" rx="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LogoWithConnect = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 44 47"
      {...props}
    >
      <rect width="40" height="40" fill="#6E3FF3" rx="13" />
      <path
        fill="#6E3FF3"
        d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Z"
      />
      <path
        fill="#fff"
        d="M10 16.95c-.543-2.593.525-5.285 3.27-5.86 2.078-.434 4.156.742 4.763 3.64.08.382.05.527-.285.637l-5.992 1.99c.554 1.318 1.853 2.1 3.683 1.718.935-.196 1.89-.674 2.397-1.1.156-.112.282-.079.371.062l.5.77c.116.174.125.313-.023.464-.518.566-1.758 1.203-2.901 1.443-2.899.607-5.189-.924-5.784-3.764Zm1.417-1.113 4.78-1.598c-.396-1.131-1.483-1.76-2.684-1.508-1.39.291-2.186 1.433-2.095 3.106h-.001Zm9.925 1.113c-.543-2.593.526-5.285 3.27-5.86 2.079-.434 4.156.742 4.763 3.64.08.382.05.527-.284.637l-5.992 1.99c.554 1.318 1.851 2.1 3.683 1.718.935-.196 1.889-.674 2.397-1.1.155-.112.282-.079.371.062l.5.77c.116.174.125.313-.023.464-.518.566-1.758 1.203-2.902 1.443-2.898.607-5.187-.924-5.783-3.764Zm1.417-1.113 4.78-1.598c-.394-1.131-1.48-1.76-2.682-1.508-1.392.291-2.188 1.433-2.096 3.106h-.002ZM20 28.996c-7.338 0-10.027-3.899-10.928-5.087a.47.47 0 0 1 .144-.692l.426-.242a.466.466 0 0 1 .601.12c.748.973 2.932 3.925 9.757 3.925 6.7 0 9.008-2.953 9.758-3.928a.466.466 0 0 1 .602-.119l.426.244a.468.468 0 0 1 .143.69c-.9 1.188-3.684 5.09-10.929 5.09Z"
      />
      <path
        fill="url(#a)"
        stroke="#fff"
        stroke-width=".605"
        d="M43.697 37.072c0 4.846-3.896 8.77-8.697 8.77-4.801 0-8.698-3.924-8.698-8.77 0-4.845 3.897-8.77 8.698-8.77s8.697 3.925 8.697 8.77Z"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M34.864 42.07a.379.379 0 0 0 .359-.003l1.784-.961c.506-.272.902-.576 1.21-.93a4.175 4.175 0 0 0 1.033-2.77l-.021-3.347a.911.911 0 0 0-.625-.854l-3.318-1.123a.937.937 0 0 0-.616.004l-3.306 1.162a.913.913 0 0 0-.614.863l.021 3.344a4.176 4.176 0 0 0 1.07 2.76c.312.348.711.648 1.223.915l1.8.94Zm-.472-3.934a.378.378 0 0 0 .268.106.379.379 0 0 0 .266-.11l1.95-1.938a.366.366 0 0 0-.003-.523.383.383 0 0 0-.534.003l-1.685 1.673-.69-.668a.383.383 0 0 0-.533.003.366.366 0 0 0 .003.524l.958.93Z"
        clip-rule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1="35"
          x2="35"
          y1="28"
          y2="46.145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E23F6" />
          <stop offset="1" stopColor="#4A09C0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SocialGoogle = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M10.15 8.64v2.9h4.12a3.46 3.46 0 0 1-1.54 2.26l2.49 1.89a7.26 7.26 0 0 0 2.28-5.52 8.4 8.4 0 0 0-.14-1.53h-7.2Zm-6.83-2a7.29 7.29 0 0 0 0 6.72l2.55-1.93A4.41 4.41 0 0 1 5.62 10c0-.5.1-.97.25-1.43L3.32 6.64Z"
        fill="#fff"
      />
      <path
        d="M10.15 5.49c1.13 0 2.13.38 2.93 1.11l2.2-2.14a7.43 7.43 0 0 0-5.13-1.96 7.66 7.66 0 0 0-6.83 4.14l2.55 1.94a4.56 4.56 0 0 1 4.28-3.1Zm-4.29 5.94-.56.42-1.98 1.51a7.67 7.67 0 0 0 6.83 4.14 7.4 7.4 0 0 0 5.07-1.81l-2.49-1.9c-.68.46-1.55.73-2.58.73a4.56 4.56 0 0 1-4.28-3.09Z"
        fill="#fff"
      />
    </svg>
  );
};

export const SocialApple = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.77 22.77"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M15.77 0h.16c.13 1.6-.48 2.8-1.23 3.67-.73.87-1.73 1.7-3.35 1.58-.1-1.59.5-2.7 1.25-3.56A5.4 5.4 0 0 1 15.77 0zM20.67 16.72v.04a13.25 13.25 0 0 1-1.9 3.66c-.72 1-1.6 2.33-3.19 2.33-1.36 0-2.27-.88-3.67-.9-1.48-.03-2.3.73-3.65.92h-.47c-1-.14-1.8-.93-2.38-1.64a14.39 14.39 0 0 1-3.3-8.27v-1.02c.1-2.49 1.3-4.5 2.9-5.48.85-.52 2.02-.96 3.31-.77.56.09 1.12.28 1.62.47.47.18 1.06.5 1.62.48.38 0 .75-.2 1.13-.34 1.12-.4 2.21-.87 3.66-.65a5.07 5.07 0 0 1 3.72 2.22 4.78 4.78 0 0 0-2.43 4.74 4.9 4.9 0 0 0 3.03 4.2z" />
    </svg>
  );
};

export const LogoSVG = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1547 347"
      {...props}
    >
      <path
        fill="#6E3FF3"
        d="M118.32 215.52h-6.56c-6.56 0-9.837-3.277-9.83-9.83v-78.34c0-34.74-12.79-51.12-34.09-51.12-25.89 0-41.63 18-41.63 59.32v69.37c0 6.56-3.273 9.837-9.82 9.83H9.83c-6.553 0-9.83-3.277-9.83-9.83V64.19c0-6.56 3.277-9.837 9.83-9.83h6.56c6.553 0 9.827 3.277 9.82 9.83V75.9c11.81-18.68 29.5-27.53 50.81-27.53 21 0 38 11.79 45.88 34.41 12.46-21 32.12-31.13 56.05-31.13 29.5 0 51.13 23.59 51.13 67.51v85.76c0 6.56-3.28 9.837-9.84 9.83h-6.55c-6.56 0-9.837-3.277-9.83-9.83v-74.29c0-34.74-12.78-51.13-34.09-51.13-25.89 0-41.62 18-41.62 59.33v66.86c0 6.547-3.277 9.823-9.83 9.83Zm138.09-66.319c-9.13-43.63 8.85-88.92 55-98.59 35-7.32 69.92 12.49 80.13 61.25 1.34 6.42.85 8.86-4.79 10.71L286 156.071c9.32 22.16 31.17 35.33 62 28.88 15.72-3.29 31.78-11.34 40.33-18.49 2.61-1.89 4.74-1.33 6.24 1l8.41 13c2 2.94 2.11 5.25-.38 7.78-8.72 9.53-29.58 20.26-48.83 24.29-48.77 10.22-87.35-15.55-97.36-63.33Zm23.88-18.73 80.42-26.88c-6.66-19-24.94-29.6-45.16-25.37-23.42 4.9-36.8 24.11-35.26 52.25Zm401.83 18.73c-9.14-43.63 8.84-88.92 55-98.59 35-7.32 69.92 12.49 80.13 61.25 1.34 6.42.85 8.86-4.79 10.71l-100.81 33.5c9.33 22.16 31.17 35.33 62 28.88 15.72-3.29 31.78-11.34 40.33-18.49 2.62-1.89 4.75-1.33 6.24 1l8.41 13c2 2.94 2.11 5.25-.38 7.78-8.72 9.53-29.58 20.26-48.82 24.29-48.76 10.22-87.31-15.55-97.31-63.33Zm23.88-18.73 80.43-26.88c-6.67-19-24.95-29.6-45.16-25.37-23.43 4.9-36.82 24.11-35.27 52.25ZM540.76 215.52h-6.56c-6.56 0-9.837-3.277-9.83-9.83v-78.34c0-34.74-12.79-51.12-34.09-51.12-25.89 0-41.63 18-41.63 59.32v70.14c0 6.547-3.273 9.823-9.82 9.83h-6.56c-6.547 0-9.823-3.277-9.83-9.83V64.19c0-6.56 3.277-9.837 9.83-9.83h6.56c6.547 0 9.82 3.277 9.82 9.83V75.9c11.81-18.68 29.5-27.53 50.81-27.53 21 0 38 11.79 45.88 34.41 12.46-21 32.12-31.13 56-31.13 29.5 0 51.13 23.59 51.13 67.51v86.53c0 6.547-3.28 9.823-9.84 9.83h-6.55c-6.56 0-9.837-3.277-9.83-9.83v-75.06c0-34.74-12.78-51.13-34.09-51.13-25.89 0-41.62 18-41.62 59.33v66.86c.033 6.547-3.227 9.823-9.78 9.83ZM902.93 48.37c14.09 0 35.73 4.91 45.89 11.47a5.37 5.37 0 0 1 2.29 7.21L943.9 81.8a5 5 0 0 1-6.55 2.62c-11.8-4.92-25.24-8.19-36.38-8.19-18.36 0-27.86 6.88-27.86 18.68 0 31.46 84.89 20.32 84.89 75.71 0 27.53-22 44.9-59.32 44.9-16.07 0-39.66-6.55-52.45-14.75a5.38 5.38 0 0 1-2.29-7.21l7.21-14.75c1.31-2.95 3.6-3.6 6.23-2.29 15.07 7.53 30.48 11.14 43.26 11.14 20.65 0 31.13-6.22 31.13-17 0-31.47-84.88-20.32-84.88-75.71 0-26.92 18.02-46.58 56.04-46.58Zm74.4 85.21c0-48.83 28.84-85.21 75.7-85.21s75.39 36.38 75.39 85.21c0 46.87-28.51 81.94-75.39 81.94-46.88 0-75.7-35.07-75.7-81.94Zm124.87 0c0-38.34-19-57.35-49.17-57.35s-49.48 18.68-49.48 57.35c0 36.38 19.34 54.08 49.48 54.08 30.14 0 49.17-17.68 49.17-54.08Zm122.23 54.08c16.39 0 34.42-4.59 44.91-10.16 2.62-1.31 4.91-.33 5.9 2.29l5.57 14.43a5.723 5.723 0 0 1-2 7.53c-10.82 7.87-34.41 13.77-54.73 13.77-45.56 0-75.38-31.47-75.38-80.3 0-50.47 29.82-83.57 75.38-83.57 19 0 41 6.22 51.45 13.76a5.75 5.75 0 0 1 2.47 3.38c.37 1.397.2 2.882-.47 4.16L1272 87.37a3.937 3.937 0 0 1-.87 1.601c-.41.458-.93.813-1.5 1.035a3.931 3.931 0 0 1-3.53-.346c-9.83-5.24-26.55-10.16-41.63-10.16-30.8 0-49.48 18.36-49.48 55.72.01 35.4 18.64 52.44 49.44 52.44Zm77.78-166.32a15.62 15.62 0 0 1 4.58-11.044c2.92-2.93 6.9-4.575 11.04-4.575 4.14 0 8.12 1.645 11.05 4.575a15.654 15.654 0 0 1 4.57 11.045c0 9.13-6.49 15.86-15.62 15.86-9.13 0-15.62-6.73-15.62-15.86Zm18.9 194.181h-6.55c-6.56 0-9.84-3.277-9.84-9.83V64.751c0-6.554 3.28-9.83 9.84-9.83h6.55c6.56 0 9.84 3.276 9.83 9.83v140.94c0 6.546-3.28 9.823-9.83 9.83Zm145.89 0c-4.27 0-6.56-2.3-6.56-6.56v-10.48c-10.82 10.49-27.53 17-45.56 17-2.19.063-4.38-.047-6.55-.33-30.16-2.62-50.48-24.58-50.48-53.09 0-26.88 16.07-50.15 57-50.15 14.75 0 31.47 2.62 45.56 8.52v-3c0-29.5-16.39-44.57-43.92-44.57-12.78 0-27.53 4.59-40.31 12.45-2.63 1.64-4.92.66-6.23-2l-4.92-9.84c-.65-1.63-1.64-3.27-2.29-4.91a5.572 5.572 0 0 1 2-7.21c13.43-9.18 34.08-16.39 57-16.39 40 0 64.9 23.92 64.9 71.12v92.9c0 4.26-2.29 6.56-6.56 6.56l-13.08-.02Zm-6.56-55.39v-13.77a131.604 131.604 0 0 0-43.92-8.19c-21.63 0-32.44 8.85-32.44 22.62 0 17 15.07 26.87 32.44 26.87 23.56 0 43.88-13.11 43.88-27.53h.04Zm75.98 55.389h-6.56c-6.55 0-9.83-3.277-9.83-9.83V9.83c0-6.56 3.28-9.837 9.83-9.83h6.56c6.55 0 9.82 3.277 9.83 9.83v195.86c0 6.547-3.28 9.823-9.83 9.83ZM539.79 346.211c-123.45 0-168.7-65.61-183.87-85.61a7.903 7.903 0 0 1-1.424-6.359 7.892 7.892 0 0 1 3.844-5.261l7.17-4.07a7.832 7.832 0 0 1 10.12 2c12.59 16.36 49.37 66.07 164.16 66.07 112.73 0 151.57-49.69 164.18-66.1a7.83 7.83 0 0 1 10.14-2l7.16 4.09a7.895 7.895 0 0 1 3.844 5.268 7.883 7.883 0 0 1-1.434 6.362c-15.15 19.96-61.99 85.61-183.89 85.61Z"
      />
    </svg>
  );
};

export const LogoFavicon = (props: any) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_200_1719)">
        <rect width="40" height="40" rx="13" fill="#6E3FF3" />
        <path d="M40 0H0V40H40V0Z" fill="#6E3FF3" />
        <path
          d="M9.9992 16.9498C9.45653 14.3568 10.5251 11.6651 13.2702 11.0904C15.3483 10.6565 17.4256 11.8323 18.033 14.7305C18.1129 15.1118 18.0837 15.2573 17.7481 15.3669L11.7559 17.3579C12.3104 18.6747 13.6087 19.4577 15.4392 19.0745C16.3738 18.8789 17.3281 18.4005 17.8363 17.9752C17.9917 17.8627 18.1184 17.8963 18.2072 18.0366L18.707 18.8077C18.8227 18.9813 18.8323 19.1199 18.6845 19.2706C18.1661 19.8367 16.9263 20.4742 15.7825 20.7137C12.8841 21.3209 10.5939 19.7904 9.9992 16.9498ZM11.4166 15.8367L16.1968 14.2388C15.8007 13.1077 14.7143 12.4794 13.5129 12.7308C12.1224 13.0224 11.3269 14.1641 11.4181 15.8367H11.4166Z"
          fill="white"
        />
        <path
          d="M21.342 16.9498C20.799 14.3568 21.8676 11.6651 24.6127 11.0904C26.6908 10.6565 28.7683 11.8323 29.3752 14.7305C29.4551 15.1118 29.4258 15.2573 29.0906 15.3669L23.0987 17.3579C23.6532 18.6747 24.95 19.4577 26.7819 19.0745C27.7166 18.8789 28.6709 18.4005 29.1791 17.9752C29.3344 17.8627 29.4611 17.8963 29.5499 18.0366L30.0498 18.8077C30.1655 18.9813 30.175 19.1199 30.0272 19.2706C29.5089 19.8367 28.2691 20.4742 27.1253 20.7137C24.2274 21.3209 21.9382 19.7904 21.342 16.9498ZM22.7594 15.8367L27.5395 14.2388C27.145 13.1077 26.0582 12.4789 24.8569 12.7308C23.4649 13.0224 22.6694 14.1641 22.7605 15.8367H22.7594Z"
          fill="white"
        />
        <path
          d="M20 28.9961C12.6625 28.9961 9.97315 25.0971 9.0715 23.9088C9.03114 23.8554 9.00268 23.7939 8.98804 23.7286C8.9734 23.6633 8.97291 23.5956 8.98661 23.5301C9.00031 23.4646 9.02789 23.4027 9.06748 23.3487C9.10707 23.2948 9.15775 23.2499 9.21613 23.2171L9.64222 22.9753C9.7399 22.9192 9.85462 22.9004 9.96511 22.9224C10.0756 22.9444 10.1743 23.0058 10.243 23.0951C10.9914 24.0676 13.1748 27.0204 20 27.0204C26.6998 27.0204 29.0081 24.0673 29.7576 23.0919C29.8266 23.0024 29.9258 22.941 30.0367 22.9192C30.1476 22.8973 30.2627 22.9166 30.3604 22.9733L30.786 23.2166C30.8441 23.2495 30.8945 23.2944 30.9339 23.3484C30.9733 23.4024 31.0006 23.4642 31.0142 23.5296C31.0277 23.5951 31.0272 23.6626 31.0125 23.7278C30.9978 23.793 30.9694 23.8543 30.9291 23.9076C30.0281 25.0951 27.2447 28.9961 20 28.9961Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_200_1719">
          <rect width="40" height="40" rx="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
