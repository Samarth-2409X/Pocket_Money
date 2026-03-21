import { TransactionHistory } from "../Components/TransactionHistory";
import { Appbar } from "../Components/Appbar";

export const TransactionPage = () => {
    return (
        <div>
            <Appbar />
            <div className="m-8">
                <TransactionHistory />
            </div>
        </div>
    );
};
