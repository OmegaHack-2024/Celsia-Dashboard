import { useTheme } from "next-themes";

export default function AuthBanner() {
  const { theme } = useTheme();
  return (
    <img
      src={theme === 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
      alt="Image"
      width="1920"
      height="1080"
      style={{ height: "100%", width: "100%", objectFit: "cover" }}
    />
  );
}