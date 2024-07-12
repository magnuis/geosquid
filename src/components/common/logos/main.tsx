import { cn } from "../../../lib/utils";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const MainLogo = ({
  width = 212,
  height = 181,
  className,
  ...props
}: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 212 181"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M106 0C47.561 0 0 47.561 0 106s47.561 106 106 106 106-47.561 106-106S164.439 0 106 0zm0 10c14.143 0 27.714 2.799 40.268 7.864l-7.935 13.845c-5.164-2.091-10.705-3.205-16.333-3.205-28.936 0-52.55 23.615-52.55 52.551s23.614 52.55 52.55 52.55c5.628 0 11.169-1.114 16.333-3.204l7.935 13.845C133.714 143.201 120.143 146 106 146 58.946 146 20 107.054 20 60S58.946 10 106 10zm0 30c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 10c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 40c-2.21 0-4.157-.896-5.606-2.344L90.755 66.151c-1.45-1.45-2.344-3.396-2.344-5.606 0-4.418 3.582-8 8-8 2.21 0 4.157.896 5.606 2.344l9.639 9.639c1.448 1.45 2.344 3.396 2.344 5.606 0 4.418-3.582 8-8 8zm0 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm-30 20c0-2.21.896-4.157 2.344-5.606L72.343 97.755c1.45-1.448 3.396-2.344 5.606-2.344 4.418 0 8 3.582 8 8 0 2.21-.896 4.157-2.344 5.606l-9.639 9.639c-1.45 1.45-3.396 2.344-5.606 2.344-4.418 0-8-3.582-8-8zm70-30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-40 40c0-2.21.896-4.157 2.344-5.606L102.755 137.849c1.45-1.448 3.396-2.344 5.606-2.344 4.418 0 8 3.582 8 8 0 2.21-.896 4.157-2.344 5.606l-9.639 9.639c-1.45 1.448-3.396 2.344-5.606 2.344-4.418 0-8-3.582-8-8z"
      ></path>
    </svg>
  );
};

export default MainLogo;
