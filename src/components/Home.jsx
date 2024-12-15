import React from "react";

const links = [
  { id: 1, href: "about", text: "About" },
  { id: 2, href: "projects", text: "Projects" },
  { id: 3, href: "skills", text: "Skills" },
  { id: 4, href: "experience", text: "Experience" },
  { id: 5, href: "contacts", text: "Contacts" },
];

const Home = () => {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/developer.png')" }}
      >
        <div className="pt-16 flex flex-col items-center">
          <h2 className="text-aliceblue text-2xl font-light">Hi, I'm Jawad Asghar</h2>
          <h1 className="text-aliceblue text-6xl mt-6">Designer / Developer</h1>
        </div>
      </div>

      <div className="fixed top-12 right-12">
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li className="hover:cursor-pointer hover:opacity-80 hover:translate-x-1 duration-300 transition-all ease-in-out" key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
