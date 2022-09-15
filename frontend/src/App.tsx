import { useEffect, useState } from 'react';
import './App.css';
import { GetTest } from './services/data';
import Dashboard from './components/Dashboard/Dashboard';
import { test } from './services/interfaces';



function App() {

	const [Test, setTest] = useState<test>();
	useEffect(() => {
		const x = async () => {
			const title: test = await GetTest();
			setTest(title);
		}
		x();
	}, []);


	return (
		<>
			<p>{Test?.title}</p>
			<Dashboard />
		</>
	)
}
export default App;
