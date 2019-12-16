import React from "react";
import { StandaloneForm } from "../common/StandaloneForm";
import { ConnectedGroupForm } from "./GroupForm";

export const StandAloneGroupForm = () => (
    <StandaloneForm>
        <ConnectedGroupForm />
    </StandaloneForm>
);
