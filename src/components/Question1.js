import React, { Component } from "react";

export default class Question1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			total: this.state.todos.length,
			pending: 0,
		};
	}
	toggleHandler(name) {
        console.log(this.state.todos)

        const targetDo =  { name: name, status: true }
        this.setState({todos:[...this.state.todos,targetDo],pending:this.state.pending - 1});
        console.log(this.state.todos)
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.todo.value) {
			const todoObject = { name: e.target.todo.value, status: false };
			this.setState({
				todos: [todoObject, ...this.state.todos],
				total: (this.state.total += 1),
				// total: (this.state.pending += 1),

			});
		}

		// console.log(this.state.todos);
	};
	render() {
		return (
			<>
				<div className=''>
					<h2 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-center'>
						Todo List
					</h2>
					{/* Input eleemnt  */}
					<form
						className='flex justify-center mt-10'
						onSubmit={this.handleSubmit}
					>
						<div className='relative w-[40vw]'>
							<input
								type='text'
								name='todo'
								id='voice-search'
								// onChange={this.addTodo}
								className='placeholder:italic placeholder:text-emerald-600 bg-gray-800 border focus:border-emerald-500  border-gray-300 text-gray-200 text-lg rounded-lg focus:ring-gray-500 focus:border-grey-500 block w-full  p-2.0  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500'
								placeholder='Add to do'
							/>
						</div>
						<button
							type='submit'
							className='inline-flex items-center py-1.8 px-3 ml-2 text-sm font-medium text-white bg-grey-700 rounded-lg border focus:border-emerald-500 border-grey-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-grey-300 dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800 focus:shadow-none'
						>
							Add
						</button>
					</form>

					<div className='text-2xl text-center pt-5  text-emerald-600  '>
						{" "}
						<span className='text-sky-400'>{this.state.pending}</span> remaining
						out of <span className='text-sky-400'>{this.state.total}</span>
					</div>
					{/* List to be iterated over */}
					<div className='flex flex-col items-center '>
						<ul class='list-disc text-xl list-inside  odd:text-emerald-600 even:text-sky-400 p-5 space-y-2'>
							{this.state.todos.map((data) => (
								<li
									key={data.name}
									className='font-serif hover:text-red-600 hover:line-through flex items-center space-x-3'
									value={data.name}
                                    name={data.name}
									onClick={() => this.toggleHandler(data.name)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='flex-shrink-0 w-5 h-5 text-red-800'
									>
										<path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
									</svg>

									<span>{data.name}</span>
								</li>
							))}
						</ul>
					</div>
					<style>
						{`
                        .is-done {
                            text-decoration: line-through;
                        }
                        `}
					</style>
				</div>
			</>
		);
	}
}
