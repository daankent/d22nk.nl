export default function Footer() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto relative border-gray-200 pt-4 pb- sm:pb-8 text-gray-900 bg-gray-50">
      <p className="italic text-gray-400 text-sm">
        &copy; 2022-{new Date().getFullYear()} Daan Kentrop
      </p>
    </div>
  );
}
