// Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing Contexts
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

// Components
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

function App() {
  return (
    <BrowserRouter>
      <div className="ui container-fluid">
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route index element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="edit/:id" element={<EditContact />} />
            <Route path="delete/:id" element={<DeleteContact />} />
            <Route path="contact/:id" element={<ContactDetail />} />
            <Route
              path="*"
              element={
                <h3 className="ui center aligned header">404 Page Not Found</h3>
              }
            />
          </Routes>
        </ContactsCrudContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
