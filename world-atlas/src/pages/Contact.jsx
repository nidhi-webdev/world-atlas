export const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)]">

            <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700">

                {/* Header */}
                <h2 className="font-extrabold text-4xl text-white text-center mb-2"> Contact Us </h2>
                <p className="text-gray-400 text-center mb-8"> We'd love to hear from you. Send us a message! </p>

                <form className="flex flex-col gap-5">

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm font-semibold">Your Name</label>
                        <input
                            type="text"
                            required
                            autoComplete="off"
                            placeholder="Enter Your Name"
                            name="username"
                            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm font-semibold">Your Email</label>
                        <input
                            type="email"
                            required
                            autoComplete="off"
                            placeholder="Enter Your Email"
                            name="email"
                            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-300 text-sm font-semibold">Your Message</label>
                        <textarea
                            rows="6"
                            placeholder="Enter Your Message"
                            required
                            autoComplete="off"
                            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 cursor-pointer mt-2"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    )
}