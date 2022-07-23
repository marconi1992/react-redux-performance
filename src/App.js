import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhyReact from "./pages/why-react";
import Example1 from "./pages/example-1";
import Example2 from "./pages/example-2";
import Example3 from "./pages/example-3";
import Header from "./components/header";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<WhyReact />}/>
					<Route path="/example-1" element={<Example1 />}/>
					<Route path="/example-2" element={<Example2 />}/>
					<Route path="/example-3" element={<Example3 />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
