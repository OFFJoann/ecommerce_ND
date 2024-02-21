import React from "react";
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./inicio/Inicio";
import Products from "./products/Products";
import { NotFound } from "./NotFound/NotFound";

export const Page = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/producto" component={Products} />
            <Route path="/*" component={NotFound} />
        </Switch>
        </>
    )
}