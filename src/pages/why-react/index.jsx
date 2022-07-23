import { useEffect, useRef } from "react";
import init from "./example"

const WhyReact = () => {
	const isMountedRef = useRef(false);
    useEffect(() => {
		let interval
		if (!isMountedRef.current) {
			interval = init();
			isMountedRef.current = true;
		}

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="container-text mx-auto pt-6 pb-6">
            <section className="mb-6">
                <h1 className="text-4xl mb-3">Why React?</h1>
                <p className="text-lg">Apart from making UI development easier, React improves performance by mutating the DOM efficiently throughout a process called&nbsp;
                <a className="underline" href="https://reactjs.org/docs/reconciliation.html">"Reconciliation"</a>.</p>
                <img className="pt-6 pb-6" src="/reconciliation.png" alt="example component" />
            </section>
            <p className="text-lg mb-3">Example</p>
            <div id="dom" className="mb-4" />
            <div id="react" />
        </div>
    );
};

export default WhyReact; 