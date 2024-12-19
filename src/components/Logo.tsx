type LogoProps = {
  size?: number | string;
  color?: string;         
};

function Logo(props: LogoProps) {
  const size = typeof props.size === "undefined" ? 80 : Number(props.size);
  const fill = props.color || '#0c171b';

  return (
    <>
      <svg
        height={size} 
        width={size} 
        version="1.1" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="-51.2 -51.2 614.40 614.40" 
        xmlSpace="preserve" 
        fill="#000000" 
        transform="rotate(0)" 
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0">
          <path 
            transform="translate(-51.2, -51.2), scale(38.4)" 
            fill={fill} 
            d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" 
            strokeWidth="0"
          ></path>
        </g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <circle style={{ fill: "#23648a" }} cx="256" cy="256" r="256"></circle> 
          <path style={{ opacity: 0.1 }} d="M512,256c0-14.08-1.184-27.883-3.371-41.349l-86.411-86.405L89.781,254.624 l76.704,42.917l11.643,72.304L313.68,505.397C427.269,479.227,512,377.541,512,256z"></path> 
          <polygon style={{ fill: "#D5D6DB" }} points="178.123,369.845 243.04,340.379 166.48,297.541 "></polygon> 
          <g> 
            <polygon style={{ fill: "#EBF0F3" }} points="422.219,128.245 89.781,254.624 166.48,297.541 166.48,297.541 "></polygon> 
            <polygon style={{ fill: "#EBF0F3" }} points="422.219,128.245 243.04,340.379 243.04,340.379 320.565,383.755 "></polygon> 
          </g> 
          <polygon style={{ fill: "#E1E6E9" }} points="422.219,128.245 166.48,297.541 166.48,297.541 243.04,340.379 243.04,340.379 "></polygon> 
        </g>
      </svg>
    </>
  );
}

export default Logo;
