import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<HashRouter>
				<App />
			</HashRouter>
		</ThemeProvider>
	</Provider>
);
