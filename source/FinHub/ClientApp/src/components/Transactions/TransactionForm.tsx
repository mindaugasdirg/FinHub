import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { compose } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { CategoriesApi } from "../../apis/CategoriesApi";
import { TransactionsApi } from "../../apis/TransactionsApi";
import { Category } from "../../common/types";
import { preventDefault, useFormField, useNumberFormField } from "../../common/utils";
import { RootState } from "../../store/reducers/reducer";
import { useFormStyle } from "../../theme/formStyles";
import { AlertsReducerActions } from "../../store/reducers/alerts/AlertsReducerActions";
import { AlertTypes } from "../../common/types";

const mapStateToProps = (state: RootState) => ({
    token: state.user.token!,
    activeGroup: state.groups.activeGroup!,
});

const mapDispatchToProps = {
    addAlert: AlertsReducerActions.addAlert,
};

const TransactionForm = (props: ConnectedProps<typeof connectedProps>) => {
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [categoryId, setCategoryId] = React.useState(0);
    const [amount, setAmount] = useNumberFormField(0);
    const [description, setDescription] = useFormField("");
    const classes = useFormStyle();

    React.useEffect(() => {
        CategoriesApi.getList(props.token, props.activeGroup.id).then(retrievedCategories => {
            if (typeof retrievedCategories === "string") {
                props.addAlert(AlertTypes.Error, retrievedCategories);
                return;
            }
            setCategories(retrievedCategories);
        });
    }, [props.token, props.activeGroup]);

    const onSubmit = () => {
        if (!amount || !description) return;
        TransactionsApi.create(props.token, props.activeGroup.id, { amount, description, categoryId }).then(retrievedCategories => {
            if (typeof retrievedCategories === "string") {
                props.addAlert(AlertTypes.Error, retrievedCategories);
                return;
            }
            props.addAlert(AlertTypes.Success, "Transaction created");
        });
    };

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategoryId(event.target.value as number);
    };

    return (
        <>
            <Typography variant="h3">
                Create Transaction
            </Typography>
            <form className={classes.form} onSubmit={compose(onSubmit, preventDefault)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="amount"
                    label="Amount"
                    required
                    type="number"
                    value={amount}
                    onChange={setAmount}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="description"
                    label="Description"
                    required
                    type="text"
                    value={description}
                    onChange={setDescription}
                />
                <FormControl fullWidth>
                    <Select value={categoryId} onChange={onChange}>
                        <MenuItem value={"0"} disabled>Categories</MenuItem>
                            {categories.map(category => <MenuItem key={category.id} value={String(category.id)}>{category.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button fullWidth type="submit" color="primary" variant="contained" className={classes.submit}>Create</Button>
            </form>
        </>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedTransactionForm = connectedProps(TransactionForm);
