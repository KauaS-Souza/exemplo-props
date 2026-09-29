import React from "react";
import { Card, GreetingText, Divider } from "../styles/BemVindoStyles";

export default function BemVindo(props){

    return(

        <Card>
            <GreetingText>
                Bem-vindo(a) <span>{props.nome} {props.nome}</span>
            </GreetingText>
            <Divider />
        </Card>
    )
}