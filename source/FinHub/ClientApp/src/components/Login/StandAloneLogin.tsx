import React from "react";
import { StandaloneForm } from "../common/StandaloneForm";
import { ConnectedLogin } from "./Login";

export const StandAloneLogin = () => (
    <StandaloneForm>
        <ConnectedLogin />
    </StandaloneForm>
);
