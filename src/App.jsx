import './App.css'; // Import stylesheet for the app
import { puppyList } from './data.js'; // Import list of puppies from data file
import { useState } from 'react'; // Import useState hook for managing state

function App() {
  // State variables to manage puppy data and featured puppy
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Function to handle clicking on a puppy's name
  function handleClick(puppyId) {
    // Update the featured puppy ID using state setter
    setFeatPupId(puppyId);
  }

  // Find the featured puppy based on the current featured puppy ID
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {/* Render a list of puppies */}
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {/* Display puppy name and trick information */}
          {puppy.name} - {puppy.tricks.length > 0 ? `Knows ${puppy.tricks.length} trick(s)` : 'No tricks yet'}
        </p>
      ))}

      {/* Conditionally render featured puppy information */}
      {featPupId && (
        <div>
          <h2>{featuredPup?.name}</h2>
          <ul>
            <li>Age: {featuredPup?.age}</li>
            <li>Email: {featuredPup?.email}</li>
            <li>
              Tricks: {featuredPup?.tricks?.length ? featuredPup.tricks.map(trick => trick.title).join(', ') : 'No tricks yet'}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
