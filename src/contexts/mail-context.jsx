/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/mailsDB";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const handleInboxReducer = (inboxMails, { type }) => {
    switch (type) {
      case "SHOW_UNREAD":
        return { ...inboxMails, showUnread: !inboxMails.showUnread };
      case "SHOW_STARRED":
        return { ...inboxMails, showStarred: !inboxMails.showStarred };
      default:
        return inboxMails;
    }
  };

  const [inboxMails, setInboxMails] = useReducer(handleInboxReducer, {
    mails: mails,
    showUnread: false,
    showStarred: false,
  });

  const filterUnread = inboxMails.showUnread
    ? mails.filter(({ unread }) => unread)
    : mails;

  const filterStarred = inboxMails.showStarred
    ? filterUnread.filter(({ isStarred }) => isStarred)
    : filterUnread;

  return (
    <MailContext.Provider value={{ setInboxMails, filterStarred }}>
      {children}
    </MailContext.Provider>
  );
};

export const useMails = () => useContext(MailContext);
