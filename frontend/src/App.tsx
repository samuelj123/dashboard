import { useEffect } from 'react';
import './App.css';
import {GetTheTitle} from './hooks/firsthook';
import Dashboard from './components/Dashboard/Dashboard';
import {FetchState} from './services/interfaces';







function App() {
	const [Title, fetchState, getTitle] = GetTheTitle()
	
	useEffect(()=> {
		getTitle();
	},[]);


return (
<>
{fetchState === FetchState.DEFAULT &&(
	<>
		<Dashboard />
	</>
)}

{fetchState === FetchState.LOADING &&(
	<>
		<p>Loading...</p>
		<Dashboard />
	</>
)}
{fetchState === FetchState.ERROR &&(
	<>
		<p>Reload Page</p>
	</>
)}
{fetchState === FetchState.SUCCESS && Title &&(
	<>
		<p>{Title.title}</p>
		<Dashboard />

	</>
)}
</>
)
}
export default App;
