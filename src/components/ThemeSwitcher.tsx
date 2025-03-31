
import React from "react";
import { Sun, Moon, Laptop, Palette } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("", className)}>
          {theme === "light" && <Sun className="h-5 w-5 transition-all" />}
          {theme === "dark" && <Moon className="h-5 w-5 transition-all" />}
          {theme === "system" && <Laptop className="h-5 w-5 transition-all" />}
          {theme === "psyche" && <Palette className="h-5 w-5 transition-all" />}
          {theme === "ocean" && <Palette className="h-5 w-5 transition-all" />}
          {theme === "nature" && <Palette className="h-5 w-5 transition-all" />}
          {theme === "sunset" && <Palette className="h-5 w-5 transition-all" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("psyche")}>
          Psyche
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("ocean")}>
          Ocean
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("nature")}>
          Nature
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunset")}>
          Sunset
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
