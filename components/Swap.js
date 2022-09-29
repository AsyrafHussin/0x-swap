import React from "react";

export default function Swap() {
  return (
    <>
      <div className="card lg:w-1/3 bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">Swap</h2>

          <div className="bg-primary-content rounded-lg mt-4 p-4 flex justify-around items-center gap-2">
            <input
              type="text"
              placeholder="Amount"
              className="input input-ghost w-full max-w-xs"
            />

            <select className="select select-bordered">
              <option disabled selected>
                Select a token
              </option>
              <option>Token 1</option>
              <option>Token 2</option>
            </select>
          </div>

          <div className="relative">
            <div className="flex w-full justify-center absolute -top-6">
              <button className="btn btn-circle btn-outline bg-base-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="16" y1="15" x2="12" y2="19" />
                  <line x1="8" y1="15" x2="12" y2="19" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-primary-content rounded-lg mt-0 p-4 flex justify-around items-center gap-2">
            <input
              type="text"
              placeholder="Amount"
              className="input input-ghost w-full max-w-xs"
            />

            <select className="select select-bordered">
              <option disabled selected>
                Select a token
              </option>
              <option>Token 1</option>
              <option>Token 2</option>
            </select>
          </div>

          <p className="py-3">Estime Gas : 0.00</p>
          <button className="btn btn-primary btn-lg">Swap</button>
        </div>
      </div>
    </>
  );
}
