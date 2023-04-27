import { MailCard } from "../components/MailCard";
import { useMails } from "../contexts/mail-context";

export const Spam = () => {
  const {
    inboxMails: { spamMails },
  } = useMails();
  return (
    <ul>
      {spamMails?.map((mail) => (
        <MailCard key={mail.mId} {...mail} spam />
      ))}
    </ul>
  );
};
