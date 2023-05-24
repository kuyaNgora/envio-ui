import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCloudDownload: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.846 10.8274C21.8673 10.8954 21.8886 10.9635 21.9028 11.0342C21.9648 11.3472 21.9998 11.6692 21.9998 12.0002C21.9998 12.3082 21.9638 12.6112 21.9078 12.9102C21.8954 12.9784 21.8787 13.0437 21.8621 13.1091C21.8545 13.1387 21.847 13.1683 21.8398 13.1982C21.7898 13.3972 21.7308 13.5922 21.6578 13.7832C21.6198 13.8822 21.5808 13.9792 21.5368 14.0752C21.4498 14.2652 21.3488 14.4472 21.2378 14.6262C21.2205 14.654 21.2041 14.6822 21.1877 14.7103C21.1604 14.7573 21.133 14.8042 21.1018 14.8492C21.0927 14.8622 21.0849 14.8757 21.0772 14.889C21.0689 14.9034 21.0607 14.9177 21.0508 14.9312C21.0431 14.9423 21.0323 14.9494 21.0217 14.9563C21.0131 14.962 21.0045 14.9676 20.9978 14.9752C20.0858 16.1972 18.6418 17.0002 16.9998 17.0002H16.9878C16.9638 16.5342 16.7868 16.0752 16.4388 15.7152C16.0648 15.3262 15.5398 15.1032 14.9998 15.1032C14.6438 15.1032 14.3008 15.1962 13.9998 15.3712V12.0002C13.9998 10.8972 13.1028 10.0002 11.9998 10.0002C10.8978 10.0002 9.99979 10.8972 9.99979 12.0002V15.2662C9.69879 15.0932 9.35679 15.0002 8.99979 15.0002C8.46579 15.0002 7.96379 15.2082 7.58579 15.5862C7.19579 15.9752 7.00079 16.4882 7.00079 17.0002H6.99979C5.35779 17.0002 3.91379 16.1972 3.00279 14.9752C2.99578 14.9678 2.98723 14.9623 2.97867 14.9567C2.96768 14.9496 2.95665 14.9425 2.94879 14.9312C2.93821 14.9168 2.92949 14.9014 2.92074 14.8859C2.91376 14.8736 2.90677 14.8612 2.89879 14.8492C2.86687 14.8033 2.83862 14.7553 2.81039 14.7073C2.7944 14.6802 2.77842 14.653 2.76179 14.6262C2.65179 14.4472 2.54979 14.2652 2.46279 14.0752C2.4202 13.9823 2.38324 13.8885 2.34554 13.7928L2.34179 13.7832C2.26979 13.5922 2.20979 13.3972 2.16079 13.1982C2.15446 13.1729 2.14792 13.1478 2.1414 13.1228C2.12318 13.0528 2.10504 12.9831 2.09179 12.9102C2.03679 12.6112 1.99979 12.3082 1.99979 12.0002C1.99979 11.6692 2.03579 11.3472 2.09679 11.0342C2.11136 10.9614 2.13356 10.8913 2.15576 10.8213C2.1686 10.7808 2.18143 10.7403 2.19279 10.6992C2.19697 10.6839 2.20113 10.6685 2.2053 10.6532C2.25297 10.4774 2.30065 10.3017 2.36779 10.1352C2.40401 10.0447 2.44848 9.95996 2.49308 9.87497C2.51252 9.83794 2.53197 9.80087 2.55079 9.76324C2.55719 9.75053 2.56356 9.73783 2.56993 9.72514C2.64021 9.5852 2.70943 9.44736 2.79379 9.31624C2.85756 9.21534 2.9298 9.12226 3.0021 9.0291C3.01936 9.00686 3.03663 8.98461 3.05379 8.96224L3.05733 8.95769C3.15413 8.83323 3.2501 8.70983 3.35779 8.59424C3.45426 8.4902 3.5579 8.39689 3.66276 8.30247C3.66877 8.29707 3.67478 8.29166 3.68079 8.28624C3.79879 8.18024 3.91879 8.07824 4.04679 7.98424C4.16579 7.89624 4.28779 7.81624 4.41479 7.74024C4.55479 7.65424 4.69779 7.57724 4.84579 7.50624C4.97579 7.44324 5.10579 7.38624 5.24179 7.33524C5.40379 7.27324 5.57079 7.22424 5.74079 7.18024C5.87579 7.14424 6.00779 7.10924 6.14779 7.08624C6.17421 7.0814 6.19986 7.07442 6.2255 7.06745C6.25808 7.05858 6.29065 7.04972 6.32479 7.04524C7.14579 4.66124 9.41979 3.00024 11.9998 3.00024C14.5808 3.00024 16.8548 4.66124 17.6748 7.04524C17.709 7.04973 17.7419 7.05862 17.7749 7.0675C17.8007 7.07446 17.8264 7.08141 17.8528 7.08624C17.9918 7.10924 18.1248 7.14424 18.2588 7.18024C18.4288 7.22424 18.5958 7.27324 18.7578 7.33524C18.8938 7.38624 19.0248 7.44324 19.1538 7.50624C19.3018 7.57724 19.4448 7.65424 19.5848 7.74024C19.7118 7.81624 19.8348 7.89624 19.9538 7.98424C20.0808 8.07824 20.2008 8.18024 20.3188 8.28624C20.4308 8.38624 20.5398 8.48424 20.6428 8.59424C20.7518 8.71124 20.8488 8.83624 20.9458 8.96224C20.9585 8.9786 20.9712 8.99489 20.9839 9.01117C21.0612 9.11034 21.1381 9.20887 21.2068 9.31624C21.2899 9.44684 21.3588 9.58411 21.4288 9.72348C21.4354 9.73672 21.4421 9.74997 21.4488 9.76324C21.4676 9.80087 21.4871 9.83794 21.5065 9.87497C21.5511 9.95996 21.5956 10.0447 21.6318 10.1352C21.7 10.3022 21.7479 10.4785 21.7957 10.6548C21.7997 10.6696 21.8038 10.6844 21.8078 10.6992C21.8193 10.7423 21.8326 10.7848 21.846 10.8274ZM13.0002 17.6438L14.3052 16.3838C14.7032 16.0008 15.3362 16.0118 15.7192 16.4088C16.1032 16.8068 16.0922 17.4398 15.6952 17.8228L12.6952 20.7198C12.5002 20.9058 12.2502 20.9998 12.0002 20.9998C11.7442 20.9998 11.4882 20.9028 11.2932 20.7068L8.29319 17.7068C7.90219 17.3168 7.90219 16.6838 8.29319 16.2928C8.68319 15.9028 9.31619 15.9028 9.70719 16.2928L11.0002 17.5858V11.9998C11.0002 11.4468 11.4482 10.9998 12.0002 10.9998C12.5522 10.9998 13.0002 11.4468 13.0002 11.9998V17.6438Z"
      fill={fill}
    />
  </svg>
);

IconCloudDownload.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudDownload;
