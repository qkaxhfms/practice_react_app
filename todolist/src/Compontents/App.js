import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import TodoContainer from './TodoContainer';
import Header from './Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoContainer>
        <Header />
      </TodoContainer>
    </>
  );
}

export default App;