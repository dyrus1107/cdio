import Logo from "./logo";

const Footer = () => {
  return (
    <div className="h-[320px] w-full bg-primary flex justify-between text-background px-48 py-20 dark:text-foreground">
      <div className="space-y-2">
        <h1 className="font-bold">Connect</h1>
        <div className="font-light underline text-background dark:text-foreground">
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">Products</h1>
        <div className="font-light underline text-background dark:text-foreground">
          <p>AI Note-Taking</p>
          <p>Knowledge Base</p>
          <p>Productivity Tools</p>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">Quick Links</h1>
        <div className="font-light underline text-background dark:text-foreground">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>FAQs</p>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">About Us</h1>
        <div className="font-light underline text-background dark:text-foreground">
          <p>Our Story</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
      </div>
      <div>
        <Logo color="white" />
        <span className="text-white text-sm">@2024 StuMate</span>
      </div>
    </div>
  );
};

export default Footer;
