import underline from "/projects/underline.svg";
const Text = ({ text }: { text: string }) => {
  return (
    <span className="text-primary relative">
      {text}
      <img src={underline} alt="underline" className="absolute right-0 pt-2" />
    </span>
  );
};

export default Text;
