import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

type Props = SvgProps & {
  isFill?: boolean;
};

export function AddIcon(props: Props) {
  const { isFill } = props;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 0C4.48615 0 0 4.48615 0 10C0 15.5138 4.48615 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48615 15.5138 0 10 0ZM10 1.53846C14.6823 1.53846 18.4615 5.31769 18.4615 10C18.4615 14.6823 14.6823 18.4615 10 18.4615C5.31769 18.4615 1.53846 14.6823 1.53846 10C1.53846 5.31769 5.31769 1.53846 10 1.53846ZM9.23077 5.38462V9.23077H5.38462V10.7692H9.23077V14.6154H10.7692V10.7692H14.6154V9.23077H10.7692V5.38462H9.23077Z"
        fill={isFill ? "#777777" : "#999999"}
      />
      {isFill && (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1.53846C14.6823 1.53846 18.4615 5.31769 18.4615 10C18.4615 14.6823 14.6823 18.4615 10 18.4615C5.31769 18.4615 1.53846 14.6823 1.53846 10C1.53846 5.31769 5.31769 1.53846 10 1.53846ZM9.23077 9.23077V5.38462H10.7692V9.23077H14.6154V10.7692H10.7692V14.6154H9.23077V10.7692H5.38462V9.23077H9.23077Z"
          fill={isFill ? "#FFD497" : "#777777"}
        />
      )}
    </Svg>
  );
}
