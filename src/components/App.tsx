import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Controls from "./Controls";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    );
}

export default App;
