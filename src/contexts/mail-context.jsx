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
          allMails: inboxMails.allMails?.map((mail) =>
            mail.mId === id ? { ...mail, isStarred: !mail.isStarred } : mail
          ),
        };
      case "DELETE":
        return {
          ...inboxMails,
          deletedMails: [
            inboxMails.allMails?.find(({ mId }) => mId === id),
            ...inboxMails.deletedMails,
          ],
          allMails: inboxMails.allMails?.filter(({ mId }) => mId !== id),
        };
      default:
        return inboxMails;
    }
  };

  const [inboxMails, setInboxMails] = useReducer(handleInboxReducer, {
    allMails: mails,
    deletedMails: [],
    showUnread: false,
    showStarred: false,
  });

  const filterUnread = inboxMails.showUnread
    ? inboxMails.allMails?.filter(({ unread }) => unread)
    : inboxMails.allMails;

  const filterStarred = inboxMails.showStarred
    ? filterUnread?.filter(({ isStarred }) => isStarred)
    : filterUnread;

  const countOfUnread = filterStarred?.filter(({ unread }) => unread).length;

  return (
    <MailContext.Provider
      value={{ inboxMails, setInboxMails, filterStarred, countOfUnread }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMails = () => useContext(MailContext);
