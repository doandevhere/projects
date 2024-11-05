import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectTokenBtn from "./SelectTokenBtn";

type Props = {
  currentToken: {
    logo: string;
    name: string;
  };
  onSelectToken: (token: { logo: string; name: string }) => void;
};

const SelectTokenWithDialog = (props: Props) => {
  // TODO: use onSelectToken to set the current token
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentToken, onSelectToken } = props;

  return (
    <Dialog>
      <DialogTrigger>
        <SelectTokenBtn token={currentToken} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">Select a token</DialogTitle>
          <DialogDescription className="text-white">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SelectTokenWithDialog;
