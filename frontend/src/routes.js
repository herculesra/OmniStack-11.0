import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes(){
    return (
        <BrowserRouter>
        {/* o switch garante que apenas uma rota seja executada no momento */}
            <Switch>
                {/* exact evita que o '/' nao seja chamado quando acessado outra rota com '/' */}
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}