import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import TodoContainer from './TodoContainer';
import Header from './Header';
import List from './List';
import Create from './Create';

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoContainer>
        <Header />
        <List />
        <Create />
      </TodoContainer>
    </>
  );
}

export default App;