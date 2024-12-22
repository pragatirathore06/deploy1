import { useState } from "react";
import Saas from "./Saas"; // Correctly import Saas component
import S from "./S"; // Correctly import Self component

function App() {
  const [selectedOption, setSelectedOption] = useState("saas");

  return (
    <div className="flex flex-col lg:flex-row h-screen relative">
      {/* Left Section - Hidden on small screens */}
      <div className="hidden lg:flex w-1/2 justify-center items-center bg-gray-50">
        <div className="w-80 p-8 bg-white text-center rounded-lg shadow-lg relative">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/src/image/logo.jpeg"
              alt="Logo"
              className="w-12 h-12 object-cover rounded-full shadow-lg mr-3"
            />
            <p className="text-black text-lg font-semibold">
              AI to detect & autofix bad code
            </p>
          </div>

          <hr className="w-64 mx-auto border-t-1 border-black my-4" />

          <div className="flex justify-around text-black">
            <div className="text-center">
              <p className="text-xl">30+</p>
              <p>Language support</p>
            </div>
            <div className="text-center">
              <p className="text-xl">10K+</p>
              <p>Developers</p>
            </div>
            <div className="text-center">
              <p className="text-xl">100K+</p>
              <p>Hours saved</p>
            </div>
          </div>

          {/* Second Box */}
          <div className="w-60 h-36 p-4 bg-white text-black rounded-lg shadow-lg absolute top-38 left-40">
            <div className="flex items-center mb-2">
              <img
                src="/src/image/A.png"
                alt="Logo"
                className="w-12 h-12 object-cover rounded-full shadow-lg mr-3"
              />
              <div>
                <div className="flex items-center">
                  {/* Image just before 14% */}
                  <img
                    src="/src/image/arr.png"
                    alt="Logo"
                    className="w-4 h-4 object-cover rounded-full shadow-lg mr-2" // Adjusted margin
                  />
                  <p className="text-lg font-semibold text-blue-800">14%</p>
                </div>
                <p>This week</p>
              </div>
            </div>
            <div className="text-left text-sm font-medium">Issue fixed</div>
            <div className="text-left text-sm font-medium">500K+</div>
          </div>
        </div>
      </div>

      {/* Right Section - Visible for all screen sizes */}
      <div className="flex justify-center items-center w-full lg:w-1/2 bg-gray-100 p-4 relative">
        <div className="w-full sm:w-96 p-8 bg-white text-center rounded-lg shadow-lg">
          <h2 className="text-xl text-gray-800 mb-4">CodeAnt AI</h2>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to CodeAnt AI
          </h1>
          <div className="border border-gray-200 flex rounded-md">
            <button
              onClick={() => setSelectedOption("saas")}
              className={`flex-1 px-6 py-2 text-md font-medium text-gray-700 transition-all rounded-sm ${
                selectedOption === "saas"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-600 hover:text-white"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setSelectedOption("self")}
              className={`flex-1 px-6 py-2 text-md font-medium text-gray-700 transition-all rounded-sm ${
                selectedOption === "self"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-600 hover:text-white"
              }`}
            >
              Self Hosted
            </button>
          </div>
          <hr className="w-auto mx-auto border-t-1 border-black my-4" />

          {/* Conditional Content based on the selected option */}
          {selectedOption === "saas" && <Saas />}
          {selectedOption === "self" && <S />}
        </div>

        {/* Privacy Policy Text */}
        <p className="absolute bottom-11 transform -translate-y-1/2 text-center text-sm w-full text-gray-600">
          By signing up you agree to the <strong>Privacy Policy</strong>.
        </p>
      </div>

      {/* Bottom-Left Image */}
      <img
        src="/src/image/logo.png"
        alt="Background"
        className="absolute bottom-0 left-0 w-40 h-40 opacity-50 hidden lg:block"
      />
    </div>
  );
}

export default App;
