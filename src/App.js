import './App.css';
import NavBar from './Navigation';
import SearchBar from './Search';
import RecipeDisplay from './RecipeDisplay';
import SubmissionForm from './Form';

function App() {
  
  return (
    <div>
      <h1 id="page_title">Migle's Bakery</h1>
      <NavBar/>
      <SearchBar/>
      <RecipeDisplay/>
      <SubmissionForm/>
    </div> 
  );
  
};

export default App;
