type Props = {
  token: {
    logo: string;
    name: string;
  };
};

const SelectTokenBtn = (props: Props) => {
  const { token } = props;

  return (
    <button className="flex items-center text-white py-1 px-3 rounded-full border border-white/10 uppercase font-bold transition-all duration-300 text-md">
      <img
        src={token.logo}
        alt={token.name}
        className="size-6 mr-2 rounded-full"
      />
      {token.name}
    </button>
  );
};

export default SelectTokenBtn;
