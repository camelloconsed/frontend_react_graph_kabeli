import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import PersistentDrawerLeft from './components/PersistentDrawerLeft.tsx';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
     <PersistentDrawerLeft/>
     
      </header>
    </div>
  );
}

export default App;


