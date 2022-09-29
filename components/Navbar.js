import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-primary-content lg:px-48 py-4">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-primary">0x</span>Swap
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn">Connect Wallet</a>
      </div>
    </div>
  );
}
