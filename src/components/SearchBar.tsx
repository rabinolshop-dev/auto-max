import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12 animate-fade-in">
      <div className="glass-card p-2 rounded-full flex items-center gap-3">
        <Search className="text-muted-foreground ml-4" size={20} />
        <Input
          type="text"
          placeholder="Search by vehicle model, part number, or category..."
          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
};

export default SearchBar;
