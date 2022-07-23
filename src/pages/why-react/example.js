import { createRoot } from 'react-dom/client';

const renderDOM = () => {
    const div = document.createElement("div");
    div.className = "font-medium max-w-sm rounded overflow-hidden border p-2";

    const pre = document.createElement("pre");
    pre.innerText = (new Date()).toLocaleTimeString();

    div.append(
        "Rendering with DOM API",
        pre
    )

    document.getElementById("dom").replaceChildren(
        div
    )
}

let root;

const renderReact = () => {
    root.render(
        <div className="font-medium max-w-sm rounded overflow-hidden border p-2">
            Rendering timer with React
            <pre>{(new Date()).toLocaleTimeString()}</pre>
        </div>
    )
}

const renderBoth = () => {
    renderDOM()
    renderReact();
}

const init = () => {
	root = createRoot(document.getElementById("react"));
    renderBoth();
    return setInterval(() => {
        renderBoth();
    }, 1000)
}

export default init