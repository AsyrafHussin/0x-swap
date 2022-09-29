import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 lg:px-48 py-4">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-primary">0x</span>Swap
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Connect Wallet</a>
      </div>
    </div>
  );
}
