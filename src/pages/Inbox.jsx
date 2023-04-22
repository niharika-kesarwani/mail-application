import { useMails } from "../contexts/mail-context";

export const Inbox = () => {
  const { inboxMails } = useMails();
  return (
    <>
      <h1>Inbox Mails</h1>
      <h2>Filters:</h2>
      <label>
        <input type="checkbox" />
        Show unread mails
      </label>
      <label>
        <input type="checkbox" />
        Show starred mails
      </label>
      <h2>Unread: 0</h2>
      <ul>
        {inboxMails?.map(({ mId, unread, isStarred, subject, content }) => (
          <li key={mId}>
            <h2>Subject: {subject}</h2>
            <button>{isStarred ? "Unstar" : "Star"}</button>
            <p>{content}</p>
            <button>Mark as {unread ? "Read" : "Unread"}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
