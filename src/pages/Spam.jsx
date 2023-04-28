import { MailCard } from "../components/MailCard";
import { useMails } from "../contexts/mail-context";

export const Spam = () => {
  const {
    inboxMails: { spamMails },
  } = useMails();
  return (
    <div className="routes">
      <h1>{spamMails.length === 0 && "No mail in spam!"}</h1>
      <ul>
        {spamMails?.map((mail) => (
          <MailCard key={mail.mId} {...mail} spam />
        ))}
      </ul>
    </div>
  );
};
