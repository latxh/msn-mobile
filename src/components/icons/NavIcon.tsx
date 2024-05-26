import { Component } from "solid-js";

const NavIcon: Component = () => {
    return (
        <svg fill="var(--font-1)" aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.753 18h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493L2.753 18h18.5-18.5Zm0-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493l.102-.007h18.5-18.5Zm-.001-6.5h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5A.75.75 0 0 1 2.65 5.01l.102-.007h18.5-18.5Z" />
        </svg>
    );
};

export default NavIcon;
