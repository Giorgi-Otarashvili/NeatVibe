import Svg, { Path } from "react-native-svg";

 const NeatVibeIcon = ({ color = "white", size, style }) => {
  return (
    <Svg 
      width={size} 
      height={size} 
      viewBox="0 0 72 72" 
      fill="none" 
      style={style}
    >
      {/* ყველა Path ელემენტი შენი SVG-დან */}
      <Path d="M 0 0 H 4.71616 V 72 H 0 V 0 Z" fill={color} />
      
      <Path d="M 67.2838 0 H 72 V 72 H 67.2838 V 0 Z" fill={color} />
      
      <Path d="M 26.7249 0 H 72 L 72 4.70588 H 26.7249 V 0 Z" fill={color} />
      
      <Path d="M 0 0 H 18.0786 V 4.70588 H 0 V 0 Z" fill={color} />
      
      <Path d="M 0 67.2941 H 72 L 72 72 H 0 V 67.2941 Z" fill={color} />
      
      <Path d="M 13.3624 53.9608 H 58.6376 V 58.6667 H 13.3624 V 53.9608 Z" fill={color} />
      
      <Path d="M 26.7249 40.6274 H 45.2751 V 45.3333 H 26.7249 V 40.6274 Z" fill={color} />
      
      <Path d="M 40.5589 13.3333 H 58.6375 V 18.0392 H 40.5589 V 13.3333 Z" fill={color} />
      
      <Path d="M 40.5589 13.3333 H 45.2751 L 45.2751 45.3333 L 40.5589 45.3333 V 13.3333 Z" fill={color} />
      
      <Path d="M 53.9214 13.3333 H 58.6375 L 58.6376 58.6667 H 53.9214 V 13.3333 Z" fill={color} />
      
      <Path d="M 26.7249 4.70588 L 31.441 4.70588 V 45.3333 L 26.7249 45.3333 V 4.70588 Z" fill={color} />
      
      <Path d="M 13.3624 0 H 18.0786 L 18.0786 58.6667 L 13.3624 58.6667 V 0 Z" fill={color} />
    </Svg>
  );
};

export default NeatVibeIcon;