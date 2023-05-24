import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSetting2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.375 20H12.626V19.233C12.626 18.298 13.201 17.458 14.09 17.091C15.01 16.708 16.015 16.896 16.677 17.562L17.216 18.103L18.104 17.215L17.559 16.671C16.896 16.009 16.709 15.005 17.082 14.114C17.082 14.114 17.083 14.113 17.083 14.112L17.094 14.084C17.458 13.201 18.299 12.625 19.234 12.625H20V11.375H19.234C18.299 11.375 17.458 10.8 17.092 9.911C16.707 8.991 16.896 7.986 17.562 7.323L18.103 6.784L17.216 5.897L16.671 6.442C16.009 7.104 15.006 7.291 14.115 6.919C13.202 6.542 12.626 5.702 12.626 4.767V4H11.375V4.767C11.375 5.702 10.8 6.542 9.911 6.909C8.992 7.294 7.987 7.105 7.324 6.438L6.785 5.897L5.897 6.785L6.442 7.329C7.104 7.991 7.292 8.995 6.919 9.886C6.543 10.799 5.702 11.375 4.767 11.375H4V12.625H4.767C5.702 12.625 6.543 13.2 6.909 14.089C7.294 15.009 7.105 16.014 6.439 16.677L5.898 17.216L6.785 18.103L7.33 17.558C7.992 16.896 8.995 16.709 9.886 17.081C10.799 17.458 11.375 18.298 11.375 19.233V20ZM12.943 22H11.051C10.127 22 9.375 21.248 9.375 20.324V19.233C9.375 19.086 9.258 18.985 9.148 18.94C9.004 18.881 8.85 18.869 8.744 18.972L7.974 19.743C7.318 20.397 6.252 20.399 5.597 19.743L4.257 18.403C3.939 18.085 3.765 17.663 3.765 17.213C3.766 16.764 3.941 16.342 4.26 16.024L5.028 15.259C5.133 15.154 5.122 15 5.075 14.889C5.015 14.742 4.915 14.625 4.767 14.625H3.683C2.755 14.625 2 13.871 2 12.943V11.051C2 10.126 2.752 9.375 3.677 9.375H4.767C4.914 9.375 5.015 9.257 5.06 9.147C5.12 9.003 5.132 8.848 5.028 8.744L4.257 7.974C3.603 7.317 3.603 6.251 4.257 5.597L5.597 4.257C5.915 3.939 6.336 3.765 6.785 3.765H6.787C7.236 3.765 7.659 3.94 7.976 4.259L8.741 5.028C8.846 5.134 9.001 5.122 9.112 5.075C9.258 5.014 9.375 4.914 9.375 4.767V3.683C9.375 2.755 10.13 2 11.058 2H12.95C13.874 2 14.626 2.752 14.626 3.676V4.767C14.626 4.914 14.743 5.015 14.853 5.06C14.998 5.12 15.152 5.133 15.257 5.028L16.027 4.257C16.683 3.603 17.749 3.601 18.404 4.257L19.745 5.598C20.063 5.915 20.237 6.337 20.236 6.787C20.236 7.235 20.061 7.658 19.742 7.975L18.973 8.741C18.868 8.846 18.879 9 18.926 9.111C18.986 9.258 19.086 9.375 19.234 9.375H20.318C21.246 9.375 22 10.129 22 11.057V12.949C22 13.874 21.249 14.625 20.324 14.625H19.234C19.087 14.625 18.986 14.743 18.941 14.853C18.94 14.854 18.928 14.884 18.927 14.886C18.881 14.997 18.869 15.152 18.973 15.256L19.744 16.026C20.398 16.683 20.398 17.749 19.744 18.403L18.404 19.743C18.086 20.061 17.665 20.235 17.216 20.235H17.214C16.765 20.235 16.342 20.06 16.025 19.741L15.26 18.972C15.155 18.867 14.999 18.879 14.889 18.925C14.743 18.986 14.626 19.086 14.626 19.233V20.317C14.626 21.245 13.871 22 12.943 22ZM12.0005 10.5C11.1735 10.5 10.5005 11.173 10.5005 12C10.5005 12.827 11.1735 13.5 12.0005 13.5C12.8275 13.5 13.5005 12.827 13.5005 12C13.5005 11.173 12.8275 10.5 12.0005 10.5ZM12.0005 15.5C10.0705 15.5 8.5005 13.93 8.5005 12C8.5005 10.07 10.0705 8.5 12.0005 8.5C13.9305 8.5 15.5005 10.07 15.5005 12C15.5005 13.93 13.9305 15.5 12.0005 15.5Z"
      fill={fill}
    />
  </svg>
);

IconSetting2.defaultProps = {
  ...iconDefaultProps,
};

export default IconSetting2;
