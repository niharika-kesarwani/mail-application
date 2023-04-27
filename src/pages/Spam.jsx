import { MailCard } from "../components/MailCard";
import { useMails } from "../contexts/mail-context";

export const Spam = () => {
  const {
    inboxMails: { spamMails },
  } = useMails();
  return (
    <div>
      <h1>{spamMails.length > 0 ? "Spam Mails" : "No mail in spam!"}</h1>
      <ul>
        {spamMails?.map((mail) => (
          <MailCard key={mail.mId} {...mail} spam />
        ))}
      </ul>
    </div>
  );
};
