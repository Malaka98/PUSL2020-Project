import * as React from "react";
import {ConfirmDialog} from "./confirm-dialog/confirm-dialog";

const ConfirmationContext = React.createContext<(options: any) => Promise<void>>(Promise.reject);

export const useConfirmation = () =>
    React.useContext(ConfirmationContext);

export const ConfirmationProvider = ({children}: any) => {
    const [
        confirmationState,
        setConfirmationState
    ] = React.useState<any | null>(null);

    const awaitingPromiseRef = React.useRef<{
        resolve: () => void;
        reject: () => void;
    }>();

    const openConfirmation = (options: any) => {
        setConfirmationState(options);
        return new Promise<void>((resolve, reject) => {
            awaitingPromiseRef.current = {resolve, reject};
        });
    };

    const handleCancel = () => {
        if (confirmationState.catchOnCancel && awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject();
        }

        setConfirmationState(null);
    };

    const handleConfirm = () => {
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.resolve();
        }

        setConfirmationState(null);
    };

    return (
        <>
            <ConfirmationContext.Provider
                value={openConfirmation}>
                {children}
            </ConfirmationContext.Provider>

            <ConfirmDialog
                isOpen={Boolean(confirmationState)}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                {...confirmationState}
            />
        </>
    );
};
