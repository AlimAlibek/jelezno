
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import {FavoritesProvider} from './store/favoritesContext'
import { ListProvider } from './store/listContext';

function App() {
  return (
    <div className="App">
      <ListProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </ListProvider>
    </div>
  );
}

export default App;
