import React from "react";
import { StandaloneForm } from "../common/StandaloneForm";
import { ConnectedSignUp } from "./SignUp";

export const StandAloneSignUp = () => (
    <StandaloneForm>
        <ConnectedSignUp />
    </StandaloneForm>
);
