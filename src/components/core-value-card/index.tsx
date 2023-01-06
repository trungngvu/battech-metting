interface Props {
  color: string;
  title: string;
  content: string;
}
const Card = ({ color, title, content }: Props) => {
  return (
    <div className="relative inline-block">
      <svg width="319" height="379" viewBox="0 0 319 379" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1710_4467)">
          <rect x="20" y="20" width="279" height="339" rx="22" fill="#F2F2F2" />
        </g>
        <path d="M79 0H248V56C248 64.2843 241.284 71 233 71H94C85.7157 71 79 64.2843 79 56V0Z" fill={color} />
        <path d="M204 359L127 359C127 351.82 132.82 346 140 346L191 346C198.18 346 204 351.82 204 359Z" fill={color} />
        <path d="M79 0L60 20H79V0Z" fill="#3E6293" />
        <path d="M248 0L264 20H248V0Z" fill="#3E6293" />
        <defs>
          <filter
            id="filter0_d_1710_4467"
            x="0"
            y="0"
            width="319"
            height="379"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1710_4467" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1710_4467" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 text-white font-bold w-[140px] h-[50px] text-center flex justify-center items-center">
        {title}
      </div>
      <div className="absolute top-10 p-10">{content}</div>
    </div>
  );
};

export default Card;
