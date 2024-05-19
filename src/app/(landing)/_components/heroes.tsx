import { Button } from "@/components/ui/button";

const Heroes = () => {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden flex flex-col items-center px-64 py-40">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-300 to-sky-400 dark:from-red-400 dark:to-sky-500 z-0 transition-all duration-200">
        <div className="absolute w-1/2 aspect-square bg-green-500 -top-[50%] -right-[20%] rounded-full blur-[6000px]"></div>
      </div>
      <div className="z-20 relative w-full text-center flex flex-col items-center gap-20">
        <h1 className="text-6xl font-extrabold max-w-4xl ">
          Your Thoughts, Your Knowledges, Your{" "}
          <span className="underline">Companion</span>
        </h1>
        <h2 className="text-4xl font-bold max-w-6xl">
          Empower your knowledge with AI-driven insights. Your ultimate
          companion for capturing and organizing thoughts
        </h2>
        <Button size="xl" className="text-xl font-semibold">
          Say hi to your Mate
        </Button>
      </div>
    </div>
  );
};

export default Heroes;
