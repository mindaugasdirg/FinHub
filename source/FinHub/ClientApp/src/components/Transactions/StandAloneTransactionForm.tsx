import React from "react";
import { StandaloneForm } from "../common/StandaloneForm";
import { ConnectedTransactionForm } from "./TransactionForm";

export const StandAloneTransactionForm = () => (
    <StandaloneForm>
        <ConnectedTransactionForm />
    </StandaloneForm>
);
