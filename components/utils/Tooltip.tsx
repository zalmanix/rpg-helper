import React from "react";
import { Tooltip as AntTooltip, TooltipProps } from "antd";

export function Tooltip({ title, style, children }: TooltipProps) {
  return (
    <AntTooltip overlayInnerStyle={{ ...style }} title={title} placement="right" color={"#125e5e"}>
      {children}
    </AntTooltip>
  );
}
