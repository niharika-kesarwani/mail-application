import { useParams } from "react-router";
import { useMails } from "../contexts/mail-context";
import { MailCard } from "./MailCard";

export const MailDetails = () => {
  const { mailId } = useParams();
  const {
    inboxMails: { allMails, trashMails, spamMails },
  } = useMails();

  const mainMail = allMails?.find(({ mId }) => mId === mailId);
  const trashMail = trashMails?.find(({ mId }) => mId === mailId);
  const spamMail = spamMails?.find(({ mId }) => mId === mailId);

  const selectedMail = mainMail ?? spamMail ?? trashMail;
  const selectedTag = trashMail ? "trash" : spamMail ? "spam" : null;

  return (
    <div className="routes">
      <ul>
        <MailCard
          key={selectedMail.mId}
          {...selectedMail}
          tag={selectedTag}
          details
        />
      </ul>
    </div>
  );
};
