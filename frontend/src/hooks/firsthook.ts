import {useState} from 'react';
import {FetchState, title} from '../services/interfaces';
import axios from 'axios';
import { url } from '../services/data';

export function GetTheTitle() {
	const [fetchstate, setFetchState] = useState(FetchState.DEFAULT)
	const [title, setTitle] = useState<title>()

	const getTitle = async() => {
		try{
			setFetchState(FetchState.LOADING)
			const res = await axios.get(url)
			const resData = res.data as title;
			setTitle(resData);
			setFetchState(FetchState.SUCCESS);
		}catch (err) {

			setFetchState(FetchState.ERROR)

		}
	}
	return [title, fetchstate, getTitle] as const;
}
