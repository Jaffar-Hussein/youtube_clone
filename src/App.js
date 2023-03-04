import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Question1 from "./components/Question1";
function App() {
	return (
		<div className='h-screen w-screen bg-gray-900 space-y-20'>
			{/* <Navbar /> */}
			<div className='inline-flex items-center justify-center w-full'>
				<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
				<span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
					♥️♥️♥️♥️♥️
				</span>
			</div>
			<Question1 />
      <div className='inline-flex items-center justify-center w-full'>
				<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
				<span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
					♥️♥️♥️♥️♥️
				</span>
			</div>
		</div>
	);
}

export default App;
