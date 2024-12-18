const sidebarItems = [
  { src: "/Navbar/home.png", href: "/" },
  { src: "/Navbar/message.png", href: "/" },
  { src: "/Navbar/users.png", href: "/" },
];

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-16 bg-[#0F4C44] flex flex-col items-center py-4">
      <div className="w-10 h-10 bg-white/10 rounded-lg mb-8 flex items-center justify-center">
        <img src="/Navbar/icon.png" />
      </div>
      {sidebarItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg mb-4"
        >
          <img src={item.src} className="w-9 h-9" />
        </a>
      ))}
    </div>
  );
}
