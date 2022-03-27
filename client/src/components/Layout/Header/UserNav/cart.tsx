const SVGCart = (props: any) => (
  <svg
    className="svg-cart"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 24 27"
    style={{
      enableBackground: "new 0 0 24 27",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path d="M0,6v21h24V6H0z M22,25H2V8h20V25z" />
    </g>
    <g>
      <path d="M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z" />
    </g>
  </svg>
);

export default SVGCart;
