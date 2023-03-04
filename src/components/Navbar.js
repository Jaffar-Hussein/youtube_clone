import React from "react";
function Navbar() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-12 w-screen h-14'>
			<div></div>
			{/* Search bar  */}
			<div className='col-span-8 col-start-3 m-auto'>
				<div>
					<div class='relative z-0 flex w-[36vw]'>
						<input
							type='text'
							id='example7'
							class='block w-full bg-transparent rounded-3xl rounded-r-none px-5 border-gray-600 focus:ring-gray-100
                             focus:border-gray-200 focus:z-10'
							placeholder='Search'
						/>
						<div class='inset-y-0 left-0 flex items-center rounded-3xl rounded-l-none border border-l-0 border-gray-600 bg-gray-500 px-2.5 text-gray-700 focus:ring-gray-100 focus:border-gray-20'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
