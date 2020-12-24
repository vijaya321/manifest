import React, { useContext } from 'react';

import QuestionHandler from './QuestionHandler';

import Store from '../store';

export default () => {
    const { store } = useContext(Store);

    return (
		<>
           <p>{store.response}</p> 
           {store.response && <QuestionHandler />}
        </>
	);
}