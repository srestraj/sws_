"use clinet";

interface ButtonPillsProps {
  btnName: string;
  hoverColor: string;
  ringColor: string;
  textColor: string;
  hoverTextColor: string;
}

const ButtonPills: React.FC<ButtonPillsProps> = ({
  btnName,
  hoverColor,
  ringColor,
  textColor,
  hoverTextColor,
}) => {
  return (
    <button
      className={`px-7 py-2 my-2 flex 
      justify-center items-center rounded-full 
      hover:shadow-2xl text-meroColor-platinum-10
      bg-meroColor-electric-indigo  hover:bg-transparent  
       hover:ring-2 ${hoverTextColor}
      ${hoverColor}`}
    >
      {btnName}
    </button>
  );
};

export default ButtonPills;
