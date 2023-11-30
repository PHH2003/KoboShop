
import createContact from './api/createContact.controller.js';
import getAllContact from './api/getAllContact.controller.js';
import searchContacts from './api/searchContact.controller.js';
import updateContact from './api/updateContact.controller.js';
import deleteContact from './api/deleteContact.controller.js';
import seenContact from './api/seenContact.controller.js';

const contactController = {
    createContact,
    getAllContact,
    searchContacts,
    updateContact,
    deleteContact,
    seenContact
}
export default contactController