interface SVGIcon {
  className?: string | undefined;
  height?: string | undefined;
  width?: string | undefined;
  fill?: string | undefined;
  strokeWidth?: number | undefined;
}

export const IconBxDownload: React.FC<SVGIcon> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      className=""
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 16l4-5h-3V4h-2v7H8z" />
      <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
    </svg>
  );
};

export const IconBackburger: React.FC<SVGIcon> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      className=""
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M5 13l4 4-1.4 1.42L1.18 12 7.6 5.58 9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10z" />
    </svg>
  );
};

export const IconArrowGoBackFill: React.FC<SVGIcon> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      className=""
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 7v4L2 6l6-5v4h5a8 8 0 110 16H4v-2h9a6 6 0 100-12H8z" />
    </svg>
  );
};

export const IconFileDownload: React.FC<SVGIcon> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      className=""
      viewBox="0 0 21 21"
      fill="currentColor"
      strokeWidth={1.3}
      height="1em"
      width="1em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 3.5H6.498a2 2 0 00-2 2v10a2 2 0 002 2h8c1.104 0 2-.896 2-2l.002-8-4-4" />
        <path d="M13.5 10.586l-3 2.914-3-2.914M10.5 2.5v11" />
      </g>
    </svg>
  );
};
