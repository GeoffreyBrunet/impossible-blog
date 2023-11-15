import { Navigation } from "../atoms/navigation";
import { ToggleTheme } from "../atoms/toggle-theme";

export function Navbar() {
  return (
    <div className="flex">
      <Navigation />
      <ToggleTheme />
    </div>
  );
}
