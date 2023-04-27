import { useMails } from "../contexts/mail-context";
import { MailCard } from "../components/MailCard";

export const Trash = () => {
  const {
    inboxMails: { deletedMails },
  } = useMails();
  return (
    <ul>
      {deletedMails?.map((mail) => (
        <MailCard key={mail.mId} {...mail} trash />
      ))}
    </ul>
  );
};
