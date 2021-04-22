import React from 'react';
import Main from './components/MainComponent';
import { State } from './state/State';
import { CONTENT } from './state/State';

export default function App() {
  return (
    <State.Provider value={CONTENT}>
      <Main />
    </State.Provider>
  );
}

