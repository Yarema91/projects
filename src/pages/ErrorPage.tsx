import React, { FC } from "react";
import classNames from "classnames";
import mainStyle from "../../styles/main.module.css";
import { Alert, Button } from "react-bootstrap";

const ErrorPage: FC = () => {
    const onReloadPage = () => window.location.reload();
    // const onReloadPage = () => alert ('click error')

    return (
        <div
        // className={classNames(mainStyle.content,
        //  style.errorMessage
        //  )}
        className=" container-fluid text-center align-items-flex-center"
        >
            {/* <h1>Error Page</h1> */}
            <Alert
            // className="align-items-flex-center"
            //   className={style.title} severity="error"
            >
                <Alert>
                    <strong>Oh-no! Something went wrong</strong>
                </Alert>
                You can refresh the page or try again later.
                <br />
                <Button
                    // className={style.btn}
                    variant="outlined"
                    //   color="error"
                    value="Reload Page" onClick={onReloadPage}>
                    Reload the page
                </Button>
            </Alert>
        </div>
    );
};

export default ErrorPage;