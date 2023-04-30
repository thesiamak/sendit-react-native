import Svg, { SvgProps, Path } from "react-native-svg"
const BackArrowCurved = (props: SvgProps) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <Path
      fill="#fff"
      d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"
    />
  </Svg>
)
export default BackArrowCurved