/* eslint-disable react/prop-types */
import { useMails } from "../contexts/mail-context";

export const MailCard = ({ mId, unread, isStarred, subject, content }) => {
  const { setInboxMails } = useMails();
  return (
    <>
      <li key={mId}>
        <h2>Subject: {subject}</h2>
        <button onClick={() => setInboxMails({ type: "STAR_UNSTAR", id: mId })}>
          {isStarred ? "Unstar" : "Star"}
        </button>
        <p>{content}</p>
        <button>Mark as {unread ? "Read" : "Unread"}</button>
      </li>
    </>
  );
};
