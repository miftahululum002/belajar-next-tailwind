export default function ToTop() {
  return (
    <a
      href="#home"
      className="fixed hidden justify-center items-center z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse"
      id="to-top"
    >
      <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
    </a>
  );
}
