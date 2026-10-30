function App() {
    return (
        <div className="bg-page">
            <div className="max-w-[1400px] mx-auto font-sans overflow-hidden rounded-lg bg-bg">                

                <nav className="flex items-center flex-wrap py-4 px-8">
                    <div className="flex-1 font-semibold">Cashmap</div>
                    <ul className="flex gap-8 flex-wrap">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Catalog</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                    <div className="flex flex-1 gap-4 justify-end">
                        <button className="bg-surface text-on-accent px-8 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">
                            Log In
                        </button>
                        <button className="bg-inverse text-on-inverse px-8 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">
                            Download App
                        </button>
                        <button id="theme-toggle cursor-pointer">
                            🌙/☀️
                        </button>
                    </div>
                </nav>

                <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-accent p-16 m-8 rounded-md">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">Invest for the Future</h1>
                        <p className="text-base mt-4 max-w-md text-on-accent">
                            Work with all the necessary information and tools to boost
                            money flow from your capital investment using Cashmap!
                        </p>
                        <div className="flex mt-4 gap-2">
                            <button className="bg-inverse px-4 py-2 text-on-inverse rounded-sm font-semibold hover:opacity-90 cursor-pointer">Download App</button>
                            <button className="bg-transparent text-on-accent">Find Out More</button>
                        </div>
                    </div>
                    <div className="bg-black/10 rounded-md min-h-[300px] flex items-center justify-center text-sm text-on-accent">Ilustracion</div>
                </header>

                <section className="py-24 px-8">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">Get the Most Out of Your Investments</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
                        <article className="flex flex-col gap-3 bg-surface rounded-md p-8">
                            <h3 className="text-xl md:text-2xl">Unlimited Portfolio Accounts</h3>
                            <p className="text-on-accent">Manage all your financial assets from one place</p>
                            <button className="self-start cursor-pointer">Find Out More</button>
                        </article>
                        <article className="flex flex-col gap-3 bg-surface rounded-md p-8">
                            <h3 className="text-xl md:text-2xl">Full Analytics in Your App</h3>
                            <p className="text-on-accent">Analyze the results and try different Strategies for more income</p>
                            <button className="self-start">Read More</button>
                        </article>
                    </div>
                </section>

                <section className="py-24 px-8 flex flex-col justify-center items-center gap-8 md:flex-row md:gap-24">
                    <div>
                        <h2 className="text-3xl md:text-4xl">Advantages</h2>
                        <p>
                            We listen to our customers and work with them
                            to improve the user experience of our platform.
                         </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <article className="p-8"> 
                            <h3 className="font-bold text-lg my-4">Smooth Start</h3>
                            <p className="my-4">
                                Without a visit to office, we will set up
                                your brokerage account in 5 minutes.
                            </p>
                            <button className="border-none rounded-sm p-4 bg-surface text-text cursor-pointer">Open an Account</button>
                        </article>

                        <article className="p-8">
                            <h3 className="font-bold text-lg my-4">24/7 Support</h3>
                            <p className="my-4">
                                Our support team is always available to answer
                                questions and resolve any issues.
                            </p>
                            <button className="border-none rounded-sm p-4 bg-surface text-text cursor-pointer">Ask a Question</button>
                        </article>

                        <article className="p-8">
                            <h3 className="font-bold text-lg my-4">Low Commissions</h3>
                            <p className="my-4">
                                We give you the best rate we can for any kind of
                                transactions. No extra fees.
                            </p>
                            <button className="border-none rounded-sm p-4 bg-surface text-text cursor-pointer">Explore Prices</button>
                        </article>
                        <article className="p-8">
                            <h3 className="font-bold text-lg my-4">Invest Any Amount</h3>
                            <p className="my-4">
                                You don't have to have large sums to start investing,
                                start small.
                            </p>
                            <button className="border-none rounded-sm p-4 bg-surface text-text cursor-pointer">Start Now</button>
                        </article>
                    </div>
                </section>

                <section className="flex flex-col gap-4 items-center py-24 px-8">
                    <h2 className="text-3xl md:text-4xl">Our Partners</h2>
                    <p>
                        The largest banks, funds and exchanges from all over the world
                        cooperate with us.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">A</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">B</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">C</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">D</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">E</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">F</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">G</div>
                        <div className="flex items-center justify-center bg-surface size-[50px] rounded-full">H</div>
                    </div>
                </section>

                <section className="flex flex-col items-center text-center py-24 px-8">
                    <h2 className="text-3xl md:text-4xl">
                        Get the app for Free
                        and Start Now
                    </h2>
                    <button className="bg-inverse text-on-inverse rounded-sm py-2 px-8 my-4 cursor-pointer">Download App</button>
                </section>

                <footer className="bg-inverse text-on-inverse p-8">
                    <div>Cashmap</div>

                    <div>
                        <h3 className="font-bold my-5">Resources</h3>
                        <ul className="ps-10">
                            <li><a href="#">Stocks &amp; Funds</a></li>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Help &amp; Support</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold my-5">Company</h3>
                        <ul className="ps-10">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold my-5">Subscribe to News</h3>
                        <form>
                            <input type="email" placeholder="Your e-mail"/>
                            <button type="submit cursor-pointer">Subscribe</button>
                        </form>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App