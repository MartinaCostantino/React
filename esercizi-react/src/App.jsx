import Form from "./components/Form"
import HookCounter from "./components/HookCounter"
import useGithubUser from "./useGithubUser";
import useCurrentLocation from "./useCurrentLocation";
import GitHubUser from "./components/GitHubUser";


function App() {
   const { location, error , loading, getLocation } = useCurrentLocation();
  

 return (
  <>
  <h2>Counter</h2>
  <HookCounter></HookCounter>
  <h2>Credenziali:</h2>
  <Form> </Form>
  <GitHubUser></GitHubUser>
  <h2>Get Current Location</h2>
      <button onClick={getLocation}>Ottieni posizione</button>
      {loading && <p>localizzazione in corso...</p>}
      {error && <p>{error}</p>}
      {location && (
        <p>
          Latitude: {location.latitudine}, Longitude: {location.longitudine}
        </p>
      )}
  
  </>
  )
}

export default App
