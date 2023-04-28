import { useMails } from "../contexts/mail-context";
import { MailCard } from "../components/MailCard";

export const Trash = () => {
  const {
    inboxMails: { trashMails },
  } = useMails();
  return (
    <div className="routes">
      <h1>{trashMails.length === 0 && "No mail in trash!"}</h1>
      <ul>
        {trashMails?.map((mail) => (
          <MailCard key={mail.mId} {...mail} trash />
        ))}
      </ul>
    </div>
  );
};
