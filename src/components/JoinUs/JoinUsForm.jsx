export default function JoinUsForm() {
    return (
        <div className="max-w-md mx-auto rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
                Share your details and expertise to help farmers.
            </p>

            <form className="space-y-4">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border-b border-green-800 p-3 focus:outline-none"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border-b border-green-800 p-3 focus:outline-none"
                    />
                </div>

                <div>
                    <select
                        id="expertise"
                        name="expertise"
                        className="w-full rounded-lg border-b border-green-800 p-3 focus:outline-none "
                    >
                        <option value="">Select your area of expertise</option>
                        <option value="sustainable-farming">Sustainable Farming</option>
                        <option value="irrigation">Water & Irrigation</option>
                        <option value="post-harvest">Post-Harvest & Storage</option>
                        <option value="livestock">Livestock / Dairy</option>
                        <option value="agritech">AgriTech / Sensors</option>
                        <option value="market-access">Market Access & Cooperatives</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="px-5 py-2 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
