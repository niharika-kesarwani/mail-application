/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/mailsDB";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const handleInboxReducer = (inboxMails, { type, id }) => {
    switch (type) {
      case "SHOW_UNREAD":
        return { ...inboxMails, showUnread: !inboxMails.showUnread };
      case "SHOW_STARRED":
        return { ...inboxMails, showStarred: !inboxMails.showStarred };
      case "STAR_UNSTAR":
        return {
          ...inboxMails,
          allMails: inboxMails.allMails.map((mail) =>
            mail.mId === id ? { ...mail, isStarred: !mail.isStarred } : mail
          ),
        };
      default:
        return inboxMails;
    }
  };

  const [inboxMails, setInboxMails] = useReducer(handleInboxReducer, {
    allMails: mails,
    displayMails: mails,
    deletedMails: [],
    showUnread: false,
    showStarred: false,
  });

  const filterUnread = inboxMails.showUnread
    ? inboxMails.allMails.filter(({ unread }) => unread)
    : inboxMails.allMails;

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
