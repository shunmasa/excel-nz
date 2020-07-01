// import React from "react";
// import PropTypes from "prop-types";

// const imgWithClick = { cursor: "pointer" };

// const Gallery = ({ index, onClick, photo, margin, direction, top, left,position }) => {
//   const imgStyle = { margin: margin,position:position,left:left,top:top };
//   if (direction === "column") {
//     imgStyle.position = "absolute";
//     imgStyle.left = left;
//     imgStyle.top = top;
//   }

//   const handleClick = event => {
//     onClick(event, { photo, index });
//   };

//   return (
//     <img
//       style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
//       {...photo}
//       onClick={onClick ? handleClick : null}
//       alt="img"
//     />
//   );
// };

// export default Gallery;
