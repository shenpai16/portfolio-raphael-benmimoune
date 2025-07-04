export default function Tooltip({text, children}: {text: string, children: React.ReactNode}) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="
                absolute bottom-full mb-2 
                left-1/2 transform -translate-x-1/2 
                w-max max-w-xs 
                bg-gray-800 text-white text-sm rounded p-6
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                z-10
                whitespace-normal">
        {text}
      </div>
    </div>
  );
}
