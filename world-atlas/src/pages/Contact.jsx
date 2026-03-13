export const Contact = () => {
    return <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="font-bold text-3xl mb-8 "> Contact Us </h2>
        <div className="flex flex-col justify-center items-center">
            <form action="">
                <input
                    type="text"
                    required
                    autoComplete="false"
                    placeholder="Enter Your Name"
                    name="username"
                    className="border border-gray-600 flex flex-col mb-8 " />

                <input
                    type="email"
                    required
                    autoComplete="false"
                    placeholder="Enter Your Email"
                    name="email"
                    className="border border-gray-600 flex flex-col mb-8" />

                <textarea
                    rows="10"
                    placeholder="Entre Your Message"
                    required
                    autoComplete="false"
                    className="border border-gray-600 flex flex-col"></textarea>

                <button type="submit"> Send </button>
            </form>
        </div>

    </div>


}