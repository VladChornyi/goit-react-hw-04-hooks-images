import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = () => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = query => {
    setQuery(query);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery query={query} />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
