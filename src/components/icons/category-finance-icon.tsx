// File: category-team-icon.tsx
import React from "react";

interface CategoryFinanceIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Optional custom prop for setting the fill color
}

const CategoryFinanceIcon: React.FC<CategoryFinanceIconProps> = ({
  color = "currentColor",
}) => (
  <svg
  width="56"
  height="56"
  viewBox="0 0 56 56"
  fill={color}
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.51758 47.4831V44.9748L10.1509 43.3415V47.4831H8.51758ZM17.8509 47.4831V35.6415L19.4842 34.0081V47.4831H17.8509ZM27.1842 47.4831V34.0081L28.8176 35.6998V47.4831H27.1842ZM36.5176 47.4831V35.6998L38.1509 34.0665V47.4831H36.5176ZM45.8509 47.4831V26.3081L47.4842 24.6748V47.4831H45.8509ZM8.51758 33.2498V30.9748L23.3342 16.1581L32.6676 25.4915L47.4842 10.6748V12.9498L32.6676 27.7665L23.3342 18.4331L8.51758 33.2498Z"
    fill={color}
  />
</svg>
);

export default CategoryFinanceIcon;