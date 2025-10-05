import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

import { Gray, Yellow } from "@/constants/Colors";

type Props = SvgProps & {
  isFill?: boolean;
};

export function AddIcon(props: Props) {
  const { isFill } = props;
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 0C5.38338 0 0 5.38338 0 12C0 18.6166 5.38338 24 12 24C18.6166 24 24 18.6166 24 12C24 5.38338 18.6166 0 12 0ZM12 1.84615C17.6188 1.84615 22.1538 6.38123 22.1538 12C22.1538 17.6188 17.6188 22.1538 12 22.1538C6.38123 22.1538 1.84615 17.6188 1.84615 12C1.84615 6.38123 6.38123 1.84615 12 1.84615ZM11.0769 6.46154V11.0769H6.46154V12.9231H11.0769V17.5385H12.9231V12.9231H17.5385V11.0769H12.9231V6.46154H11.0769Z"
        fill={isFill ? Gray[700] : Gray[500]}
      />
      {isFill && (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1.84615C17.6188 1.84615 22.1538 6.38123 22.1538 12C22.1538 17.6188 17.6188 22.1538 12 22.1538C6.38123 22.1538 1.84615 17.6188 1.84615 12C1.84615 6.38123 6.38123 1.84615 12 1.84615ZM11.0769 11.0769V6.46154H12.9231V11.0769H17.5385V12.9231H12.9231V17.5385H11.0769V12.9231H6.46154V11.0769H11.0769Z"
          fill={isFill ? Yellow[700] : Gray[700]}
        />
      )}
    </Svg>
  );
}
