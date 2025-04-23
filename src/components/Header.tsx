
import { Search } from "lucide-react";

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className="bg-primary py-6 px-4 md:px-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
            <span className="text-primary text-xl font-bold">⚽</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            SoccerHub
          </h1>
        </div>

        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search players..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-75" size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
