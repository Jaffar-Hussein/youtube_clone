import { Component } from "react";

export default class Question1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: '',
          total: 0,
          pending: 0,
        };
      }
    //   addTodo = () => {

    //   }
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({todos:e.target.todo.value});
      };
	render() {
		return (
			<>
				<div className=''>
					<h2 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-center'>Todo List</h2>
					{/* Input eleemnt  */}

					{/* <form className='flex justify-center mt-10' onSubmit={this.handleSubmit}> */}
					<form className='flex justify-center mt-10' onSubmit={this.handleSubmit}>

						<div className='relative w-[40vw]'>
							<input
								type='text'
                                name='todo'
								id='voice-search'
                                // onChange={this.addTodo}
								className='bg-gray-800 border focus:border-emerald-500  border-gray-300 text-gray-200 text-lg rounded-lg focus:ring-gray-500 focus:border-grey-500 block w-full  p-2.0  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500'
								placeholder='Add to do'
							/>
						</div>
						<button
							type='submit'
							className='inline-flex items-center py-1.8 px-3 ml-2 text-sm font-medium text-white bg-grey-700 rounded-lg border border-grey-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-grey-300 dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800 focus:shadow-none'
						>
							Add
						</button>
					</form>

                    <div className="text-xl text-center pt-5  text-emerald-600  "> <span className="text-sky-400">0</span> remaining out of <span className="text-sky-400">5</span></div>
                    {/* List to be iterated over */}
					<ul class='list-disc text-emerald-600 flex flex-col items-center p-5'>
						<li>
							{this.state.todos}
						</li>
                        <li>
							Go to the beach
						</li>
                        <li>
							Go to the beach
						</li>
					</ul>
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
