import { useState, useCallback } from "react";
import Button from "../../components/MemoizedButton";

const Example1 = () => {
    const [message, setMessage] = useState("");

	const updateMessage = useCallback(() => setMessage("Hello React"), []);

    return (
        <div className="container-text mx-auto pt-6">
            <p className="mb-2">{message}</p>
            <Button onClick={updateMessage}>Click here</Button>
        </div>
    )
}

export default Example1;